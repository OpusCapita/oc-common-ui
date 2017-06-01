import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { Icon } from '../icons/index';

import './wizard-footer.component.scss';


export default class WizardFooter extends React.Component {

  static propTypes = {
    save: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    localizationTexts: PropTypes.shape({
      save: PropTypes.string,
      cancel: PropTypes.cancel,
    }).isRequired,
    steps: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    })).isRequired,
    selectPage: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired,
    showPageIndicator: PropTypes.bool,
  }

  getIndicators = () => (
    this.props.steps.map((step, i) => {
      if (i === this.props.currentStep) {
        return <span key={step.id} className="tab-indicator tab-highlight" />;
      }
      return <span key={step.id} className="tab-indicator" />;
    })
  )

  render() {
    return (
      <div id="wizard-footer">
        <div id="bottom-indicators">
          {this.props.showPageIndicator && this.getIndicators()}
        </div>
        <div id="bottom-buttons">
          <Button
            id="previous-step"
            onClick={(event) => {
              this.props.selectPage(event, this.props.currentStep - 1);
            }}
          >
            <Icon type="indicator" name="CaretLeft" height={30} width={30} />
          </Button>
          <span className="divider" />
          <Button id="save-button" onClick={this.props.save}>
            {this.props.localizationTexts.save}
          </Button>
          <span className="divider-small" />
          <Button id="cancel-button" onClick={this.props.cancel}>
            {this.props.localizationTexts.cancel}
          </Button>
          <span className="divider" />
          <Button
            id="next-step"
            onClick={(event) => {
              this.props.selectPage(event, this.props.currentStep + 1);
            }}
          >
            <Icon type="indicator" name="CaretRight" height={30} width={30} />
          </Button>
        </div>
      </div>
    );
  }
}
