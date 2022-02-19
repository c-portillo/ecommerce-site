import React from 'react';
import { auth } from './firebase/firebase.utils';
import { Route, Switch } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // onAuthStateChanged returns a function to unsubscribe

  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
