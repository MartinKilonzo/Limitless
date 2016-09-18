import React from 'react';
import {Link} from 'react-router';

import colors from './colors.jsx';

class MenuButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.highlight = this.highlight.bind(this);
    this.unHighlight = this.unHighlight.bind(this);
    this.showForm = this.showForm.bind(this);
  }
  highlight(event) {
    const style = event.target.style;
    style.fontWeight = 400;
    style.color = colors.accent;
    event.target.style.boxShadow = '0px 1px 2px ' + colors.dark;
  }
  unHighlight(event) {
    const style = event.target.style;
    style.fontWeight = 300;
    style.color = colors.dark;
    event.target.style.boxShadow = 'none';
  }
  showForm(event) {
    console.log('go!')
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
      color: colors.dark,
      fontWeight: 300,
      textDecoration: 'none',
      transition: '0.2s'
    };
    return (
      <Link to={this.props.to} style={buttonStyle} onMouseOver={this.highlight} onMouseOut={this.unHighlight} onClick={this.showForm}>
        {this.props.children}
      </Link>
    );
  }
}

MenuButtonComponent.defaultProps = {};

export default MenuButtonComponent;
