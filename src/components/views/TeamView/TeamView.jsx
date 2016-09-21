import React from 'react';

class TeamViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log(this.props);
  }
  render() {
    return (
      <div>Team</div>
    );
  }
}

TeamViewComponent.defaultProps = {};

export default TeamViewComponent;
