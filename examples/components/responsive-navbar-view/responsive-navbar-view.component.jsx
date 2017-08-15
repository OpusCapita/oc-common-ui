import React from 'react';
import { withRouter, routerShape } from 'react-router';
import { ResponsiveNavbar } from '../../../src/index';


const ResponsiveNavbarView = (props) => {
  const list = [
    { id: 'item1', name: 'Style', href: '/autocomplete' },
    { id: 'item2', name: 'Item 2 longer and longer', href: '/autocomplete' },
    { id: 'item3', name: 'Item 3 even longer and longer', href: '/autocomplete' },
    { id: 'item4', name: 'Item 4', href: '/autocomplete' },
  ];

  const activeKey = 2;

  return (
    <div style={{ marginTop: '10px' }}>
      <ResponsiveNavbar
        activeKey={activeKey}
        list={list}
        onSelect={(href) => { props.router.push(href); }}
      />
    </div>
  );
};

ResponsiveNavbarView.propTypes = {
  router: routerShape.isRequired,
};

export default withRouter(ResponsiveNavbarView);
