import React from 'react';

import { FloatingSelect, FloatingSelectCreatable } from '../../../src/floating-select/index';

export default class FloatingSelectView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { selectedOption: 0, selectedCreatableOption: 0 };
  }

  componentWillMount() {
    this.options = this.initializeOptions();
    this.creatableOptions = this.initializeOptions();
  }

  onChange = (e) => {
    this.setState({ selectedOption: e });
  }

  onCreatableChange = (e) => {
    this.setState({ selectedCreatableOption: e });
  }

  initializeOptions = () => (
    [
      {
        value: 0,
        label: '',
      },
      {
        value: 1,
        label: 'Account 1',
      },
      {
        value: 2,
        label: 'Account 2',
      },
      {
        value: 3,
        label: 'EUR FI00 3333 3333 1111 11 Account ABCDEF',
      },
    ]);

  render() {
    const containerStyle = {
      background: 'white',
      margin: '10px',
      padding: '10px',
      width: '400px',
    };
    return (
      <div style={containerStyle}>
        <div>
          Select option
        </div>
        <FloatingSelect
          clearable={false}
          inputProps={{ id: 'select-example' }}
          name="select-example"
          options={this.options}
          onChange={this.onChange}
          value={this.state.selectedOption}
        />
        <div style={{ marginTop: '20px' }}>
          Create and/or select option
        </div>
        <FloatingSelectCreatable
          clearable={false}
          inputProps={{ id: 'select-creatable-example' }}
          name="select-creatable-example"
          options={this.creatableOptions}
          onChange={this.onCreatableChange}
          value={this.state.selectedCreatableOption}
        />
      </div>
    );
  }
}
