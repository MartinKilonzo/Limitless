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
    let path = this.props.location.pathname.split('/');
    if (path[0] === '') path = path.slice(1);
    path[1] = view;
    path = path.join('/');
    browserHistory.push(path);
  }
  render() {
    const marketingIcon = <FontIcon className="material-icons">local_offer</FontIcon>;
    const operationsIcon = <FontIcon className="material-icons">settings</FontIcon>;
    const salesIcon = <FontIcon className="material-icons">trending_up</FontIcon>;
    const path = this.props.params.department;
    return (
      <Tabs value={path}>
        <Tab icon={marketingIcon} label="MARKETING" value='marketing' onClick={this.changeView.bind(this, 'marketing')}></Tab>
        <Tab icon={operationsIcon} label="OPERATIONS" value='operations' onClick={this.changeView.bind(this, 'operations')}></Tab>
        <Tab icon={salesIcon} label="SALES" value='sales' onClick={this.changeView.bind(this, 'sales')}></Tab>
      </Tabs>
    );
  }
}

DepartmentMenuComponent.defaultProps = {
  tab: 'marketing'
};

export default DepartmentMenuComponent;
