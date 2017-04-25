import React, { PropTypes } from 'react';
import {
  Button,
} from 'react-bootstrap';

import { Icon } from '../../../../src/index';


const PopoverListContent = function PopoverListContent(props) {
  return (
    <span>
      <li className="list-group-item">
        <Button onClick={props.toggleSelect}>
          Select bank accounts...
        </Button>
      </li>
      <hr />
      <li className="list-group-item"><b>My account groups</b></li>
      {props.pinnedAccounts.map((account, i) => (
        <li key={i} className="list-group-item pinned">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              props.selectAccount(account);
            }}
          >
            {account}
          </a>
          <span className="fill-empty-space" />
          <Icon type="indicator" name="flagged" height={30} width={30} />
          <Icon type="indicator" name="email" height={30} width={30} />
        </li>
      ))}
      <hr />
      <li className="list-group-item"><b>Recent account groups</b></li>
      {props.recentAccounts.map((account, i) => (
        <li key={i} className="list-group-item pinned">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              props.selectAccount(account);
            }}
          >
            {account}
          </a>
          <span className="fill-empty-space" />
          <Icon type="indicator" name="email" height={30} width={30} />
        </li>
      ))}
    </span>
  );
};

PopoverListContent.propTypes = {
  pinnedAccounts: PropTypes.arrayOf(PropTypes.string).isRequired,
  recentAccounts: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleSelect: PropTypes.func.isRequired,
  selectAccount: PropTypes.func.isRequired,
};

export default PopoverListContent;
