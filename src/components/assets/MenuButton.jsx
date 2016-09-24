import React from 'react';
import {Link} from 'react-router';

import colors from './colors.jsx';

class MenuButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.style.color
    };
  }
  highlight(event) {
    const style = event.target.style;
    style.fontWeight = 400;
    style.color = 'rgb(231,196,38)';
    style.backgroundColor = 'rgb(231,196,38)';
    event.target.style.boxShadow = '0px 1px 2px ' + 'white';
  }
  unHighlight(event) {
    const style = event.target.style;
    style.fontWeight = 300;
    style.color = this.stae.color;
    event.target.style.boxShadow = 'none';
  }
  render() {
    // const width = document.getElementById('logo').offsetWidth / 2;
    const buttonStyle = {
      height: '30px',
      width: '49%',
      marginLeft: '5px',
      marginRight: '5px',
      textAlign: 'center',
      backgroundColor: 'transparent',
      color: 'white',
      fontWeight: 300,
      textDecoration: 'none'
    };
    return (
      <Link to={this.props.to} style={buttonStyle} onMouseOver={this.highlight} onMouseOut={this.unHighlight}>
        {this.props.children}
      </Link>
    );
  }
}

MenuButtonComponent.defaultProps = {};

export default MenuButtonComponent;
