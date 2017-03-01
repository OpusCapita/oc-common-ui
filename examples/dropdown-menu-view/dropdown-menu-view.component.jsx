/* eslint-disable no-console */

import React from 'react';
import { DropdownMenu } from '../../src/index';

function DropdownMenuView() {
  const containerStyle = {
    width: '50%',
    padding: '10px',
    margin: '10px',
    background: 'white',
    textAlign: 'right',
  };

  const containerStyle2 = {
    width: '50%',
    padding: '10px',
    margin: '10px',
    background: 'white',
  };

  return (
    <div>
      <div style={containerStyle}>
        {/* Default dropdown menu with three dots */}
        <DropdownMenu
          id="example"
          menuItems={[
            {
              id: 'item_id_1',
              title: 'Item 1, dont\'t close',
              disableClosing: true,
              onClick: () => console.log('Item 1 clicked'),
            },
            {
              title: 'Item 2',
              icon: <i className="fa fa-info" />,
              onClick: () => console.log('Item 2 clicked'),
            },
            {
              type: 'divider',
            },
            {
              title: 'Item 3',
              disabled: true,
              onClick: () => console.log('Item 3 clicked'),
            },
          ]}
        />
      </div>
      <div style={containerStyle2}>
        {/* More customized dropdown menu */}
        <DropdownMenu
          id="example2"
          title="Dropdown"
          pullRight={false}
          caret
          menuItems={[
            {
              title: 'Item 1',
              onClick: () => console.log('Item 1 clicked'),
            },
            {
              title: 'Item 2',
              icon: <i className="fa fa-info" />,
              onClick: () => console.log('Item 2 clicked'),
            },
            {
              type: 'divider',
            },
            {
              title: 'Item 3',
              disabled: true,
              onClick: () => console.log('Item 3 clicked'),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default DropdownMenuView;
