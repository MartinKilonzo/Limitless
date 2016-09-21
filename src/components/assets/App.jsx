import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import {Router} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Nav from './Nav.jsx';
import users from './users.jsx';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  componentWillMount = () => injectTapEventPlugin();
  render() {
    console.log(this.props);
    const routes = this.props.routes;
    let viewNav = false;
    if (routes[routes.length - 1].path && routes[routes.length - 1].path !== '/')
      viewNav = true;

    const styles = {
      container: {
        fontFamily: 'inital',
        marginTop: '50px'
      }
    };
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      users: this.props.users,
    }));
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {viewNav && <Nav {...this.props}></Nav>}
          {childrenWithProps}
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
  users: users};

export default AppComponent;
