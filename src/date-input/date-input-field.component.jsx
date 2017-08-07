import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-maskedinput';
import moment from 'moment';

export default class DateInputField extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    dateFormat: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onRef: PropTypes.func,
    onValidate: PropTypes.func,
    value: PropTypes.instanceOf(Date),
  }

  static defaultProps = {
    className: '',
    dateFormat: moment.localeData()._longDateFormat.L, // eslint-disable-line no-underscore-dangle
    disabled: false,
    onChange: () => {},
    onRef: () => {},
    onValidate: () => {},
    value: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value ? moment(props.value.toISOString()).format(props.dateFormat) : '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value || this.props.dateFormat !== nextProps.dateFormat) {
      const inputValue = nextProps.value ?
        moment(nextProps.value.toISOString()).format(nextProps.dateFormat) :
        '';
      this.setState({ inputValue });
    }
  }

  clear = () => {
    this.setState({ inputValue: '' });
  }

  validate = (dateString, dateFormat) => {
    const momentDate = moment(dateString, dateFormat, true);
    const error = momentDate.isValid() ? null : momentDate.invalidAt();

    if (error !== null && dateString.length) {
      this.props.onValidate(false);
    } else {
      const value = !dateString.length ? null : momentDate.toDate();
      this.props.onChange(value);
      this.props.onValidate(true);
    }
  }

  handleInputChange = (event) => {
    const inputValue = event.target.value;
    this.validate(inputValue, this.props.dateFormat);
    this.setState({ inputValue });
  }

  render() {
    const {
      className,
      dateFormat,
      disabled,
      onChange, // eslint-disable-line no-unused-vars
      onValidate, // eslint-disable-line no-unused-vars
      onRef, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      ...restProps
    } = this.props;

    const mask = dateFormat.replace(/[a-zA-Z]/g, '1');

    const { inputValue } = this.state;

    return (
      <MaskedInput
        ref={this.props.onRef}
        className={`oc-date-input-field form-control ${className}`}
        mask={mask}
        placeholderChar="‒"
        disabled={disabled}
        onChange={this.handleInputChange}
        placeholder={dateFormat}
        type="text"
        value={inputValue}
        {...restProps}
      />
    );
  }
}
