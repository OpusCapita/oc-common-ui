import React, { PropTypes } from 'react';

import { Icon } from '../../../../../src/index';

import './selected-list-item.component.scss';


export default class SelectedListItem extends React.Component {

  constructor() {
    super();
    this.state = {
      collapse: true,
    };
  }

  getAccountName = (item) => {
    if (item.all) {
      return this.props.item.name;
    } else if (item.numAccounts > 1) {
      return `${item.name} / ${item.numAccounts} bank accounts`;
    }
    return `${item.name} / ${this.props.item.accounts[0].name}`;
  }

  getNumAccounts = (item) => {
    if (item.all) {
      return (
        <span
          className="account-amount"
        >
          All ({this.props.item.numAccounts})
        </span>
      );
    }
    return (
      <span
        className="account-amount"
      >
        {this.props.item.numAccounts}
      </span>
    );
  }

  toggleCollapse = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  renderSingleAccount() {
    return (
      <li className="single-account">
        <span className="bank-account">
          <span>
            {this.getAccountName(this.props.item)}
          </span>
          <span className="fill-empty-space" />
          {this.getNumAccounts(this.props.item)}
          <Icon
            type="indicator"
            name="delete"
            height={30}
            width={30}
            onClick={() => {
              this.props.unmark(this.props.item.path,
                this.props.item.accounts[0].index);
            }}
          />
        </span>
      </li>
    );
  }

  renderMultipleAccounts() {
    return (
      <span>
        <a
          href="#demo"
          className="selected-list-item-header"
          onClick={((e) => { e.preventDefault(); this.toggleCollapse(); })}
        >
          <Icon type="indicator" name="plus" height={30} width={30} />
          <span>
            {this.getAccountName(this.props.item)}
          </span>
          <span className="fill-empty-space" />
          {this.getNumAccounts(this.props.item)}
          <Icon
            type="indicator"
            name="delete"
            height={30}
            width={30}
            onClick={() => {
              this.props.unmark(this.props.item.path);
            }}
          />
        </a>
        {!this.state.collapse ?
          <ul>
            {this.props.item.accounts.map((account, i) => (
              <li key={i} className="several-accounts">
                <span className="bank-account">
                  <span>{account.name}</span>
                  <span className="fill-empty-space" />
                  {!this.props.item.all && <Icon
                    type="indicator"
                    name="delete"
                    height={30}
                    width={30}
                    onClick={() => {
                      this.props.unmark(this.props.item.path,
                        account.index);
                    }}
                  />}
                </span>
              </li>
            ))}
          </ul> : ''}
      </span>
    );
  }

  render() {
    const accounts = this.props.item.numAccounts;
    return accounts === 1
      ? this.renderSingleAccount()
      : this.renderMultipleAccounts();
  }
}

SelectedListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    all: PropTypes.bool,
    path: PropTypes.array,
    numAccounts: PropTypes.number,
    accounts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      index: PropTypes.number,
    })),
  }).isRequired,
  unmark: PropTypes.func.isRequired,
};
