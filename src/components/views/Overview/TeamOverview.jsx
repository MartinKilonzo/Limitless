import React from 'react';
import List from 'material-ui/List';

import SpendingUnit from './SpendingUnit.jsx';

class TeamDeptViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      wrapper: {
        paddingTop: '6%',
        paddingBottom: '1%'
      }
    }
    return (
      <List style={styles.wrapper}>
        {this.props.users.map((user, key) => {
          console.log(user);
          if (user.department === this.props.params.dept)
            return <SpendingUnit key={key} max={this.props.max} {...user}></SpendingUnit>
        })}
      </List>
    );
  }
}

TeamDeptViewComponent.defaultProps = {};

export default TeamDeptViewComponent;
