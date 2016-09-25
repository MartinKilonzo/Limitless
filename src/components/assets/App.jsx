import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan700,
  grey600,
  pinkA100,
  pinkA200,
  pinkA400,
  fullWhite
} from 'material-ui/styles/colors';

import Nav from './Nav.jsx';
import users from './user.jsx';
import payments from './payments.jsx';

const lightTheme = getMuiTheme({
  palette: {
    primary1Color: '#002888',
    primary2Color: '#002888',
    secondaryColor: '#1a5eff',
    accent1Color: 'rgb(252,210,29)'
  },
  appBar: {
    height: 50
  }
});

const darkTheme = getMuiTheme({
  palette: {
    primary1Color: 'white',
    primary2Color: 'white',
    primary3Color: grey600,
    accent1Color: pinkA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: fullWhite,
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    appBar: {
      height: 50
    }
  }
});

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
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {userData: this.props.userData}));
    console.log(this.props)
    let view = this.props.location.pathname.split('/');
    view = view[0];
    let theme = lightTheme;
    if (view === 'payment' || view === 'payment2')
      theme = darkTheme;
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
  userData: {
    users: users,
    paymentMethods: payments
  }
};

export default AppComponent;
