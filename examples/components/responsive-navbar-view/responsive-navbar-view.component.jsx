import React from 'react';
import { withRouter, routerShape } from 'react-router';

import { ResponsiveNavbar } from '../../../src/index';


const ResponsiveNavbarView = (props) => {
  const list = [
    { name: 'Style', href: '/autocomplete' },
    { name: 'Item 2 longer and longer', href: '/autocomplete' },
    { name: 'Item 3 even longer and longer', href: '/autocomplete' },
    { name: 'Item 4', href: '/autocomplete' },
  ];

  const activeKey = 2;

  return (
    <ResponsiveNavbar
      activeKey={activeKey}
      list={list}
      onSelect={(href) => { props.router.push(href); }}
    />
  );
};

ResponsiveNavbarView.propTypes = {
  router: routerShape.isRequired,
};

export default withRouter(ResponsiveNavbarView);
