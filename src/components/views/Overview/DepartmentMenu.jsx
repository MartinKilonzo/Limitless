import React from 'react';
import {browserHistory} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

class DepartmentMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: props.tab
    };
  }
  changeView = (view) => {
    browserHistory.push('overview/' + view);
  }
  render() {
    const marketingIcon = <FontIcon className="material-icons">local_offer</FontIcon>;
    const operationsIcon = <FontIcon className="material-icons">settings</FontIcon>;
    const financeIcon = <FontIcon className="material-icons">trending_up</FontIcon>;
    const path = this.props.routes[this.props.routes.length - 1].path;
    return (
      <Tabs value={path}>
        <Tab icon={marketingIcon} label="MARKETING" value='marketing' onClick={this.changeView.bind(this, 'marketing')}></Tab>
        <Tab icon={operationsIcon} label="OPERATIONS" value='operations' onClick={this.changeView.bind(this, 'operations')}></Tab>
        <Tab icon={financeIcon} label="FINANCE" value='finance' onClick={this.changeView.bind(this, 'finance')}></Tab>
      </Tabs>
    );
  }
}

DepartmentMenuComponent.defaultProps = {
  tab: 'marketing'
};

export default DepartmentMenuComponent;
