import React from 'react';
import { Link } from 'react-router';
import Logo from './style-view/components/logos/logo.component.jsx';

import './app.component.scss';

export default class App extends React.Component {
  getVerticalLayout = () => {
    return (<div id="oc-layout">
        <div id="oc-layout-left">
          <ul role="nav">
            <li><Link to="/bootstrap">Bootstrap</Link></li>
            <li><Link to="/alerts">Alerts</Link></li>
            <li><Link to="/cards">Cards</Link></li>
            <li><Link to="/spinner">Spinner</Link></li>
            <li><Link to="/split-pane">Split Pane</Link></li>
            <li><Link to="/dropdown-menu">Dropdown Menu</Link></li>
            <li><Link to="/responsive-navbar">Responsive Navbar</Link></li>
          </ul>
        </div>

        <div id="oc-layout-right">
          <div id="oc-layout-content">
              {this.props.children}
            </div>
        </div>
    </div>);
  };

  getHorizontalLayout = () => {
    return (
      <div id="oc-horizontal-layout">
        <div id="oc-layout-top">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
              <Logo containerStyle={{ display: 'flex', alignItems: 'center', height: 40, width: 200}} width={200} height={30}/>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><Link activeClassName="active" to="/bootstrap">Bootstrap</Link></li>
                <li><Link activeClassName="active" to="/alerts">Alerts</Link></li>
                <li><Link activeClassName="active" to="/style">Style</Link></li>
                <li><Link activeClassName="active" to="/cards">Cards</Link></li>
                <li><Link activeClassName="active" to="/spinner">Spinner</Link></li>
                <li><Link activeClassName="active" to="/split-pane">Split Pane</Link></li>
                <li><Link activeClassName="active" to="/dropdown-menu">Dropdown Menu</Link></li>
                <li><Link activeClassName="active" to="/responsive-navbar">Responsive Navbar</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        </div>

        <div id="oc-layout-bottom">
          <div id="oc-layout-content">
              {this.props.children}
            </div>
        </div>
    </div>);
  };

  render() {
    return (
      this.getHorizontalLayout()
    );
  }
}
