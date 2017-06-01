import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../icons/index';

import './wizard-header.component.scss';


export default class WizardHeader extends React.Component {

  static propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
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
          {this.props.steps.map((step, i) => (
            <li
              key={step.id}
              className={i <= this.props.currentStep ? 'doing' : ''}
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
                <span>{step.name}</span>
                {this.validateStep(step)}
              </a>

            </li>
          ))}
        </ul>
        { this.state.showScroll &&
          <button className="hidden-button" onClick={this.scrollRight}>
            <Icon type="indicator" name="CaretRight" height={30} width={30} />
          </button> }
      </div>
    );
  }
}
