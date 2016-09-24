import React from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

import colors from '../../../assets/colors.jsx';

import rbclogo from '../../../../images/rbclogo.png';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  highlightCard = (event) => {
    const card = event.target;
    this.setState({
      bgColor: card.style.backgroundColor
    }, () => {
      card.style.backgroundColor = 'rgb(52,52,52)';
    })
  }
  unHighlightCard = (event) => {
    event.target.style.backgroundColor = this.state.bgColor || 'rgb(70,70,70)';
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
        width: '100%',
        backgroundColor: 'inherit'
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
      history: {
        alignSelf: 'flex-start',
        color: 'rgb(70,70,70)',
        marginTop: '-5px',
        marginLeft: '-5px',
        marginBottom: '5px',
        cursor: 'pointer',
        backgroundColor: 'inherit'
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
      }
    };
    return (
      <Paper style={styles.card} onMouseEnter={this.highlightCard} onMouseLeave={this.unHighlightCard} onClick={this.props.selectCard}>
        <div style={styles.wrapper}>
          <div style={styles.logoWrapper}>
            <FontIcon className="material-icons" style={styles.history} onMouseEnter={this.highlightButton} onMouseLeave={this.unHighlightButton} onClick={this.viewMore}>restore</FontIcon>
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
      </Paper>
    );
  }
}

CardComponent.defaultProps = {};

export default CardComponent;
