import React from 'react';
import PropTypes from 'prop-types';

import WizardHeader from './wizard-header.component';
import WizardFooter from './wizard-footer.component';

import './wizard.component.scss';


export default class Wizard extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      currentStep: 0,
    };
  }

  componentDidMount() {
    this.selectPage(undefined, this.props.activeStep);
  }

  selectPage = (event, index) => {
    if (event) {
      event.preventDefault();
    }
    if (index < 0 || index > this.props.steps.length - 1) return;
    this.setState({
      currentStep: index,
    });
  }

  render() {
    return (
      <div id="wizard-pages">
        <WizardHeader
          steps={this.props.steps}
          currentStep={this.state.currentStep}
          selectPage={this.selectPage}
        />
        <div id="wizard-content">
          {this.props.steps[this.state.currentStep].component}
        </div>
        <WizardFooter
          steps={this.props.steps}
          currentStep={this.state.currentStep}
          selectPage={this.selectPage}
          save={this.props.save}
          cancel={this.props.cancel}
          localizationTexts={this.props.localizationTexts}
          showPageIndicator={this.props.showPageIndicator}
        />
      </div>
    );
  }
}

Wizard.defaultProps = {
  activeStep: 0,
  showPageIndicator: true,
};

Wizard.propTypes = {
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    component: PropTypes.node.isRequired,
  })).isRequired,
  localizationTexts: PropTypes.shape({
    save: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    cancel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }).isRequired,
  activeStep: PropTypes.number,
  showPageIndicator: PropTypes.bool,
};
