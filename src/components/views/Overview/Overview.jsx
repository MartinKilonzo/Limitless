import React from 'react';
import {browserHistory} from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarSeperator} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';

import DepartmentMenu from './DepartmentMenu.jsx';

class OverviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.startDate,
      endDate: props.endDate,
      dropDownSelection: props.dropDownSelection
    };
  }
  selectFromDropdown = (event, index, value) => {
    let path = this.props.location.pathname.split('/');
    path[path.length - 1] = value;
    path = path.join('/');
    console.log(path);
    browserHistory.push(path);
    this.setState({dropDownSelection: value});
  }
  setStartDate = (event, date) => {
    console.log('s', date);
    //TODO: Alert the user of rejected values through the snackbar; reject ok button
    //TODO: Lower end of start date should be bounded by account creation date
    if (this.state.endDate < date) { // Bound upper end to the end of the range
      this.setState({startDate: this.state.endDate});
    } else { // Value approved
      this.setState({startDate: date});
    }
  }
  setEndDate = (event, date) => {
    console.log('e', date);
    //TODO: Alert the user of rejected values through the snackbar; reject ok button
    if (this.state.startDate > date) { // Bound lower end to the start of the range
      this.setState({endDate: this.state.startDate});
    } else if (new Date() < date) { // Bound upper end to the current date
      this.setState({endDate: new Date()});
    } else { // Value approved
      this.setState({endDate: date});
    }
  }
  disableDates = (day) => {
    return (day > new Date());
  }
  render() {
    const styles = {
      wrapper: {
        marginTop: '50px'
      },
      paper: {
        minHeight: '50vh',
        width: '100%'
      },
      textFieldStyle: {
        color: 'white'
      }
    }
    let maxValue = 0; // Used such that each graph has the same x-axis scale (0 -> maxValue * 1.1)
    this.props.users.forEach(user => {
      user.data.forEach(spend => {
        if (spend > maxValue)
          maxValue = spend;
        }
      )
    });
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      users: this.props.users,
      max: maxValue
    }));
    //TODO: Finish dropdown menu
    return (
      <div className="container" style={styles.wrapper}>
        <DepartmentMenu {...this.props}></DepartmentMenu>
        <Toolbar>
          <ToolbarGroup>
            <DropDownMenu value={this.state.dropDownSelection} onChange={this.selectFromDropdown}>
              <FlatButton label="Department" value={'department'}></FlatButton>
              <FlatButton label="Team" value={'team'}></FlatButton>
              <FlatButton label="Method" value={'method'}></FlatButton>
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup lastChild>
            <DatePicker hintText="Start Date" mode="landscape" value={this.state.startDate} onChange={this.setStartDate} shouldDisableDate={this.disableDates}/>
            <DatePicker hintText="End Date" mode="landscape" value={this.state.endDate} onChange={this.setEndDate} shouldDisableDate={this.disableDates}/>
          </ToolbarGroup>
        </Toolbar>
        <Paper style={styles.paper}>{childrenWithProps}</Paper>
      </div>
    );
  }
}
const today = new Date();
const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), today.getDay() - today.getDay() + 1);
OverviewComponent.defaultProps = {
  startDate: firstOfMonth,
  endDate: today,
  dropDownSelection: 2
};

export default OverviewComponent;
