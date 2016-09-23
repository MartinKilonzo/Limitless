import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Card from './Card.jsx';
import FingerprintLogo from '../WelcomeView/FingerprintLogo.jsx';
import colors from '../../assets/colors.jsx';

class PaymentMethodComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: props.openModal
    };
  }
  selectCard = (event) => {
    console.log('opened');
    this.setState({openModal: true});
  }
  handleClose = (event) => {
    console.log(event);
    this.setState({openModal: false})
  }
  render() {
    const styles = {
      modalContents: {
        display: 'flex',
        justifyContent: 'center'
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
    const actions = [
      <FlatButton label={fingerprint} keyboardFocused={true} onTouchTap={this.handleClose}></FlatButton>, <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}></FlatButton>
    ];
    //TODO: add limit
    //TODO: transaction history
    //TODO: two seperate cards, one with click triggers and one without
    return (
      <div>
        <Card selectCard={this.selectCard} {...this.props}></Card>
        <Dialog contentStyle={styles.modalContents} actions={actions} actionsContainerStyle={styles.modalButtons} modal={false} open={this.state.openModal} onRequestClose={this.handleClose} autoScrollBodyContent={false}>
          <Card selectCard={this.selectCard} {...this.props}></Card>
          <span>{this.props.limit}</span>
        </Dialog>
      </div>
    );
  }
}

PaymentMethodComponent.defaultProps = {
  openModal: false
};

export default PaymentMethodComponent;
