import React from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

class SpendingUnitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }
  getTotal = () => {
    let sum = 0;
    this.props.data.transactions.forEach(transaction => sum += transaction);
    return sum;
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '0 2% 0 2%',
        padding: '20px 20px 20px 20px'
      },
      unitWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '20%',
        height: '100%'
      },
      unitLabel: {
        marginLeft: '12px'
      }, spendingWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        height: '100%'
      }, totalWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '20%',
        height: '100%'
      }
    }
    return (
      <ListItem>
        <Paper style={styles.wrapper}>
          <div style={styles.unitWrapper}>
            <Avatar size={60} style={styles.avatar}>{this.props.user.charAt(0)}</Avatar>
            <span style={styles.unitLabel}>{this.props.user}</span>
          </div>
          <div style={styles.spendingWrapper}>

          </div>
          <div style={styles.totalWrapper}>
            {this.getTotal}
          </div>
        </Paper>
      </ListItem>
    );
  }
}

SpendingUnitComponent.defaultProps = {};

export default SpendingUnitComponent;
