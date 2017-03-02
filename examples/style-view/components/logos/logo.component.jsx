import React, { PropTypes } from 'react';
import { Icon } from '../../../../src/index.js';

require('./logo.scss');

function Logo({ height, width, minimised, inverted, horizontal, text, dark, containerStyle }) {
  const short = {
    height: height || 50,
    width: width || 75,
  };

  const long = {
    height: height || 50,
    width: width || 275,
  };

  let style = {
    height: 'auto',
    width: 'auto',
  };

  let logo = null;
  if (minimised) {
    logo = <Icon type="logo" name="OCShort" height={short.height} width={short.width} />;
    style.width = short.width;
  } else {
    logo = <Icon type="logo" name="OCLong" height={long.height} width={long.width} />;
    style.width = long.width;
  }

  let className = 'oc-logo';

  if (inverted) {
    className += ' oc-logo-inverted';
  }

  if (horizontal) {
    className += ' oc-logo-horizontal';
    style.width = 'auto';
  }

  let product = null;
  if (text) {
    let productClassName = 'oc-logo-product';

    if (dark) {
      productClassName += ' oc-logo-product-dark';
    }
    product = <div className={productClassName}>{text}</div>;
  }

  if (containerStyle) {
    style = containerStyle;
  }

  return (
    <div className={className} style={style}>
      {logo}
      {product}
    </div>
  );
}

Logo.defaultProps = {
  minimised: false,
  inverted: false,
  horizontal: false,
  text: null,
  dark: false,
  containerStyle: null,
};

Logo.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  minimised: PropTypes.bool,
  inverted: PropTypes.bool,
  horizontal: PropTypes.bool,
  text: PropTypes.string,
  dark: PropTypes.bool,
  containerStyle: PropTypes.string,
};

export default Logo;
