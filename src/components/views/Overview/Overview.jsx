import React from 'react';

import Nav from '../../assets/Nav.jsx';

class OverviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }
  render() {
    return (
      <div>
        Overview
      </div>
    );
  }
}

OverviewComponent.defaultProps = {};

export default OverviewComponent;
