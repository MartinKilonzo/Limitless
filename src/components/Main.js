import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import WelcomeView from './views/WelcomeView/WelcomeView.jsx';
import HomeView from './views/HomeView/HomeView.jsx';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={WelcomeView}></IndexRoute>
          <Route path="home" component={HomeView}></Route>
          <Route path="users" component={WelcomeView}>
            <Route path="/user/:userId" component={WelcomeView}></Route>
          </Route>
          <Route path="*" component={WelcomeView}></Route>
        </Route>
      </Router>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
