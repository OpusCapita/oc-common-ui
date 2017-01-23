import React from 'react';
import { connect } from 'react-redux';
import { default as ReactSplitPane } from 'react-split-pane';
import { resize } from './split-pane.actions.js';
import './split-pane.component.scss';

const getFromStorage = (id) => {
  return sessionStorage['splitpane_'+id+'_size'];
}

const mapStateToProps = (state, ownProps) => {
  return {
    size: state.splitpane ? state.splitpane.getIn([ownProps.id, 'size'], getFromStorage(ownProps.id)) : getFromStorage(ownProps.id),
  };
};

const mapDispatchToProps = {
  resize,
};

@connect(mapStateToProps, mapDispatchToProps)
export class SplitPane extends React.Component {

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    resize: React.PropTypes.func.isRequired,
  };

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
    const { id, children, resize, size, defaultSize, ...otherProps } = this.props;
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
