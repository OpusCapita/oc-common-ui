import React from 'react';
import { Button } from 'react-bootstrap';

import { Wizard } from '../../../src/index';


export default class WizardView extends React.Component {
  constructor() {
    super();
    this.state = {
      showWizard: false,
    };

    this.steps = [{
      id: '1',
      name: 'Wizard page1',
      component: <div>Page 1</div>,
    }, {
      id: '2',
      name: 'Wizard page2',
      component: <div>Page 2</div>,
    }, {
      id: '3',
      name: 'Wizard page3',
      component: <div>Page 3</div>,
    }, {
      id: '4',
      name: 'Wizard page4',
      component: <div>Page 4</div>,
    }];
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
            />
          : <Button onClick={this.showWizard}>
              Start wizard...
            </Button>}
      </div>
    );
  }
}
