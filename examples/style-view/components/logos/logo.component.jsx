import React from 'react';
import { Icon } from '../../../../src/index.js';

require('./logo.scss');

export default class Logo extends React.Component {    
  render() {
    const short = {
      height: this.props.height || 50,
      width: this.props.width || 75,
    };

    const long = {
      height: this.props.height || 50,
      width: this.props.width || 275,
    };

    let style = {
      height: 'auto',
      width: 'auto',
    };

    let logo = null;
    if (this.props.minimised) {      
      logo = <Icon type="logo" name="OCShort" height={short.height} width={short.width}/>;      
      style.width = short.width;
    } else {
      logo = <Icon type="logo" name="OCLong" height={long.height} width={long.width}/>;            
      style.width = long.width;
    }

    let className = 'oc-logo';
    
    if (this.props.inverted) {
      className += ' oc-logo-inverted';
    }

    if (this.props.horizontal) {
      className += ' oc-logo-horizontal';
      style.width = 'auto';
    }

    let product = null;
    if (this.props.product) {
      let productClassName= 'oc-logo-product';

      if (this.props.dark) {
        productClassName += ' oc-logo-product-dark';
      }
      product = <div className={productClassName}>{this.props.product}</div>;
    }
    
    if (this.props.containerStyle) {
      style = this.props.containerStyle;
    } 

    return (
      <div className={className} style={style}>
        {logo}
        {product}
      </div>
    );
  }
}
