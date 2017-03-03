import React from 'react';
import Colors from './components/colors/colors-component';
import Brand from './components/brand/brand.component';
import Rebranding from './components/rebranding/rebranding.component';
import Logos from './components/logos/logos.component';
import Logos3rdParty from './components/logos/logos-3rdparty.component';
import Fonts from './components/fonts/fonts.component';

require('./style.scss');

function StyleView() {
  return (
    <div className="oc-columns">
      <div className="oc-columns-container">
        <div className="oc-columns-item-container">
          <Colors />
        </div>
        <div className="oc-columns-item-container">
          <Brand />
        </div>
        <div className="oc-columns-item-container">
          <Logos />
        </div>
        <div className="oc-columns-item-container">
          <Logos3rdParty />
        </div>
        <div className="oc-columns-item-container">
          <Rebranding />
        </div>
        <div className="oc-columns-item-container">
          <Fonts />
        </div>
      </div>
    </div>
  );
}

export default StyleView;
