import React from 'react';
import { Link } from 'react-router';
import Logo from './style-view/components/logos/logo.component.jsx';
var Sidebar = require('react-sidebar').default;
import './app.component.scss';
import Menu from '../src/menu/menu.component.jsx';
import { ITEMS } from './layout/menu.constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sidebarOpen: true, isNarrow: false, isSideMenuOpen: false };
  }

  onSetSideMenu = () => {
    this.setState({isSideMenuOpen: !this.state.isSideMenuOpen});
  }

  getHeader = () => {
    let burger = this.state.isNarrow ? <button type="button" className="btn btn-default navbar-btn" onClick={this.onSetSideMenu}>Burger</button> : null;
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
              <div className="oc-layout-header-inline">
                { burger}
                <Logo containerStyle={{ display: 'flex', alignItems: 'center', height: 40, width: 200}} width={200} height={30}/>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link activeClassName="oc-link-active" to="/style">Style</Link></li>
                <li><Link activeClassName="oc-link-active" to="/bootstrap">Bootstrap</Link></li>               
                <li role="presentation" className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    Components <span className="caret"/>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link activeClassName="oc-link-active" to="/alerts">Alerts</Link></li>
                    <li><Link activeClassName="oc-link-active" to="/cards">Cards</Link></li>
                    <li><Link activeClassName="oc-link-active" to="/spinner">Spinner</Link></li>
                    <li><Link activeClassName="oc-link-active" to="/split-pane">Split Pane</Link></li>
                    <li><Link activeClassName="oc-link-active" to="/dropdown-menu">Dropdown Menu</Link></li>
                    <li><Link activeClassName="oc-link-active" to="/responsive-navbar">Responsive Navbar</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }

  onSetSidebarOpen = (open) => {
    this.setState({sidebarOpen: open});
  }

  mediaQueryChanged = () => {
    this.setState({isNarrow: this.state.mql.matches});
  }

  componentWillMount = () => {
    var mql = window.matchMedia(`(max-width: 1279px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, isNarrow: mql.matches});
  }

  getWithSidebar = () => {
    var sidebarContent = <Menu/>;
    return (
       <Sidebar sidebar={sidebarContent}
               docked={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
      <div className="oc-layout">
        <div className="oc-layout-header">
          { this.getHeader() }
        </div>
         <div className="oc-layout-content">        
            {this.props.children}            
        </div>       
    </div>
     </Sidebar>
    )
  };

  getWithoutSidebar = () => {   
    return (
      <div className="oc-layout">
        <div className="oc-layout-header">
          { this.getHeader() }
        </div>
         <div className="oc-layout-content">        
            <div className="oc-layout-content-left" hidden={!this.state.isSideMenuOpen && this.state.isNarrow}>
              <Menu items={ITEMS}/>
            </div>
          <div className="oc-layout-content-right">
            {this.props.children}
          </div>            
        </div>       
    </div> 
    )
  };

  render() { return this.getWithoutSidebar(); }
}
