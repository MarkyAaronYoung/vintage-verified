import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import Dresses from '../components/pages/Dresses/Dresses';
import Pants from '../components/pages/Pants/Pants';
import Jeans from '../components/pages/Jeans/Jeans';
import Shirts from '../components/pages/Shirts/Shirts';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <h2>Vintage Verified</h2>
        <MyNavbar authed={authed}/>
        <Dresses authed={authed}/>
        <Pants authed={authed}/>
        <Jeans authed={authed}/>
        <Shirts authed={authed}/>
      </div>
    );
  }
}

export default App;
