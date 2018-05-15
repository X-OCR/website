import React, { Component } from 'react';

import './teampage.scss';

class TeamPage extends Component {
  render() {
    return (
      <div className="TeamPage">
        <h1>The team</h1>
        <h2>Leader, Boss, MVP, Master, Sensei</h2>
        Marcus Östling
        <h2>Utvecklings team</h2>
        <ul>
          <li>Boss: Marcus Östling</li>
          <li>Ellinor Westerbergr</li>
          <li>Gustav Schneider</li>
        </ul>
        <h2>Event ansvarig</h2>
        <ul>
          <li>Carl Dath</li>
          <li>Joakim Lilja</li>
        </ul>
      </div>
    );
  }
}

export default TeamPage;

