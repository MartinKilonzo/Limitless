import React from 'react';

import PasswordField from './PasswordField.jsx';
import colors from '../../assets/colors.jsx';

class PasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFieldVisible: props.isFieldVisible
    };
  }
  showField = () => {
    this.setState({
      isFieldVisible: true
    }, () => {
      document.getElementById('pwfield').focus();
      this.props.callback();
    });
  }
  highlight(event) {
    const style = event.target.style;
    style.fontWeight = 400;
    event.target.style.boxShadow = '0px 1px 2px ' +
      'white';
  }
  unHighlight(event) {
    const style = event.target.style;
    style.fontWeight = 300;
    event.target.style.boxShadow = 'none';
  }
  render() {
    const styles = {
      wrapper: {
        display: 'inherit',
        flexDirection: 'column',
        alignItems: 'inherit',
        width: '100%',
        height: '100%'
      },
      passwordBtn: {
        height: '30px',
        width: '49%',
        marginLeft: '5px',
        marginRight: '5px',
        textAlign: 'center',
        backgroundColor: 'white',
        color: colors.accent,
        fontWeight: 300,
        textDecoration: 'none',
        transition: '0.13s',
        boxShadow: '0px 1px 2px ' + 'white'
      }
    };
    return (
      <div style={styles.wrapper}>
        {!this.state.isFieldVisible && <div style={styles.passwordBtn} onMouseOver={this.highlight} onMouseOut={this.unHighlight} onClick={this.showField}>Password</div>}
        {this.state.isFieldVisible && <PasswordField></PasswordField>}
      </div>
    );
  }
}

PasswordComponent.defaultProps = {
  isFieldVisible: false
};

export default PasswordComponent;
