import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';

import FingerprintLogo from '../views/WelcomeView/FingerprintLogo.jsx';
import colors from './colors.jsx';

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
    const route = this.props.location.pathname.split('/')[0];
    const styles = {
      appbar: {
        backgroundColor: 'white',
        color: colors.base
      },
      title: {
        textAlign: 'center'
      },
      iconStyleLeft: {
        color: colors.base,
        backgroundColor: colors.base
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
    const fingerprint = <FingerprintLogo style={styles.fingerprint} highlight={colors.accent}></FingerprintLogo>;
    return (
      <div>
        {true && <div>
          <AppBar style={styles.appbar} titleStyle={styles.title} title={fingerprint} onTitleTouchTap={this.handleTitleAction}
            iconStyleLeft={styles.iconStyleLeft} iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleToggle}></AppBar>
          <Drawer docked={false} width={250} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <RaisedButton label="Overview" onTouchTap={this.handleClose.bind(this, 'overview/marketing/team/1')} fullWidth primary={route === 'overview'}></RaisedButton>
            <RaisedButton label="Accounts" onTouchTap={this.handleClose.bind(this, 'payment')} fullWidth primary={route === 'payment'}></RaisedButton>
            <RaisedButton label="Add Receipt" onTouchTap={this.handleClose.bind(this, 'receiptview')} fullWidth primary={route === 'receiptview'}></RaisedButton>
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
