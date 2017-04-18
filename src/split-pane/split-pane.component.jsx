import React from 'react';
import { connect } from 'react-redux';
import ReactSplitPane from 'react-split-pane';

import { resize } from './split-pane.actions';

import './split-pane.component.scss';

const getFromStorage = (id) => {
  const item = sessionStorage.getItem(`splitpane_${id}_size`);
  if (item) {
    return parseInt(item, 10);
  }
  return undefined;
};

const mapStateToProps = (state, ownProps) => (
  {
    size: state.splitpane ? state.splitpane.getIn([ownProps.id, 'size'],
                            getFromStorage(ownProps.id))
                          : getFromStorage(ownProps.id),
  }
);

const mapDispatchToProps = {
  resize,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SplitPane extends React.Component {

  static propTypes = {
    defaultSize: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    resize: React.PropTypes.func.isRequired,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
  };

  static defaultProps = {
    defaultSize: '50%',
    size: null,
    children: null,
  }

  onChange = (size) => {
    this.props.resize(this.props.id, size);
    // Fire resize event to recalculate component sizes, eg. datagrid
    if (document.createEvent) {
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('resize', true, false);
      window.dispatchEvent(evt);
    }
  };

  render() {
    const { id, children, size, defaultSize, ...otherProps } = this.props;
    return (
      <ReactSplitPane
        {...otherProps}
        defaultSize={size || defaultSize}
        onChange={this.onChange}
      >
        { children }
      </ReactSplitPane>
    );
  }
}
