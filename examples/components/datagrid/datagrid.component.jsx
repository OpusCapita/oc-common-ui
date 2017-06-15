import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Datagrid, DatagridActions } from '../../../src/index';
import { bankAccountData } from './data';
import './datagrid.component.scss';

// TODO: Expand example to have inline edit etc..

const GRID_ID = 'accounts-grid-example';

const mapDispatchToProps = {
  datagridSetData: DatagridActions.setData,
};

const mapStateToProps = () => ({});

@connect(mapStateToProps, mapDispatchToProps)
export default class DatagridView extends React.Component {
  static propTypes = {
    datagridSetData: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.datagridSetData(GRID_ID, bankAccountData);
  }

  render() {
    const columns = [
      {
        header: 'Account Name',
        valueKeyPath: ['name'],
        valueType: 'text',
        componentType: 'text',
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
        />
      </div>
    );
  }
}
