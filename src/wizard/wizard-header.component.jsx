import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'react-bootstrap';

import { Icon } from '../icons/index';

import './wizard-header.component.scss';


export default class WizardHeader extends React.PureComponent {

  static propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
      component: PropTypes.node.isRequired,
      hasRequiredProps: PropTypes.bool,
      hasRequiredPropsErrors: PropTypes.bool,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    })).isRequired,
    selectPage: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired,
  }

  constructor() {
    super();

    this.scrollStep = 50;

    this.state = {
      showScroll: true,
    };

    this.tabElements = {};
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateScroll);
    this.updateScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScroll);
  }

  updateScroll = () => {
    if (this.scrollbar.offsetWidth !== this.scrollbar.scrollWidth) {
      this.setState({
        showScroll: true,
      });
    } else {
      this.setState({
        showScroll: false,
      });
    }
  }

  centerSelectedTab = (tabIndex) => {
    if (this.scrollbar.offsetWidth !== this.scrollbar.scrollWidth) {
      let offsetLeft = 0;
      for (let i = 0; i < tabIndex; i += 1) {
        offsetLeft += this.tabElements[i].offsetWidth;
      }
      this.scrollbar.scrollLeft = (offsetLeft +
        (this.tabElements[tabIndex].offsetWidth / 2)) -
        (this.scrollbar.offsetWidth / 2);
    }
  }

  scrollLeft = () => {
    this.scrollbar.scrollLeft -= this.scrollStep;
  }

  scrollRight = () => {
    this.scrollbar.scrollLeft += this.scrollStep;
  }

  validateStep = (step) => {
    if ('isValid' in step && !step.isValid) {
      return <Icon type="indicator" name="error" height={30} width={30} />;
    }
    return <span style={{ height: '30px' }} />;
  }

  render() {
    return (
      <div id="wizard-header">
        { this.state.showScroll &&
          <button className="hidden-button" onClick={this.scrollLeft}>
            <Icon type="indicator" name="CaretLeft" height={30} width={30} />
          </button> }
        <ul ref={(node) => { this.scrollbar = node; }}>
          {this.props.steps.map((step, i) => {
            let labelClassName = '';
            if (step.hasRequiredPropsErrors) {
              labelClassName = 'oc-mandatory-error';
            } else if (step.hasRequiredProps) {
              labelClassName = 'oc-mandatory';
            }
            return (
              <li
                key={step.id}
                className={i === this.props.currentStep ? 'doing' : ''}
                ref={(node) => { this.tabElements[i] = node; }}
              >
                <a
                  id={step.id}
                  href="#/"
                  onClick={(event) => {
                    this.props.selectPage(event, i);
                    this.centerSelectedTab(i);
                  }}
                >
                  <span className={labelClassName}>
                    <ControlLabel>
                      {step.name}
                    </ControlLabel>
                  </span>
                  {this.validateStep(step)}
                </a>

              </li>
            );
          })}
        </ul>
        { this.state.showScroll &&
          <button className="hidden-button" onClick={this.scrollRight}>
            <Icon type="indicator" name="CaretRight" height={30} width={30} />
          </button> }
      </div>
    );
  }
}
