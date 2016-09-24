import React from 'react';
import {browserHistory} from 'react-router';
import List from 'material-ui/List';

import DepartmentSummary from './DepartmentSummary.jsx';

class DepartmentOverviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  filterDataBy = (field, value) => {
    let ret = [];
    this.props.users.forEach(user => {
      if (user[field] === value)
        ret.push(user);
      }
    );
    return ret;
  }
  getDataBy = (criteria, dataToSort) => {
    let users = dataToSort || this.props.users;
    let sumCategories = {};
    users.forEach(user => {
      let sum = 0;
      user.data.forEach(payment => sum += payment);
      if (typeof sumCategories[user[criteria]] === 'undefined')
        sumCategories[user[criteria]] = 0;
      sumCategories[user[criteria]] += sum;
    });
    // Create two arrays (labels and data) to be used:
    let categoryLabels = [];
    let data = [];
    for (var category in sumCategories) {
      categoryLabels.push(category.charAt(0).toUpperCase() + category.slice(1));
      data.push(sumCategories[category]);
    }
    return {labels: categoryLabels, data: data};
  }
  departmentRedirect = (event, lengendItem) => {
    const department = lengendItem.text.toLowerCase();
    let path = this.props.location.pathname.split('/');
    path[1] = department;
    path = path.join('/');
    browserHistory.push(path);
  }
  memberRedirect = (event, lengendItem) => {
    const member = lengendItem.text.toLowerCase();
    let path = this.props.location.pathname.split('/');
    path[2] = 'team';
    path[3] = member;
    path = path.join('/');
    browserHistory.push(path);
  }
  render() {
    console.log(this.props.users);
    /**
     * Pie charts that summarize spending by:
     * Department (overview)
     * Method (payment type)
     * Person (when pie is clicked, sends you to the peron in question on Team view)
     */
    const chartData = {
      byDepartment: this.getDataBy('department'),
      byPerson: this.getDataBy('firstName', this.filterDataBy('department', this.props.params.department)),
      byMethod: []
    };
    const styles = {
      wrapper: {
        paddingTop: '6%',
        paddingBottom: '1%'
      }
    }
    return (
      <List style={styles.wrapper}>
        <DepartmentSummary label="Department" labels={chartData.byDepartment.labels} data={chartData.byDepartment.data} redirect={this.departmentRedirect}></DepartmentSummary>
        <DepartmentSummary label="Member" labels={chartData.byPerson.labels} data={chartData.byPerson.data} redirect={this.memberRedirect}></DepartmentSummary>
      </List>
    );
  }
}

DepartmentOverviewComponent.defaultProps = {};

export default DepartmentOverviewComponent;
