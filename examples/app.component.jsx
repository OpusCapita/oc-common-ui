import React from 'react';
import { Link } from 'react-router';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ocfrontend examples</h1>
        <ul role="nav">
          <li><Link to="/alerts">Alerts</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/spinner">Spinner</Link></li>
          <li><Link to="/split-pane">Split Pane</Link></li>
          <li><Link to="/dropdown-menu">Dropdown Menu</Link></li>
        </ul>
      </div>
    );
  }
}
