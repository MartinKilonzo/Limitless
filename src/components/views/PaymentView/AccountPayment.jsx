import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

import Account from './AccountTypes/Account.jsx';
import PaymentFields from './PaymentFields.jsx';
import FingerprintLogo from '../WelcomeView/FingerprintLogo.jsx';
import colors from '../../assets/colors.jsx';

class PaymentMethodComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: props.openModal,
      openWarning: props.openWarning,
      warningMessage: props.warningMessage
    };
  }
  selectCard = (event) => {
    this.setState({openModal: true});
  }
  handleClose = (event) => {
    this.setState({openModal: false})
  }
  updateRecipient = (value) => this.setState({recipient: value});
  updateValue = (value) => this.setState({payment: value});
  submitPayment = () => {
    console.log(this.state);
    const recipient = this.state.recipient;
    const payment = Number.parseInt(this.state.payment);
    console.log(recipient, payment)
    if (!recipient) {
      this.handleError('Missing recipient.');
    } else if (!payment) {
      this.handleError('Missing payment.')
    } else if (payment <= 0) {
      this.handleError('Invalid payment value.')
    } else if (payment > (this.props.limit - this.props.balance)) {
      this.handleError('Inusufficient funds.')
    } else {
      //TODO: Process payment
      this.handleError(`Payment of ${payment} made to ${recipient}.`);
    }
  }
  handleError = (error) => {
    this.setState({openWarning: true, warningMessage: error});
  }
  handleWarningClose = () => {
    this.setState({openWarning: false});
  }
  render() {
    const styles = {
      modalContents: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      fingerprint: {
        height: 'auto',
        width: 'auto',
        color: 'white',
        transition: 'color 0.8s',
        fontSize: '36px',
        cursor: 'pointer'
      },
      modalButtons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }
    const fingerprint = <FingerprintLogo style={styles.fingerprint} highlight={colors.blue}></FingerprintLogo>;
    const actions = [ < FlatButton label = {
        fingerprint
      }
      keyboardFocused = {
        true
      }
      onTouchTap = {
        this.submitPayment
      } > </FlatButton>, < FlatButton label = "Cancel" primary = {
        true
      }
      onTouchTap = {
        this.handleClose
      } > </FlatButton>
    ];
    //TODO: add limit
    //TODO: transaction history
    //TODO: two seperate cards, one with click triggers and one without
    return (
      <div>
        <Account selectCard={this.selectCard} {...this.props}></Account>
        <Dialog bodyStyle={styles.modalContents} actions={actions} actionsContainerStyle={styles.modalButtons} modal={false} open={this.state.openModal} onRequestClose={this.handleClose} autoScrollBodyContent={false}>
          <Account dialog={true} selectCard={this.selectCard} {...this.props}></Account>
          <PaymentFields max={this.props.limit - this.props.balance} updateRecipient={this.updateRecipient} updateValue={this.updateValue} handleError={this.handleError}></PaymentFields>
        </Dialog>
        <Snackbar open={this.state.openWarning} message={this.state.warningMessage} action="undo" autoHideDuration={2000} onRequestClose={this.handleWarningClose}/>
      </div>
    );
  }
}

PaymentMethodComponent.defaultProps = {
  openModal: false,
  openWarning: false,
  warningMessage: ''
};

export default PaymentMethodComponent;
