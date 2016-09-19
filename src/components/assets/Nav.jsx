import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory, RouterContext} from 'react-router';

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
    console.log(view);
    browserHistory.push(view);
    // this.setState({open: false, view: view});
  }
  render() {
    const route = this.props.routes[this.props.routes.length - 1].path;
    return (
      <div>
        {true && <div>
          <AppBar title="Touch To Pay" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleToggle}></AppBar>
          <Drawer docked={false} width={250} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <RaisedButton label="Overview" onTouchTap={this.handleClose.bind(this, 'overview')} fullWidth={true} primary={route === 'overview'}></RaisedButton>
            <RaisedButton label="Payment" onTouchTap={this.handleClose.bind(this, 'payment')} fullWidth={true} primary={route === 'payment'}></RaisedButton>
            <RaisedButton label="Teams" onTouchTap={this.handleClose.bind(this, 'team')} fullWidth={true} primary={route === 'team'}></RaisedButton>
            <RaisedButton label="Settings" onTouchTap={this.handleClose.bind(this, 'settings')} fullWidth={true} primary={route === 'settings'}></RaisedButton>
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
