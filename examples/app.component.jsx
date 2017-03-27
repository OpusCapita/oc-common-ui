import React from 'react';
import Menu from '../src/menu/menu.component';
import ITEMS from './layout/menu.constants';
import { mainLayout } from '../src/index';

import './app.component.scss';

// const {whyDidYouUpdate} = require('why-did-you-update')
// whyDidYouUpdate(React)

const headerStyle = { height: 40, width: '100%', backgroundColor: 'green'};
class Header extends React.Component {
  render() { return  (
    <div style={headerStyle}>HERE BE HEADER</div>
    );
  }
}

class SideMenu extends React.PureComponent {
  render() { return  <Menu items={ITEMS}/> }
}

const menuStyle = { width: 200, height: '100%', backgroundColor: 'blue'};
class TestMenu extends React.Component {
  render() {
    return <div style={menuStyle}>HERE BE MENU</div>
  }
}

const appStyle = { height: '100%', backgroundColor: 'yellow'};
class TestApp extends React.Component {
  render() {
    return <div style={appStyle}>HERE BE CONTENT</div>
  }
}

const footerStyle = { height: 40, backgroundColor: 'red'};
class Footer extends React.Component {
  render() { return  (
    <div style={footerStyle}>HERE BE FOOTER</div>
    );
  }
}

const layoutOptions = {
  closeMenuOutside: true,
  showHeader: true,
  breakPoint: 1279,
};

class App extends React.Component {
  getContent = () => {
    return (
      <div className="oc-content-container">
        { this.props.children }
      </div>
      )
  };
  render() { return this.getContent(); }
}

export default mainLayout(App, null, SideMenu, null, layoutOptions);
