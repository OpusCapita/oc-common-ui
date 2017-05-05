import React from 'react';
import { Menu } from '../../../src/index';

const getItems = () => {
  const label = 'Menu Item';

  /* eslint-disable arrow-body-style */
  const items = Array(15).fill().map((e, i) => {
    return {
      id: i,
      text: `${label} ${i}`,
      items: Array(10).fill().map((a, b) => {
        return {
          id: `${i}.${b}`,
          text: `${label} ${i}.${b}`,
          items: Array(5).fill().map((c, d) => {
            return {
              id: `${i}.${b}.${d}`,
              text: `${label} ${i}.${b}.${d}`,
            };
          }),
        };
      }),
    };
  });

  return items;
};

export default class MenuView extends React.Component {
  constructor(props) {
    super(props);
    this.items = getItems();
  }

  render() {
    const style = {
      height: 400,
      width: 300,
      overflowY: 'auto',
    };

    return (
      <div className="oc-content">
        <div style={style}>
          <Menu items={this.items} isNavigation={false} />
        </div>
      </div>
    );
  }
}
