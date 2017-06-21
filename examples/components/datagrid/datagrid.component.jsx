import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Datagrid, DatagridActions } from '../../../src/index';
import { bankAccountData } from './data';
import './datagrid.component.scss';

const GRID_ID = 'accounts-grid-example';

const mapDispatchToProps = {
  datagridCellShowMessage: DatagridActions.cellShowMessage,
  datagridSetData: DatagridActions.setData,
};

const mapStateToProps = state => ({
  data: state.datagrid.getIn([GRID_ID, 'data'], List()),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class DatagridView extends React.Component {
  static propTypes = {
    data: ImmutablePropTypes.list.isRequired,
    datagridCellShowMessage: PropTypes.func.isRequired,
    datagridSetData: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.datagridSetData(GRID_ID, bankAccountData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.size !== this.props.data.size) {
      this.props.datagridCellShowMessage(GRID_ID, 'warning', 1, ['name'], 'WarningExample');
    }
  }

  render() {
    const columns = [
      {
        header: 'Account Name',
        valueKeyPath: ['name'],
        valueType: 'text',
        componentType: 'text',
        validators: [
          { unique: true },
        ],
        width: 200,
      },
      {
        header: 'Account number',
        valueKeyPath: ['accountNumber'],
        valueType: 'text',
        componentType: 'text',
        width: 200,
      },
      {
        header: 'Currency',
        valueKeyPath: ['currency'],
        valueType: 'text',
        componentType: 'text',
        width: 200,
      },
      {
        header: 'Company Name',
        valueKeyPath: ['companyName'],
        valueType: 'text',
        componentType: 'text',
        width: 200,
      },
      {
        header: 'Interest rate',
        valueKeyPath: ['interestRate'],
        valueType: 'float',
        componentType: 'float',
        width: 200,
      },
      {
        header: 'Last checked',
        valueKeyPath: ['lastChecked'],
        valueType: 'date',
        componentType: 'date',
        width: 200,
      },
    ];
    return (
      <div className="oc-content oc-flex-column">
        <div>
          <h1>Datagrid</h1>
        </div>
        <Datagrid
          id={GRID_ID}
          idKeyPath={['accountId']}
          columns={columns}
          rowSelect
          multiSelect
          filtering
          rowSelectCheckboxColumn
          inlineEdit
        />
      </div>
    );
  }
}
