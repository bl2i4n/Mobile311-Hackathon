import React from 'react';

class Greetings extends React.Component{
  render (){
    return(
      <div id="splash" className="jumbotron flx-1 centered">
        <h1 className="jcc asc">Mobile 311</h1>
          <div id="icons">
            <i className="fa fa-bullhorn fa-2x ma3"></i>
            <i className="fa fa-plus fa-2x ma3"></i>
            <i className="fa fa-life-ring fa-2x ma3"></i>
          </div>
        <h2>Improving City Services</h2>

      </div>
    );
  }

}


export default Greetings;
