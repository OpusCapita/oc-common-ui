import React from 'react';
import { Button, Checkbox } from 'react-bootstrap';

import Wizard from '@opuscapita/react-wizard';

const contentStyle = {
  display: 'flex',
  backgroundColor: '#D3DADE',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase',
  minHeight: '100%',
  width: '100%',
  color: '#3B4A56',
  fontSize: '4rem',
};

export default class WizardView extends React.Component {
  constructor() {
    super();
    this.state = {
      showWizard: false,
      disableSave: false,
      disableClose: false,
    };

    this.steps = [
      {
        id: '1',
        hasRequiredProps: true,
        name: 'Wizard page 1',
        component: this.getContent('Page 1'),
      },
      {
        id: '2',
        hasRequiredProps: true,
        hasRequiredPropsErrors: true,
        name: 'Wizard page 2',
        component: this.getContent('Page 2'),
      },
      {
        id: '3',
        name: 'Wizard page 3',
        component: this.getContent('Page 3'),
      },
      {
        id: '4',
        name: 'Wizard page 4',
        component: this.getContent('Page 4'),
        isValid: false,
      },
    ];
  }

  getContent = (text) => {
    const content = (
      <div style={contentStyle}>
        {text}
      </div>
    );

    return content;
  }


  showWizard = () => {
    this.setState({
      showWizard: true,
    });
  }

  saveWizard = () => {
    this.setState({
      showWizard: false,
    });
  }

  cancelWizard = () => {
    this.setState({
      showWizard: false,
    });
  }

  toggleDisableSave = () => {
    this.setState({
      disableSave: !this.state.disableSave,
    });
  }

  toggleDisableClose = () => {
    this.setState({
      disableClose: !this.state.disableClose,
    });
  }

  render() {
    return (
      <div className="oc-content" style={{ height: '100%' }}>
        {this.state.showWizard
          ?
            <Wizard
              save={this.saveWizard}
              cancel={this.cancelWizard}
              disableSave={this.state.disableSave}
              disableCancel={this.state.disableClose}
              steps={this.steps}
              localizationTexts={{ save: 'Save', cancel: 'Close' }}
              showPageIndicator={false}
            />
          :
            <div>
              <Button onClick={this.showWizard}>
                Start wizard...
                </Button>
              <Checkbox
                checked={this.state.disableSave}
                onChange={this.toggleDisableSave}
              >
                Disable save button
                </Checkbox>
              <Checkbox
                checked={this.state.disableClose}
                onChange={this.toggleDisableClose}
              >
                Disable close button
                </Checkbox>
            </div>}
      </div>
    );
  }
}
