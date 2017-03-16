import React from 'react';
import { Form } from 'react-bootstrap';
import { SearchBar } from '../../../src/index';

function SearchbarView() {
  function action() {

  }

  return (
    <div className="oc-content">
      <h1>Searchbar</h1>
      <Form style={{ width: 450 }}>
        <SearchBar action={action} />
      </Form>
    </div>
  );
}

export default SearchbarView;

