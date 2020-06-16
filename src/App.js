import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const { authorised } = this.props;
    return (
      <BrowserRouter>
        {authorised ?
          <Switch>
            <Route exact path='/list' render={matchProps => (<List {...matchProps} />)} />
            <Route path="*" render={matchProps => <Redirect to="/list" />} />
          </Switch>
          :
          <Switch>
            <Route exact path='/login' render={matchProps => (<LoginForm {...matchProps} />)} />
            <Route path="*" render={matchProps => <Redirect to="/login" />} />
          </Switch>}
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    authorised: state.login.authorised
  }
}
export default connect(mapStateToProps)(App)
