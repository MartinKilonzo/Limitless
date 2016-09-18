import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import colors from '../../assets/colors.jsx';

class FingerprintComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  highlight(event) {
    const style = event.target.style;
    style.color = colors.accent;
  }
  unHighlight(event) {
    const style = event.target.style;
    style.color = colors.dark;
  }
  render() {
    const style = {
      height: '20px',
      width: '20px',
      color: colors.dark,
      transition: 'color 2s'
    };
    return (
      <FontIcon id={this.props.id} className="material-icons" style={this.props.style || style} onMouseOver={this.highlight} onMouseOut={this.unHighlight}>fingerprint</FontIcon>
    );
  }
}

FingerprintComponent.defaultProps = {};

export default FingerprintComponent;
