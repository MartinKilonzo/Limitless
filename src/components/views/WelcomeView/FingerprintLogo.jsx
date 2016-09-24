import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import colors from '../../assets/colors.jsx';

class FingerprintComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: props.highlight,
      color: props.style.color
    };
  }
  highlight = (event) => {
    const style = event.target.style;
    style.color = this.state.highlight || colors.accent;
  }
  unHighlight = (event) => {
    const style = event.target.style;
    style.color = this.state.color;
  }
  render() {
    const style = {
      height: '20px',
      width: '20px',
      color: 'white',
      transition: 'color 2s'
    };
    return (
      <FontIcon id={this.props.id} className="material-icons" style={this.props.style || style} onMouseOver={this.highlight} onMouseOut={this.unHighlight}>fingerprint</FontIcon>
    );
  }
}

FingerprintComponent.defaultProps = {};

export default FingerprintComponent;
