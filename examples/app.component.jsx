import React from 'react';
import Menu from '../src/menu/menu.component';
import ITEMS from './layout/menu.constants';
import { mainLayout } from '../src/index';

import './app.component.scss';

class Header extends React.Component {
  render() { return  (
    <div style={{ height: 40, width: '100%', backgroundColor: 'green'}}>HERE BE HEADER</div>
    );
  }
}

class SideMenu extends React.Component {
  render() { return  <Menu items={ITEMS}/> }
}

class TestMenu extends React.Component {
  render() {
    return <div style={{ width: 200, height: '100%', backgroundColor: 'blue'}}>HERE BE MENU</div>
  }
}

class TestApp extends React.Component {
  render() {
    return <div style={{ height: '100%', backgroundColor: 'yellow'}}>HERE BE CONTENT</div>
  }
}

class Footer extends React.Component {
  render() { return  (
    <div style={{ height: 40, backgroundColor: 'red'}}>HERE BE FOOTER</div>
    );
  }
}

class App extends React.Component {
  getContent = () => {
    return (
      <div  style={{ height: '100%'}}>
        { this.props.children }
      </div>
      )
  };
  render() { return this.getContent(); }
}

export default mainLayout(App, null, SideMenu, null, { closeMenuOutside: true, showHeader: true, breakPoint: 1279 });
