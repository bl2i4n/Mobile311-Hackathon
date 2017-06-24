import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './components/Greetings';
import NavigationBar from './components/NavigationBar';
import SignupPage from './components/signup/SignupPage';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo'
import './index.css'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj4bcxjmcbtbm0142hkdals4x'
})


const client = new ApolloClient({networkInterface})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
    <div className="container-fluid">
    <NavigationBar />
      <div>
        <Route exact path='/' component={Greetings} />
        <Route path='/signup' component={SignupPage} />
      </div>
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
