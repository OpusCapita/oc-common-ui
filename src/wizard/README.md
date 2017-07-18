Back to [oc-common-ui](../../README.md)

# Wizard

### Description

Wizard component that can contain any number of wizard pages.

### Dependencies

react-bootstrap

### Initialization

N/A

### API

#### Wizard

| Prop name         | Type                                               | Default | Description                                            |
| ----------------- | -------------------------------------------------- | ------- | ------------------------------------------------------ |
| save              | function                                           |         | Callback function called, when the wizard is saved     |
| cancel            | function                                           |         | Callback function called, when the wizard is cancelled |
| steps             | list, [{id: id, name: name, component: component}] |         | List of wizard pages (components)                      |
| localizationTexts | map, { save: 'save', cancel: 'cancel'}             |         | Localization texts                                     |
| showPageIndicator | boolean                                            | true    | Show page indicator element                            |

### Code example

```jsx
import { Wizard } from '@opuscapita/oc-common-ui';

class WizardView extends React.Component {
  constructor() {
    this.steps = [{
      id: '1',
      name: 'Wizard page 1',
      component: <div>My wizard page 1</div>,
    }, {
      id: '2',
      name: 'Wizard page 2',
      component: <div>My wizard page 2</div>,
    }];
  }
  
  render() {
    return (
      <Wizard
        save={this.saveWizard}
        cancel={this.cancelWizard}
        steps={this.steps}
        localizationTexts={{ save: 'Save', cancel: 'Cancel' }}
        showPageIndicator={false}
      />
    );
  }
}
```

