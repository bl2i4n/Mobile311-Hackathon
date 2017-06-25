import React from 'react';

class Greetings extends React.Component{
  render (){
    return(

        <div id="splash" className="splash flx-1 centered">
          <h1 className="jcc asc h1-main">Mobile 311</h1>
            <div id="icons" className="i-main">
              <i className="fa fa-bullhorn fa-2x ma3"></i>
              <i className="fa fa-plus fa-2x ma3"></i>
              <i className="fa fa-life-ring fa-2x ma3"></i>
            </div>
          <h2 className="h2-main">Improving City Services</h2>

        </div>
    );
  }

}


export default Greetings;
