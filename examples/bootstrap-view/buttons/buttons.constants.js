export const CONTENT = {
  header: 'Buttons',
  topic: 'Guidelines for buttons',
  enabled: 'Enabled',
  disabled: 'Disabled',
  guidelines: [
    'Width of the button varies according to its text label, but it has minimum values for that.',
    'Button does not have both icon and textual label.',
    'Disabled button is used when the button is not yet active, but will change to active later, e.g. when the user has filled in some information. If we can’t assume user to understand why the button is inactive, it is left as active, and a click displays a tooltip reason why it is not usable at the moment.',
    'A button can have the focus in case it is not disabled. If a button has keyboard focus, pressing the Enter key raises the Click event.',
    'As a general rule for pop-ups and dialogs: the first button is the one that takes the action forward: the "okaying" button, such as Continue, Save, Send, or Next. Next to the above is its counterpart, the "cancelling" button, such as Cancel or Back.',
    'If the button is used to open e.g. a dialog it has three dots at the end of the text.',
  ],
  labels: {
    title: 'Labels',
    topic: 'Examples of standard button labels',
    headers: {
      label: 'Label',
      for: 'For',
    },
    examples: [
      { label: 'Save', for: 'Saving information into a system e.g. at the end of a form.' },
      { label: 'Cancel', for: 'Interrupting the action or process and returning to the previous page without saving or submitting information at the end of the page. ' },
      { label: 'Submit', for: 'Submitting information to somebody else, or to some other system at the end of a form.' },
      { label: 'Back', for: 'Returning to the previous page. Used in the context of informative content rather than actions.' },
      { label: 'Close', for: 'Closing the browser window. Used only in informative pop-up windows.' },
      { label: 'Reset', for: 'Resetting form fields. Prompt recommended if the form is long. ' },
      { label: 'Search', for: 'Label for search fields. For the button, it is ok to use the word “Go.” If there is no heading for the search field," Search" is used as the button text.' },
      { label: 'Stop', for: 'Stop the action or process and staying in the current page and keeping e.g. the processed search results.' },
      { label: 'OK', for: 'Accepting a single comment from the system.' },
      { label: 'Edit', for: 'Editing content or information.' },
      { label: 'Add', for: 'Creating a new page, user, etc.' },
      { label: 'Delete', for: 'Deleting some record or a row. Confirmation recommended.' },
      { label: 'Approve', for: 'Approving an item in a workflow, task list, etc.' },
      { label: 'Reject', for: 'Rejecting an item in the workflow, task list, etc.' },
    ],
  }
};
