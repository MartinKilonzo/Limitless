import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './assets/App.jsx';
import WelcomeView from './views/WelcomeView/WelcomeView.jsx';
import Overview from './views/Overview/Overview.jsx';
import PaymentView from './views/PaymentView/PaymentView.jsx';
import TeamView from './views/TeamView/TeamView.jsx';
import SettingsView from './views/SettingsView/SettingsView.jsx';

class RouterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    //TODO: Handle extraneous routes
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={WelcomeView}></IndexRoute>
          <Route path="overview" component={Overview}></Route>
          <Route path="payment" component={PaymentView}></Route>
          <Route path="team" component={TeamView}></Route>
          <Route path="settings" component={SettingsView}></Route>
        </Route>
      </Router>
    );
  }
}

RouterComponent.defaultProps = {};

export default RouterComponent;
