import React from 'react';
import { Form } from 'react-bootstrap';
import { ExtendedSearch } from '../../../src/index';

function ExtendedSearchView() {
  function callback() {

  }

  return (
    <div className="oc-content">
      <h1>ExtendedSearch</h1>
      <Form style={{ width: 450 }} horizontal>
        <ExtendedSearch callback={callback} label="domain" horizontal />
      </Form>
    </div>
  );
}

export default ExtendedSearchView;

