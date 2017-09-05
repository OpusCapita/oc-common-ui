import React from 'react';
import { withRouter, routerShape } from 'react-router';
import { ResponsiveNavbar } from '../../../src/index';
import './responsive-navbar-view.scss';

const ResponsiveNavbarView = (props) => {
  const list = [
    { id: 'item1', name: 'Style', href: '/autocomplete' },
    { id: 'item2', name: 'Item 2 longer and longer', href: '/autocomplete' },
    { id: 'item3', name: 'Item 3 even longer and longer', href: '/autocomplete' },
    { id: 'item4', name: 'Item 4', href: '/autocomplete' },
  ];

  const activeKey = 2;

  return (
    <div className="navbar-top-margin">
      <ResponsiveNavbar
        activeKey={activeKey}
        list={list}
        showNavItemBorder
        onSelect={(href) => { props.router.push(href); }}
      />
    </div>
  );
};

ResponsiveNavbarView.propTypes = {
  router: routerShape.isRequired,
};

export default withRouter(ResponsiveNavbarView);
