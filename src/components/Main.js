import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import {Router} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Routes from '../assets/Routes.jsx';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.Router = new Router();
  }
  componentWillMount = () => injectTapEventPlugin();
  render() {
    //TODO: Handle extraneous routes
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Routes></Routes>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
