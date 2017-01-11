import React from 'react'
import { Link } from 'react-router'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ocfrontend examples</h1>
        <ul role="nav">
          <li><Link to="/cards">Cards</Link></li>
        </ul>
      </div>
    )
  }
}