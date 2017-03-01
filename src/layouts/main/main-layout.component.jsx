import React from 'react';

require('./main-layout.scss');

export default function MainLayout() {
  return (
    <div className="oc-layout-main">
      <div className="oc-layout-header" />
      <div className="oc-layout-main-content">
        <div className="oc-layout-left" />
        <div className="oc-layout-right" />
      </div>
      <div className="oc-layout-footer" />
    </div>
  );
}
