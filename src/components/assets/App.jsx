import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import {Router} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Nav from './Nav.jsx';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    console.log(this.props);
  }
  componentWillMount = () => injectTapEventPlugin();
  render() {
    const routes = this.props.routes;
    let viewNav = false;
    if (routes[routes.length - 1].path && routes[routes.length - 1].path !== '/') viewNav = true;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {viewNav && <Nav></Nav>}
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
