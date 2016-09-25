import React from 'react';
import {browserHistory} from 'react-router';

import colors from '../../assets/colors.jsx';

class PasswordFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  login = (event) => {
    const path = 'overview/marketing/team/~';
    browserHistory.push(path);
  }
  render() {
    const styles = {
      form: {
        height: '100%',
        width: '80%',
        color: colors.base
      },
      field: {
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow : '0 0 3px ' + colors.accent,
        outlineColor: colors.accent,
        textAlign: 'center'
      },
      submit: {
        display: 'none'
      }
    }
    return (
      <form onSubmit={this.login} style={styles.form}>
        <input id="pwfield" type="password" style={styles.field}></input>
        <input type="submit" style={styles.submit}></input>
      </form>
    );
  }
}

PasswordFieldComponent.defaultProps = {};

export default PasswordFieldComponent;
