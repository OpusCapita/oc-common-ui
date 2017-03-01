const CONTENT = {
  header: 'Form',
  text: {
    title: 'Text input',
    empty: 'Does not contain instruction/placeholder/watermark -text when input label is defined.',
    difficult: {
      content: 'Give instructions of requested input value only in difficult places e.g.',
      example: 'Give your phone number in the format +358400098272' },
  },
  validation: {
    title: 'Field validation',
    content: `Field data should be validated when focus is moved out of the field.
      Do not start validation or any automated actions while the user is completing the text entry.
      Validation has to be done at latest when a button (Save/OK) is pushed.
      After that the focus is set on the first element that contained an error.
      Show instruction text to explain the error reason to the user.
      Error text and the field color in error case is red.
      Once corrected, the error label should be removed and the text color returns to default.
      Errors are not shown when empty form is opened.`,
  },
  mandatory: {
    title: 'Mandatory field indication',
    content: 'Indicate a mandatory field is using an asterisk ( * ) after the label.',
  },
  buttons: {
    title: 'Order of the primary and secondary buttons in forms.',
    content: 'The primary button is first and secondary buttons come after that. Buttons are aligned to the right.',
  },
};

export default CONTENT;

