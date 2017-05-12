import React from 'react';

import { DropdownContainer } from '../../../src/index';

function DropdownContainerView() {
  const containerStyle = {
    width: '400px',
    padding: '10px',
    margin: '10px',
    background: '#FFFFFF',
  };

  const contentStyle = {
    width: '400px',
    padding: '20px',
    backgroundColor: '#D3DADE',
  };

  return (
    <div style={containerStyle}>
      <DropdownContainer
        id="exampleDropdownContainer"
        isOpen
        noCaret
        title="Dropdown title"
      >
        <div style={contentStyle}>
          CONTENT
        </div>
      </DropdownContainer>
    </div>
  );
}

export default DropdownContainerView;
