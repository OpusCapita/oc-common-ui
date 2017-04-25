import React, { PropTypes } from 'react';
import {
  Checkbox,
} from 'react-bootstrap';

import Item from './selection-item.component';

import './selection-list.scss';

import List from '../select-list/List';


export default class MyList extends React.Component {

  constructor() {
    super();

    this.state = {
      markAll: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      markAll: nextProps.marked.indexOf('all') > -1,
    });
  }

  markUnmarkAll = (event) => {
    if (event.target.checked) {
      this.props.setMarked(this.props.path);
    } else {
      this.props.unmark(this.props.path);
    }
  };

  render() {
    const items = this.props.items.map((item, index) => (
      <Item
        name={item.name}
        marked={this.props.marked.indexOf(index) > -1}
        unmark={this.props.unmark}
        path={this.props.path}
        index={index}
        lastLevel={this.props.lastLevel}
      />));
    const selection = this.props.selected === undefined
      ? []
      : [this.props.selected];
    const disabled = this.props.marked.indexOf('all') > -1
      ? [...Array(this.props.items.length).keys()]
      : [];
    return (
      <div id="selection-list">
        {this.props.path.length !== 0 ? <Checkbox
          checked={this.state.markAll}
          className="select-all"
          onChange={this.markUnmarkAll}
        >
          All
        </Checkbox> : <div className="empty-select-all" />}
        <List
          items={items}
          selected={selection}
          disabled={disabled}
          multiple={false}
          onChange={(selected) => {
            if (this.props.marked.indexOf(selected) > -1 &&
                this.props.lastLevel) {
              this.props.unmark(this.props.path, selected);
            } else {
              this.props.onChange(selected, this.props.level);
              if (this.props.lastLevel) {
                this.props.setMarked(this.props.path, selected);
              }
            }
          }}
        />
      </div>
    );
  }
}

MyList.defaultProps = {
  selected: undefined,
};

MyList.propTypes = {
  items: PropTypes.arrayOf(Item).isRequired,
  marked: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ])).isRequired,
  unmark: PropTypes.func.isRequired,
  path: PropTypes.arrayOf(PropTypes.number).isRequired,
  selected: PropTypes.number,
  level: PropTypes.number.isRequired,
  lastLevel: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  setMarked: PropTypes.func.isRequired,
};
