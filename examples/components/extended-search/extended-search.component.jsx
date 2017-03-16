import React from 'react';
import { Form } from 'react-bootstrap';
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
      <Form style={{ width: 450 }} horizontal>
        <ExtendedSearch callback={callback} label="domain" title="Search for contracts" horizontal>
          <Content />
        </ExtendedSearch>
      </Form>
    </div>
  );
}

export default ExtendedSearchView;

