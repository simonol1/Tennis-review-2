import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import AddVibeForm from './AddVibeForm'
import VibeList from './VibeList'
import Footer from './Footer'

const App = ({history}) => (
  <div>
    <Header />
      <Router history={history}>
         <div>
           <Route exact path="/add" component={AddVibeForm} />
           <Route exact path="/" component={VibeList} />
        </div>
      </Router>
    <Footer />
</div>
)

export default App
