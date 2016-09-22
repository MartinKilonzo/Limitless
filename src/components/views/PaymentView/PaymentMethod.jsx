import React from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import FingerprintLogo from '../WelcomeView/FingerprintLogo.jsx';
import colors from '../../assets/colors.jsx';

import rbclogo from '../../../images/rbclogo.png';

class PaymentMethodComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: props.openModal
    };
  }
  highlightButton = (event) => {
    event.target.style.color = '#B71C1C';
  }
  unHighlightButton = (event) => {
    event.target.style.color = 'rgb(70,70,70)';
  }
  removePayment = (event) => {
    console.log('remove');
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
    const ratio = 3.370 / 2.125;
    const height = 200;
    const styles = {
      card: {
        height: height + 'px',
        width: height * ratio + 'px',
        margin: '20px 20px 20px 20px',
        padding: '24px 24px 24px 24px',
        borderRadius: 24,
        cursor: 'pointer'
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%'
      },
      logoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        width: '100%'
      },
      logo: {
        height: '50px',
        marginTop: '-5px',
        marginBottom: '5px'
      },
      remove: {
        alignSelf: 'flex-start',
        color: 'rgb(70,70,70)',
        marginTop: '-5px',
        marginLeft: '-5px',
        marginBottom: '5px',
        cursor: 'pointer'
      },
      topWrapper: {
        display: 'flex',
        justifyContent: 'center'
      },
      acctNumber: {
        width: '100%',
        fontSize: '16pt'
      },
      middleWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '8px',
        marginBottom: '6px'
      },
      expiration: {
        width: '40%'
      },
      bottomWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      acctHolder: {
        alignSelf: 'flex-start',
        fontSize: '11pt'
      },
      type: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        fontSize: '10pt'
      },
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
    const card = <Paper style={styles.card} onClick={this.selectCard}>
      <div style={styles.wrapper}>
        <div style={styles.logoWrapper}>
          <FontIcon className="material-icons" style={styles.remove} onMouseEnter={this.highlightButton} onMouseLeave={this.unHighlightButton} onClick={this.removePayment}>remove_circle_outline</FontIcon>
          <img src={rbclogo} style={styles.logo}></img>
        </div>
        <div>
          <div style={styles.topWrapper}>
            <div style={styles.acctNumber}>{this.props.acctNumber}</div>
          </div>
          <div style={styles.middleWrapper}>
            <div style={styles.expiration}>exp: {this.props.expiration.getMonth()}/{this.props.expiration.getFullYear() - 2000}</div>
          </div>
          <div style={styles.bottomWrapper}>
            <div style={styles.acctHolder}>{this.props.acctHolder.toUpperCase()}</div>
            <div style={styles.type}>{this.props.type}</div>
          </div>
        </div>
      </div>
    </Paper>;
    return (
      <div>
        {card}
        <Dialog contentStyle={styles.modalContents} title={this.acctNumber} actions={actions} actionsContainerStyle={styles.modalButtons} modal={false} open={this.state.openModal} onRequestClose={this.handleClose} autoScrollBodyContent={false}>
          {card}
        </Dialog>
      </div>
    );
  }
}

PaymentMethodComponent.defaultProps = {
  openModal: false
};

export default PaymentMethodComponent;
