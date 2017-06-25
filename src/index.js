import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './components/Greetings';
import NavigationBar from './components/NavigationBar';
import SignupPage from './components/signup/SignupPage';
import ListPage from './components/ListPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo'
import 'tachyons'
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
        <Route exact path='/main' component={ListPage} />
        <Route path='/create' component={CreatePage} />
        <Route path='/post/:id' component={DetailPage} />
      </div>
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
