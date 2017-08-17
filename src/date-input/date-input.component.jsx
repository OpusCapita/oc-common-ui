import React from 'react';
import PropTypes from 'prop-types';
import TetherComponent from 'react-tether';
import DayPicker from 'react-day-picker';
import LocaleUtils from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

import DateInputField from './date-input-field.component';
import './date-input.component.scss';
import { KEY_CODES } from '../constants';

const HIDE_TIMEOUT = 100;

export default class DateInput extends React.Component {
  static propTypes = {
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
    dateFormat: 'MM/DD/YYYY',
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
      currentlyVisibleDate: props.value || new Date(),
    };
    const currentYear = new Date().getFullYear();
    const fromMonth = new Date(currentYear - 100, 0);
    const toMonth = new Date(currentYear + 100, 11);
    this.years = [];
    for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
      this.years.push(i);
    }
    this.dateInputField = null;
    this.reactDayPicker = null;
    this.clickedInside = false;
    this.clickTimeout = null;
    this.hideTimeout = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this.reactDayPicker) {
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
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
    clearTimeout(this.hideTimeout);
  }

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
    this.setState({
      currentlyVisibleDate: value || new Date(),
    });
    this.props.onChange(value);
  }

  handleYearMonthChange = (e) => {
    const { year, month } = e.target.form;
    const newDate = new Date(year.value, month.value);
    this.setState({
      currentlyVisibleDate: newDate,
    });
    this.reactDayPicker.showMonth(newDate);
  }

  handleMonthChange = (value) => {
    this.setState({
      currentlyVisibleDate: value || new Date(),
    });
  }

  renderDayPickerCaption = () => {
    const months = LocaleUtils.getMonths(this.props.locale);
    const selectedMonth = this.state.currentlyVisibleDate.getMonth();
    const selectedYear = this.state.currentlyVisibleDate.getFullYear();
    return (
      <form className="DayPicker-Caption">
        <select
          name="month"
          onChange={this.handleYearMonthChange}
          value={selectedMonth}
        >
          {months.map((month, i) => <option key={i} value={i}>{month}</option>)}
        </select>
        <select
          name="year"
          onChange={this.handleYearMonthChange}
          value={selectedYear}
        >
          {this.years.map((year, i) =>
            <option key={i} value={year}>
              {year}
            </option>
          )}
        </select>
      </form>
    );
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
          month={this.props.value}
          selectedDays={this.props.value}
          tabIndex={-1}
          fixedWeeks
          showWeekNumbers
          canChangeMont
          onChange={this.handleDateChange}
          onDayClick={this.handleDayClick}
          onMonthChange={this.handleMonthChange}
          locale={this.props.locale}
          localeUtils={LocaleUtils}
          captionElement={this.renderDayPickerCaption}
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
        optimizations={{
          gpu: false,
        }}
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
