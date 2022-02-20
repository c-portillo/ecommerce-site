import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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
    // subscribe to userAuth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    // onAuthStateChanged returns a function to unsubscribe from userAuth
    this.unsubscribeFromAuth();
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
