import React from 'react';
import Form from 'react-router-form'

import colors from '../../assets/colors.jsx';

class PasswordFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      form: {
        height: '100%',
        width: '80%',
        color: colors.accent
      },
      field: {
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow : '0 0 3px ' + colors.blue,
        outlineColor: colors.accent,
        textAlign: 'center'
      },
      submit: {
        display: 'none'
      }
    }
    return (
      <Form to="overview" style={styles.form}>
        <input id="pwfield" type="password" style={styles.field}></input>
        <input type="submit" style={styles.submit}></input>
      </Form>
    );
  }
}

PasswordFieldComponent.defaultProps = {};

export default PasswordFieldComponent;
