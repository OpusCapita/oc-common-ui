Back to [oc-common-ui](../../README.md)

# ConfirmDialog

### Description

A modal popup dialog component with yes/no and an optional third, middle button.

### Dependencies

react-bootstrap

### Initialization

N/A

#### ConfirmDialog

Name | Type | Default | Description
--- | --- | --- | ---
titleText | [element, string] | required | Title to be displayed on top of dialog
bodyText | [element, string] | required | Dialog message to be displayed
cancelCallback | function | required | Callback to function executed on cancel button click
confirmCallback | function | required | Callback to function executed on confirm button click
thirdButtonCallback | function | undefined | Callback to function executed on middle button click
okButtonText | [element, string] | required | Text to be displayed on the confirm button
cancelButtonText | [element, string] | required | Text to be displayed on the cancel button
thirdButtonText | [element, string] | undefined | Text to be displayed on the middle button


### Code example

```jsx
import { ConfirmDialog } from '@opuscapita/oc-common-ui';

class ConfirmDialogView extends React.Component {
  constructor() {
    this.state = {
      showConfirmationDialog: false;
    }
  }

  hideConfirmDialog = () => {
    this.setState({
      showConfirmationDialog: false
    });
  }

  showConfirmDialog = () => {
    this.setState({
      showConfirmationDialog: true
    });
  }

  render() {
    return (
        this.state.showConfirmationDialog &&
        <ConfirmDialog
          titleText={'Confirmation'}
          bodyText={'Are you certain?'}
          cancelCallback={this.hideConfirmDialog}
          confirmCallback={this.confirmAction}
          thirdButtonCallback={this.doSomethingElse}
          okButtonText={'Yes'}
          cancelButtonText={'No'}
          thirdButtonText={'Perhaps'}
        />
    );
  }
}
```

