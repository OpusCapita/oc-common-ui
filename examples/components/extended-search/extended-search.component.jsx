import React from 'react';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { ExtendedSearch } from '../../../src/index';

class Content extends React.Component {
  items = [
    { id: 1, name: 'name 1', group: 'group 1' },
    { id: 2, name: 'name 2', group: 'group 2' },
    { id: 3, name: 'name 3', group: 'group 3' },
    { id: 4, name: 'name 4', group: 'group 4' },
    { id: 5, name: 'name 5', group: 'group 5' },
    { id: 6, name: 'name 6', group: 'group 6' },
    { id: 7, name: 'name 7', group: 'group 7' },
    { id: 8, name: 'name 8', group: 'group 8' },
  ]
  render() {
    return (
      <div>
        <Form>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <FormGroup>
                  <ControlLabel>ID</ControlLabel>
                  <FormControl type="text" />
                </FormGroup>
              </div>
              <div className="col-sm-12 col-md-4">
                <FormGroup>
                  <ControlLabel>Name</ControlLabel>
                  <FormControl type="text" />
                </FormGroup>
              </div>
               <div className="col-sm-12 col-md-4">
                <FormGroup>
                  <ControlLabel>Group</ControlLabel>
                  <FormControl type="text" />
                </FormGroup>
              </div>
            </div>
          </div>
        </Form>
        <table className="table table-hover">
          <thead>
            <tr>
              <th><div>Name</div></th>
              <th><div>Group</div></th>
            </tr>
          </thead>
          <tbody>
          {
            this.items.map((item) => {
              return (
                <tr style={{cursor: 'pointer'}} key={item.id} onClick={() => this.props.select(item)}>
                  <td>{ item.name }</td>
                  <td>{ item.group }</td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

function ExtendedSearchView() {
  function callback(item) {
     alert(JSON.stringify(item, null, 4));
  }

  return (
    <div className="oc-content">
      <h1>ExtendedSearch</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <Form horizontal>
              <ExtendedSearch
                callback={callback} label="Supplier"
                title="Search for contracts"
                modal={ { bsSize: 'lg' } }
                horizontal>
                <Content />
              </ExtendedSearch>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedSearchView;

