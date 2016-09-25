import React from 'react';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import OverallSummary from './OverallSummary.jsx';
import DepartmentSummary from './DepartmentSummary.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page
    };
  }
  handleLast = () => {
    if (this.state.page > 0)
      this.setState({
        page: this.state.page - 1
      });
  }
  handleNext = () => {
    if (this.state.page < 2)
      this.setState({
        page: this.state.page + 1
      });
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
    let users = dataToSort || this.props.userData.users;
console.log(users)
    let sumCategories = {};
    users.forEach(user => {
      let sum = 0;
      user.paymentMethods.forEach(paymentMethod => {
        paymentMethod.transactionHistory.forEach(transaction => sum += transaction.amount);
        if (typeof sumCategories[user[criteria]] === 'undefined')
          sumCategories[user[criteria]] = 0;
        sumCategories[user[criteria]] += sum;
      });
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
  getCashPosition = () => {
    let balance = this.getDataBy('department');
    let buckets = {};
    this.props.users.forEach(user => {
      user.paymentMethods.forEach(paymentMethod => {
        if (typeof buckets[user.department] === 'undefined') buckets[user.department] = 0;
        buckets[user.department] += paymentMethod.limit;
      })
    });
    let limits = [];
    let labels = [];
    for (var field in buckets) {
      limits.push(buckets[field]);
      labels.push(field);
    };
    return {balance: balance, limits: limits, labels: labels};
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
    /**
     * Pie charts that summarize spending by:
     * Department (overview)
     * Method (payment type)
     * Person (when pie is clicked, sends you to the peron in question on Team view)
     */
    const chartData = {
      byDepartment: this.getDataBy('department'),
      byPerson: this.getDataBy('firstName', this.filterDataBy('department', this.props.params.department)),
      cashPosition: this.getCashPosition()
    };
    console.log(chartData);
    const styles = {
      wrapper: {
        paddingTop: '6%',
        paddingBottom: '1%'
      },
      view: {
        padding: '20px 20px 20px 20px'
      },
      buttonWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }
    return (
      <div style={styles.wrapper}>
        <Paper style={styles.view}>
          <div style={styles.buttonWrapper}>
            <RaisedButton onClick={this.handleLast} icon={< FontIcon className = "material-icons" > keyboard_arrow_left < /FontIcon>}></RaisedButton>
            <RaisedButton onClick={this.handleNext} icon={< FontIcon className = "material-icons" > keyboard_arrow_right < /FontIcon>}></RaisedButton>
          </div>
          {this.state.page === 0 && <OverallSummary label="Overall" data={chartData.cashPosition} redirect={this.departmentRedirect} height={250}></OverallSummary>}
          {this.state.page === 1 && <DepartmentSummary label="Department" labels={chartData.byDepartment.labels} data={chartData.byDepartment.data} redirect={this.departmentRedirect} height={250}></DepartmentSummary>}
          {this.state.page === 2 && <DepartmentSummary label="Department" labels={chartData.byDepartment.labels} data={chartData.byDepartment.data} redirect={this.departmentRedirect} height={250}></DepartmentSummary>}
        </Paper>
      </div>
    );
  }
}

Dashboard.defaultProps = {
  page: 0
};

export default Dashboard;
