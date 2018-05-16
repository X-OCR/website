import React, { Component } from 'react';

import './joinpage.scss';
import '../../styles/form.scss';

class JoinPage extends Component {
  render() {
    return (
      <div className="JoinPage">
        <h1>Join</h1>
        <p>
        Everyone are free to join us for any of the races. However, if you are
        interested in join our team you can send us an application.
        </p>
        <h2>Application</h2>
        <form>
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Lastname" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Write something about yourself!" />
          <input type="submit" value="Submit" />
        </form>

        <h2>Newsletter</h2>
        <p>
          Get updates about upcoming events.
        </p>
        <form>
          <input type="text" placeholder="Email" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default JoinPage;

