import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TetherComponent from 'react-tether';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import DateInputField from './date-input-field.component';
import './date-input.component.scss';
import { KEY_CODES } from '../constants';

const HIDE_TIMEOUT = 100;

export default class DateInput extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    value: PropTypes.instanceOf(Date),

    dateFormat: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]).isRequired,
    disabled: PropTypes.bool,
    locale: PropTypes.string,

    hideOnDayClick: PropTypes.bool,
    clickUnselectsDay: PropTypes.bool,

    onChange: PropTypes.func,
    onValidate: PropTypes.func,

    inputProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    dayPickerProps: PropTypes.object,  // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    value: null,
    dateFormat: moment.localeData()._longDateFormat.L, // eslint-disable-line no-underscore-dangle
    disabled: false,
    locale: 'en',
    hideOnDayClick: true,
    clickUnselectsDay: false,
    onChange: () => {},
    onValidate: () => {},
    inputProps: {},
    dayPickerProps: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.reactDayPicker) return;
    const hasDifferentValue = this.props.value !== nextProps.value;
    const month = nextProps.value || new Date();
    const shouldDisplayAnotherMonth =
      nextProps.dayPickerProps &&
      nextProps.dayPickerProps.month &&
      (nextProps.dayPickerProps.month.getFullYear() !== month.getFullYear() ||
        nextProps.dayPickerProps.month.getMonth() !== month.getMonth());

    if (hasDifferentValue && !shouldDisplayAnotherMonth) {
      this.reactDayPicker.showMonth(month);
    } else if (shouldDisplayAnotherMonth) {
      this.reactDayPicker.showMonth(nextProps.dayPickerProps.month);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
    clearTimeout(this.hideTimeout);
  }

  dateInputField = null;
  reactDayPicker = null;
  clickedInside = false;
  clickTimeout = null;
  hideTimeout = null;

  showDayPicker = () => {
    this.setState({
      showOverlay: true,
    });
  }

  hideDayPicker = () => {
    this.setState({
      showOverlay: false,
    });
  }

  hideAfterDayClick = () => {
    if (!this.props.hideOnDayClick) {
      return;
    }
    this.hideTimeout = setTimeout(
      () => this.hideDayPicker(),
      HIDE_TIMEOUT, // give a timeout to show the clicked day
    );
  };

  handleContainerMouseDown = () => {
    this.clickedInside = true;
    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    this.clickTimeout = setTimeout(() => {
      this.clickedInside = false;
    }, 0);
  };

  handleClick = (e) => {
    this.showDayPicker();
    if (this.props.inputProps.onClick) {
      e.persist();
      this.props.inputProps.onClick(e);
    }
  };

  handleFocus = (e) => {
    this.showDayPicker();
    if (this.props.inputProps.onFocus) {
      e.persist();
      this.props.inputProps.onFocus(e);
    }
  };

  handleBlur = (e) => {
    this.setState({
      showOverlay: this.clickedInside,
    });

    // Force input's focus if blur event was caused
    // by clicking inside the overlay
    if (this.clickedInside) {
      this.dateInputField.focus();
    }

    if (this.props.inputProps.onBlur) {
      e.persist();
      this.props.inputProps.onBlur(e);
    }
  };

  handleOnKeyUp = (e) => {
    this.setState({
      showOverlay: e.keyCode !== KEY_CODES.ESC,
    });
    if (this.props.inputProps.onKeyUp) {
      e.persist();
      this.props.inputProps.onKeyUp(e);
    }
  };

  handleDayClick = (day, modifiers, e) => {
    if (this.props.dayPickerProps.onDayClick) {
      this.props.dayPickerProps.onDayClick(day, modifiers, e);
    }

    if (modifiers.disabled) {
      // Do nothing if the day is disabled
      return;
    }
    if (modifiers.selected && this.props.clickUnselectsDay) {
      // Unselect the day
      this.handleReset();
      this.hideAfterDayClick();
      return;
    }

    this.handleDateChange(day);
    this.hideAfterDayClick();
  };

  handleInputRef = (el) => {
    this.dateInputField = el;
    if (this.props.inputProps.inputRef) {
      this.props.inputProps.inputRef(el);
    }
  }

  handleReset = () => {
    this.dateInputField.clear();
    this.props.onChange(null);
  }

  handleDateChange = (value) => {
    this.props.onChange(value);
  }

  renderOverlay = () => (
    <div
      className="oc-date-input-overlay-wrapper DayPickerInput-OverlayWrapper"
      onMouseDown={this.handleContainerMouseDown}
    >
      <div className="oc-date-input-overlay DayPickerInput-Overlay">
        <DayPicker
          {...this.props.dayPickerProps}
          ref={(el) => { this.reactDayPicker = el; }}
          locale={this.props.locale}
          month={this.props.value}
          selectedDays={this.props.value}
          tabIndex={-1}
          fixedWeeks
          showWeekNumbers
          onChange={this.handleDateChange}
          onDayClick={this.handleDayClick}
        />
      </div>
    </div>
  );

  render() {
    const { inputProps } = this.props;
    delete inputProps.inputRef;
    return (
      <TetherComponent
        attachment="top center"
        constraints={[{
          to: 'scrollParent',
          attachment: 'together',
        }]}
      >
        <DateInputField
          onRef={this.handleInputRef}
          disabled={this.props.disabled}
          {...inputProps}
          value={this.props.value}
          dateFormat={this.props.dateFormat}
          onChange={this.handleDateChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onKeyUp={this.handleOnKeyUp}
          onClick={this.handleClick}
          onValidate={this.props.onValidate}
          className="DayPickerInput"
        />
        {this.state.showOverlay && this.renderOverlay()}
      </TetherComponent>
    );
  }
}
