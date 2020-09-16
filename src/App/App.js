import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import Dresses from '../components/pages/Dresses/Dresses';
import Pants from '../components/pages/Pants/Pants';
import Jeans from '../components/pages/Jeans/Jeans';
import Shirts from '../components/pages/Shirts/Shirts';
import VerifiedVintage from '../components/pages/VerifiedVintage/VerifiedVintage';
// import PantsForm from '../components/pages/PantsForm/PantsForm';
import './App.scss';
import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed}/>
            <div className="container">
              <Switch>
                <PrivateRoute path="/home" component={Home} authed={authed} />
                <PrivateRoute path="/pants" component={Pants} authed={authed} />
                <PrivateRoute path="/jeans" component={Jeans} authed={authed} />
                <PrivateRoute path="/shirts" component={Shirts} authed={authed} />
                <PrivateRoute path="/dresses" component={Dresses} authed={authed} />
                <PrivateRoute path="/verifiedvintage" component={VerifiedVintage} authed={authed} />
                <PublicRoute path="/auth" component={Auth} authed={authed} />
                <Redirect from="*" to="/home" />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
