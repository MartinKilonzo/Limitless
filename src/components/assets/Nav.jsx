import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';

import FingerPrintLogo from '../views/WelcomeView/FingerPrintLogo.jsx';
import colors from './colors.jsx'

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      view: props.view
    };
  }
  handleToggle = () => this.setState({
    open: !this.state.open
  });
  handleClose = (view) => {
    browserHistory.push(view);
    this.setState({open: false});
  }
  handleTitleAction = () => {
    browserHistory.push('payment');
  }
  render() {
    const route = this.props.routes[this.props.routes.length - 1].path;
    const styles = {
      title: {
        textAlign: 'center'
      },
      fingerprint: {
        height: 'auto',
        width: 'auto',
        marginTop: '12px',
        color: 'white',
        transition: 'color 0.8s',
        fontSize: '34px',
        cursor: 'pointer'
      }
    };
    const fingerprint = <FingerPrintLogo style={styles.fingerprint} highlight={colors.blue}></FingerPrintLogo>;
    return (
      <div>
        {true && <div>
          <AppBar titleStyle={styles.title} title={fingerprint} onTitleTouchTap={this.handleTitleAction} iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleToggle}></AppBar>
          <Drawer docked={false} width={250} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <RaisedButton label="Overview" onTouchTap={this.handleClose.bind(this, 'overview')} fullWidth primary={route === 'overview'}></RaisedButton>
            <RaisedButton label="Payment" onTouchTap={this.handleClose.bind(this, 'payment')} fullWidth primary={route === 'payment'}></RaisedButton>
            <RaisedButton label="Teams" onTouchTap={this.handleClose.bind(this, 'manageTeam')} fullWidth primary={route === 'manageTeam'}></RaisedButton>
            <RaisedButton label="Settings" onTouchTap={this.handleClose.bind(this, 'settings')} fullWidth primary={route === 'settings'}></RaisedButton>
          </Drawer>
        </div>}
      </div>
    );
  }
}

NavComponent.defaultProps = {
  open: false,
  view: 'overview'
};

export default NavComponent;
