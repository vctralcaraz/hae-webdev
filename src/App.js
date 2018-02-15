import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/services' />
            <Route path='/bio' />
            <Route path='/portfolio' />
            <Route path='/contact' />
            <Route path='/' />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;


// services
// - maintainance
// - - clean up code
// - - fix code
// - web design
// - web apps
// - - 'web applications that meet your business needs'
// - - mobile web applications
// - - - made with mobile first mindset
// - technology (used and know)
// - - what we use
// - - - React Js
// - - - Redux
// - - - Mongodb
// - - - Express Js
// - - - Node Js
// - - - HTML
// - - - CSS
// - - - Javascript
// bio
// portfolio
// contact info

// colors:
// Primary: #116060
// Secondary: #178017 Compliment: #2E9A2E
// Secondary: #1C346B