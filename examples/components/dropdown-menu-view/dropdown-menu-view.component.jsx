/* eslint-disable no-console */

import React from 'react';

import { Icon } from '@opuscapita/react-icons';

import { DropdownMenu } from '../../../src/index';


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

  const menuItems1 = [
    {
      id: 'item_id_11',
      title: 'Item 1, dont\'t close',
      onClick: () => console.log('Item 1 clicked'),
      disableClosing: true,
    },
    {
      id: 'item_id_12',
      title: 'Item 2, with the icon',
      onClick: () => console.log('Item 2 clicked'),
      icon: <Icon type="indicator" name="ok" width={25} height={25} />,
    },
    {
      id: 'item_id_d1',
      type: 'divider',
    },
    {
      id: 'item_id_13',
      title: 'Item 3',
      onClick: () => console.log('Item 3 clicked'),
      disabled: true,
    },
  ];

  const menuItems2 = [
    {
      id: 'item_id_21',
      title: 'Item 1',
      onClick: () => console.log('Item 1 clicked'),
    },
    {
      id: 'item_id_22',
      title: 'Item 2',
      onClick: () => console.log('Item 2 clicked'),
    },
    {
      id: 'item_id_d1',
      type: 'divider',
    },
    {
      id: 'item_id_23',
      title: 'Item 3',
      onClick: () => console.log('Item 3 clicked'),
      disableClosing: true,
    },
  ];

  return (
    <div>
      <div style={containerStyle}>
        {/* Default dropdown menu with three dots */}
        <DropdownMenu
          id="example"
          menuItems={menuItems1}
        />
      </div>
      <div style={containerStyle2}>
        {/* More customized dropdown menu */}
        <DropdownMenu
          id="example2"
          menuItems={menuItems2}
          title="Dropdown"
          caret
          pullRight={false}
        />
      </div>
    </div>
  );
}

export default DropdownMenuView;
