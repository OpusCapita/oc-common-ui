import React, { PropTypes } from 'react';

import { Icon } from '../../../../src/index';

import './popover-search-item.component.scss';


export default class PopoverSearchItem extends React.Component {

  constructor() {
    super();
    this.state = {
      collapse: true,
    };
  }

  toggleCollapse = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <a
          href="#demo"
          className="selected-list-item-header"
          onClick={((e) => { e.preventDefault(); this.toggleCollapse(); })}
        >
          <Icon type="indicator" name="plus" height={30} width={30} />
          <span>{this.props.item.name}</span>
        </a>
        {!this.state.collapse &&
          <ul>
            {this.props.item.accounts.map(account => (
              <li
                className="account"
                key={account.name}
              >
                {account.name}
              </li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

PopoverSearchItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    accounts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.arrayOf(PropTypes.number.isRequired),
      name: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
