import React from 'react';

import { ResponsiveNavbar } from '../../src/index.js';

export default class ResponsiveNavbarView extends React.Component {

  render() {
    const list = [
      { name: 'Style', href: '/style' },
      { name: 'Item 2 longer and longer', href: '/style' },
      { name: 'Item 3 even longer and longer', href: '/style' },
      { name: 'Item 4', href: '/style' },
    ];
    const activeKey = 2;
    return (
      <ResponsiveNavbar activeKey={activeKey} list={list} />
    );
  }
}
