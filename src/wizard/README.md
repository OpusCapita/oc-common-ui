Back to [oc-common-ui](../../README.md)

# Wizard

### Description

Wizard component that can contain any number of wizard pages.

### Dependencies

react-bootstrap

### Initialization

N/A

#### Wizard

Name | Type | Default | Description
--- | --- | --- | ---
cancel | function | required | Callback function called, when the wizard is cancelled
disableCancel | bool | false | Disable the Cancel button
localizationTexts | map | { save: 'Save', cancel: 'Cancel', saved: 'Saved' } | Localization texts for save and close buttons and a save success message. Defaults to 'Save', Close' and 'Saved'.
save | function | required | Callback function called, when the wizard is saved
disableSave | bool | false | Disable the Save button
showPageIndicator | bool | true | Sign of page indicator showing
steps | array | required | Steps of the wizard
activeStep | number | 0 | Index of the active step. You can also set initial active step via URL parameter 'initialStep', e.g. http://localhost/wizard/?initialStep=stepId
showSaveSuccess | bool | false | If true, shows a success message in the footer

#### Wizard - steps props

Name | Type | Default | Description
--- | --- | --- | ---
component | element | required | Step content
hasRequiredProps | bool | false | Sign of required fields in the content
hasRequiredPropsErrors | bool | false | Sign of invalidated required props
id | [number, string] | required | Step id
name | [element, string] | required | Step name

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

