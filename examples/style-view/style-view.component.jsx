import React from 'react';
import Colors from './components/colors/colors-component.jsx';
import Brand from './components/brand/brand.component.jsx';
import Rebranding from './components/rebranding/rebranding.component.jsx';
import Logos from './components/logos/logos.component.jsx';
import Logos3rdParty from './components/logos/logos-3rdparty.component.jsx';
import Fonts from './components/fonts/fonts.component.jsx';
require('./style.scss');

export default class StyleView extends React.Component {
  render() {
    return (
      <div className="oc-columns">
        <div className="oc-columns-container">
          <div className="oc-columns-item-container">
            <Colors/>
          </div>
          <div className="oc-columns-item-container">
            <Brand/>
          </div>
          <div className="oc-columns-item-container">
            <Logos/>
          </div>  
          <div className="oc-columns-item-container">
            <Logos3rdParty/>
          </div>   
          <div className="oc-columns-item-container">
            <Rebranding/>
          </div>
           <div className="oc-columns-item-container">
            <Fonts/>
          </div>          
        </div>
      </div>   
    );
  }
}
