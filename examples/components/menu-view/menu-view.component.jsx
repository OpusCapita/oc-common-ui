import React from 'react';
import { withRouter, routerShape } from 'react-router';

import { Menu } from '../../../src/index';


function range(start, end) {
  const list = [];
  for (let i = start; i <= end; i += 1) {
    list.push(i);
  }
  return list;
}

const getItems = () => {
  const label = 'Menu Item';

  const items = range(1, 50).map((number, i) => (
    {
      id: i,
      text: `${label} ${i}`,
      items: range(1, 5).map((a, b) => (
        {
          id: `${i}.${b}`,
          text: `${label} ${i}.${b}`,
          // items: range(1, 5).map((c, d) => (
          //   {
          //     id: `${i}.${b}.${d}`,
          //     text: `${label} ${i}.${b}.${d}`,
          //     items: range(1, 5).map((e, f) => (
          //       {
          //         id: `${i}.${b}.${d}.${f}`,
          //         text: `${label} ${i}.${b}.${d}.${f}`,
          //         to: '/menu',
          //       }
          //     )),
          //   }
          // )),
        }
      )),
    }),
  );

  return items;
};

class MenuView extends React.Component {
  static propTypes = {
    router: routerShape.isRequired,
  }

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
          <Menu
            items={this.items}
            uppercase
            onSelect={(item) => {
              if ('to' in item) {
                this.props.router.push(item.to);
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(MenuView);
