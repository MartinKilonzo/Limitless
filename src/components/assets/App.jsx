import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Nav from './Nav.jsx';
import users from './users.jsx';
import payments from './payments.jsx';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  componentWillMount = () => injectTapEventPlugin();
  render() {
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
      userData: this.props.userData,
    }));
    console.log(this.props)
    let view = this.props.location.pathname.split('/');
    view = view[0];
    let theme;
    if (view === 'payment' || view === 'payment2') theme = darkBaseTheme;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div>
          {viewNav && <Nav {...this.props}></Nav>}
          {childrenWithProps}
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
  userData: {users: users, paymentMethods: payments}
};

export default AppComponent;
