import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import NumberInput from 'material-ui-number-input';

class PaymentFieldsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: props.recipient,
      value: props.value
    };
    console.log(this.props);
  }
  handleChangeRecipient = (event, recipient, what) => {
    this.setState({
      recipient: recipient
    }, () => {
      this.props.updateRecipient(recipient);
    });
  }
  handleChangeValue = (event, value, what) => this.setState({
    value: value
  }, () => {
    this.props.updateValue(value);
  });
  render() {
    const styles = {
      transactionFieldWrapper: {
        height: '100%',
        width: '35%',
        marginRight: '40px'
      },
      transactionField: {
        width: '100%'
      },
      textFieldGroup: {
        display: 'flex',
        flexWrap: 'noWrap',
        justifyContent: 'baseline'
      },
      icon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    };
    return (
      <div style={styles.transactionFieldWrapper}>
        <div style={styles.textFieldGroup}>
          <FontIcon className="material-icons" style={styles.icon}>person</FontIcon>
          <NumberInput hintText="Recipient Account Number" value={this.state.recipient} onChange={this.handleChangeRecipient} onError={this.handleError} />
        </div>
        <br/>
        <div style={styles.textFieldGroup}>
          <FontIcon className="material-icons" style={styles.icon}>attach_money</FontIcon>
          <NumberInput hintText="Amount" value={this.state.value} onChange={this.handleChangeValue} min={0} max={this.props.max} />
        </div>
      </div>
    );
  }
}

PaymentFieldsComponent.defaultProps = {
  recipient: '',
  value: ''
};

export default PaymentFieldsComponent;
