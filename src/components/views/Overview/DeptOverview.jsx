import React from 'react';
import List from 'material-ui/List';

import SpendingUnit from './SpendingUnit.jsx';

class DepartmentOverviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    /**
     * Pie charts that summarize spending by:
     * Department (overview)
     * Method (payment type)
     * Person (when pie is clicked, sends you to the peron in question on Team view)
     */
     const styles = {
       wrapper: {
         paddingTop: '6%',
         paddingBottom: '1%'
       }
     }
    return (
      <List style={styles.wrapper}>
        {this.props.users.map((user, key) => {
          if (user.department === this.props.params.dept)
            return <SpendingUnit key={key} max={this.props.max} firstName={user.firstName} data={user.data}></SpendingUnit>
        })}
      </List>
    );
  }
}

DepartmentOverviewComponent.defaultProps = {};

export default DepartmentOverviewComponent;
