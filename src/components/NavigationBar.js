import React from 'react';
import {Link} from 'react-router-dom';

export default () => {

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" id="ul-main">Mobile 311</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup" id="ul-main">Sign up</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login" id="ul-main">Log In</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );


}
