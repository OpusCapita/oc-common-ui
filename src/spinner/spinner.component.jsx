import React from 'react';
import ReactSpinner from 'react-spinjs';


export class Spinner extends React.Component {

  render() {
    let spinnerOptions = {
      color: '#FAC51D',
      width: 4,
    };

    return (
      <ReactSpinner config={spinnerOptions}/>
    );
  }
}
