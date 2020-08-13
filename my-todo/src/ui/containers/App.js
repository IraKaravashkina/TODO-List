import React, {Component} from 'react';

//Style
import './app.module.scss'

//Library
import "@material-ui/core"

//Parts
import Header from '../components/Header/header.module.scss'
import Input from '../components/Input/input.module.scss'
import List from '../components/List/List'
import Button from '../components/Button/button.module.scss'



function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={'/'}>
            <Main/>
          </Route>
          <Route path={'/header'}>
            <Header/>
          </Route>
        </Switch>
      </Router>

  );
}
 export default App;

