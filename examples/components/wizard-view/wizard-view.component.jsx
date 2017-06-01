import React from 'react';
import { Button } from 'react-bootstrap';

import { Wizard } from '../../../src/index';

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
    };

    this.steps = [{
      id: '1',
      name: 'Wizard page 1',
      component: this.getContent('Page 1'),
    }, {
      id: '2',
      name: 'Wizard page 2',
      component: this.getContent('Page 2'),
    }, {
      id: '3',
      name: 'Wizard page 3',
      component: this.getContent('Page 3'),
    }, {
      id: '4',
      name: 'Wizard page 4',
      component: this.getContent('Page 4'),
      isValid: false,
    }];
  }

  getContent = (text) => {
    const content = (
      <div style={contentStyle}>
        { text }
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

  render() {
    return (
      <div className="oc-content" style={{ height: '100%' }}>
        {this.state.showWizard
          ?
            <Wizard
              save={this.saveWizard}
              cancel={this.cancelWizard}
              steps={this.steps}
              localizationTexts={{ save: 'Save', cancel: 'Cancel' }}
              showPageIndicator={false}
            />
          : <Button onClick={this.showWizard}>
              Start wizard...
            </Button>}
      </div>
    );
  }
}
