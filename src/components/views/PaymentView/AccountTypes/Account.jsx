import React from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

import colors from '../../../assets/colors.jsx';

import rbclogo from '../../../../images/rbclogo.png';

class AccountComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  highlightCard = (event) => {
    if (this.props.dialog)
      return;

    //TODO: FIX BROKEN HIGHLIGHT
    event.stopPropagation();
    let card = event.target;
    try {
      while (card.className !== 'card')
        card = card.parent;
      if (typeof this.state.bgColor === 'undefined') {
        this.setState({
          bgColor: card.style.backgroundColor
        }, () => {
          card.style.backgroundColor = 'rgb(54,54,54)';
        });
      } else {
        card.style.backgroundColor = 'rgb(54,54,54)';
      }
    } catch (e) {}
  }
  unHighlightCard = (event) => {
    if (this.props.dialog)
      return;
    try {
      event.stopPropagation();
      let card = event.target;
      while (card.className !== 'card')
        card = card.parent;
      event.target.style.backgroundColor = this.state.bgColor || 'rgb(48,48,48)';
    } catch (e) {}
  }
  highlightButton = (event) => {
    event.target.style.color = colors.accent;
  }
  unHighlightButton = (event) => {
    event.target.style.color = 'rgb(70,70,70)';
  }
  viewMore = (event) => {
    event.stopPropagation();
    console.log('history');
  }
  formatMoney = (value) => {
    let ret = (value * 100 | 0);
    const truncated = ret;
    ret /= 100;
    if ((truncated) % 100 === 0) {
      ret += '.00';
    } else if ((truncated) % 10 === 0) {
      ret += '0';
    }
    return '$' + ret;
  }
  render() {
    const ratio = 3.370 / 2.125;
    const height = 300;
    const dialogAdjustment = this.props.dialog
      ? 100
      : 0;
    const styles = {
      card: {
        height: height - dialogAdjustment,
        width: height,
        margin: '20px 20px 20px 20px',
        padding: '24px 24px 24px 24px',
        cursor: 'pointer',
        backgroundColor: 'rgb(48,48,48)'
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        backgroundColor: 'inherit'
      },
      logoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        width: '100%',
        backgroundColor: 'transparent'
      },
      logo: {
        height: '50px',
        marginTop: '-5px',
        marginBottom: '5px',
        backgroundColor: 'transparent'
      },
      history: {
        alignSelf: 'flex-start',
        color: 'rgb(70,70,70)',
        marginTop: '-5px',
        marginLeft: '-5px',
        marginBottom: '5px',
        cursor: 'pointer',
        backgroundColor: 'transparent'
      },
      topWrapper: {
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexWrap: 'noWrap',
        backgroundColor: 'transparent'
      },
      remainingBalance: {
        fontSize: '16pt',
        backgroundColor: 'transparent',
        textAlign: 'center'
      },
      remainingBalanceLabel: {
        fontSize: '16pt',
        backgroundColor: 'transparent',
        textAlign: 'center'
      },
      middleWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '8px',
        marginBottom: '6px',
        backgroundColor: 'transparent'
      },
      expiration: {
        width: '40%',
        backgroundColor: 'transparent'
      },
      bottomWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
      },
      acctName: {
        alignSelf: 'flex-start',
        fontSize: '11pt',
        backgroundColor: 'transparent'
      },
      type: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        fontSize: '10pt',
        backgroundColor: 'transparent'
      }
    };
    return (
      <Paper className="card" style={styles.card} onMouseEnter={this.highlightCard} onMouseLeave={this.unHighlightCard} onClick={this.props.selectCard}>
        <div style={styles.wrapper}>
          <div style={styles.logoWrapper}>
            <FontIcon className="material-icons" style={styles.history} onMouseEnter={this.highlightButton} onMouseLeave={this.unHighlightButton} onClick={this.viewMore}>restore</FontIcon>
            <img src={rbclogo} style={styles.logo}></img>
          </div>
          <div>
            <div style={styles.topWrapper}>
              <div style ={styles.remainingBalanceLabel}>REMAINING:</div>
              <div style={styles.remainingBalance}>{this.formatMoney(this.props.limit - (this.props.balance || 100))}</div>
            </div>
            <div style={styles.bottomWrapper}>
              <div style={styles.acctName}>{this.props.acctName.toUpperCase()}</div>
              <div style={styles.type}>of&nbsp;{this.formatMoney(this.props.limit)}
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

AccountComponent.defaultProps = {};

export default AccountComponent;
