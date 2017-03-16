import React from 'react';
import Icon from '../../icons/icon.component';
var Sidebar = require('react-sidebar').default;

require('./main.scss');

// <Logo containerStyle={{ display: 'flex', alignItems: 'center', height: 30, width: 200}} width={200} height={30}/>

export function mainLayout(Content, Header, Menu, Footer, options = {}) {
  const MENU_BREAK_POINT = options.breakPoint || 1279;

  return class MainLayout extends React.Component {
     constructor(props) {
      super(props);
      this.state = {sidebarOpen: true, isNarrow: false, isSideMenuOpen: false };
    }

    //Experimental technology: do not use in production
    //https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
    registerMediaQueryListener = () => {
      var mql = window.matchMedia(`(max-width: ${MENU_BREAK_POINT}px)`);
      mql.addListener(this.mediaQueryChanged);
      this.setState({mql: mql, isNarrow: mql.matches});
    }

    mediaQueryChanged = () => {
      this.setState({isNarrow: this.state.mql.matches});
    }

    widthChanged = () => {
      let isNarrow = window.innerWidth < MENU_BREAK_POINT ? true : false;
      if(isNarrow != this.state.isNarrow) {
        this.setState({isNarrow: isNarrow});
      }
    }

    componentWillMount = () => {
      window.addEventListener("resize", this.widthChanged);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.widthChanged);
    }

    onSetSideMenu = () => {
      this.setState({isSideMenuOpen: !this.state.isSideMenuOpen});
    }

    onSetSidebarOpen = (open) => {
      this.setState({sidebarOpen: open});
    }

    getHeader = () => {
      if(this.state.isNarrow || options.showHeader) {
          return (
            <div className="oc-layout-header">
              <div className="oc-layout-header-content">
                { (Menu && this.state.isNarrow) ? <a className="oc-burger" onClick={this.onSetSideMenu}>
                  <Icon type="indicator" name={this.state.isSideMenuOpen ? 'burgerClose' : 'burger'} width={25} height={25}/>
                </a> : null }
                { Header ? <Header /> : null }
              </div>
            </div>
          );
        } else {
          return null;
        }
    }

    getMenu = () => {
      if (!Menu) {
        return null;
      }

      return (
        <div className="oc-layout-main-left" hidden={!this.state.isSideMenuOpen && this.state.isNarrow}>
          <Menu />
        </div>
      );
    }

    getFooter = () => {
      if (!Footer) {
        return null;
      }

      return <div className="oc-layout-footer"><Footer /></div>;
    }

    onContentClick = (e) => {
      if(options.closeMenuOutside && this.state.isSideMenuOpen && this.state.isNarrow) {
        this.setState({isSideMenuOpen: !this.state.isSideMenuOpen});
      }
    }

    render() {
      return (
        <div className="oc-layout-main">
          { this.getHeader()  }
          <div className="oc-layout-main-content">
            { this.getMenu()  }
            <div className="oc-layout-main-right" onClick={this.onContentClick}>
              <Content {...this.props}/>
            </div>
          </div>
          { this.getFooter()  }
        </div>
      );
    }
  }
}
