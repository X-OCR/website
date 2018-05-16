import React, { Component } from 'react';

import './teampage.scss';

class TeamPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: { // Tis sh
        leader: ['Marcus Östling'],
        developers: ['Ellinor Westerberg', 'Marcus Östling','Gustav Schneider'],
        eventers: ['Ellinor Westerberg', 'Carl Dath', 'Joakim Lilja'],
        hangarounds: ['Ellinor Westerberg', 'Robert Berggren', 'Lars Lundin', 'Tomas Möre']
      }
    }
  }

  mapToList = (list) => {
    return list.map((name) => 
      <li>{name}</li>
    );
  }

  render() {
    return (
      <div className="TeamPage">
        <h1>The team</h1>
        <br/>

        <h2>Leader, Boss, MVP, Master, Sensei</h2>
        <ul>
          <li>Marcus Östling</li>
        </ul>

        <h2>Utvecklingsteam</h2>
        <ul>
          {this.mapToList(this.state.team.developers)}
        </ul>

        <h2>Event team</h2>
        <ul>
          {this.mapToList(this.state.team.eventers)}
        </ul>

        <h2>Hangarounds</h2>
        <ul>
          {this.mapToList(this.state.team.hangarounds)}
        </ul>
      </div>
    );
  }
}

export default TeamPage;

