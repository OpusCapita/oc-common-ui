import React from 'react';

import { DropdownMenu } from '../../src/index.js';


export default class DropdownMenuView extends React.Component {

  render() {

    const containerStyle = {
      width: '100%',
      margin: '10px',
    };

    return (
      <div>
        <div style={containerStyle}>
          {/* Default dropdown menu with three dots */}
          <DropdownMenu
            id="example"
            menuItems={[
              {
                title: 'Item 1',
                onClick: ()=>console.log('Item 1 clicked'),
              },
              {
                title: 'Item 2',
                icon: <i className="fa fa-info" />,
                onClick: ()=>console.log('Item 2 clicked'),
              },
              {
                type: 'divider',
              },
              {
                title: 'Item 3',
                disabled: true,
                onClick: ()=>console.log('Item 3 clicked'),
              },
            ]}
          />
        </div>
        <div style={containerStyle}>
          {/* More customized dropdown menu */}
          <DropdownMenu
            id="example2"
            title="Dropdown"
            pullRight={false}
            caret={true}
            menuItems={[
              {
                title: 'Item 1',
                onClick: ()=>console.log('Item 1 clicked'),
              },
              {
                title: 'Item 2',
                icon: <i className="fa fa-info" />,
                onClick: ()=>console.log('Item 2 clicked'),
              },
              {
                type: 'divider',
              },
              {
                title: 'Item 3',
                disabled: true,
                onClick: ()=>console.log('Item 3 clicked'),
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
