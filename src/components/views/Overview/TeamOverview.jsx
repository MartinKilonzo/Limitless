import React from 'react';
import List from 'material-ui/List';

import TeamMemberSummary from './TeamMemberSummary.jsx';

class TeamDeptViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    let member = this.props.params.member;
    let memberSummary = document.getElementById(member);
    if (memberSummary) {
      let yScroll = memberSummary.getBoundingClientRect().top;
      window.scroll(0, yScroll);
    }
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
            return <TeamMemberSummary id={user.firstName.toLowerCase()} key={key} label={user.firstName} max={this.props.max} firstName={user.firstName} data={user.paymentMethods} picture={user.picture}></TeamMemberSummary>
        })}
      </List>
    );
  }
}

TeamDeptViewComponent.defaultProps = {};

export default TeamDeptViewComponent;
