import React from 'react';
import List from 'material-ui/List';

import TeamMemberSummary from './TeamMemberSummary.jsx';

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
          if (user.department === this.props.params.department)
            return <TeamMemberSummary key={key} label={user.firstName} max={this.props.max} firstName={user.firstName} data={user.data}></TeamMemberSummary>
        })}
      </List>
    );
  }
}

TeamDeptViewComponent.defaultProps = {};

export default TeamDeptViewComponent;
