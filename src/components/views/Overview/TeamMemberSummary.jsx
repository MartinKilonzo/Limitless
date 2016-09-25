import React from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {HorizontalBar} from 'react-chartjs-2';

import colors from '../../assets/colors.jsx';

class SpendingUnitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSpend: this.getTotal()
    };
  }
  getTotal = () => {
    console.log(this.props)
    let sum = 0;
    this.props.data.forEach(paymentMethod => {
      paymentMethod.transactionHistory.forEach(transaction => sum += transaction.amount)
    });
    return this.formatMoney(sum);
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
    let tmp = [colors.blue, colors.green, colors.yellow, colors.orange, colors.purple];
    let colorList = [];
    let iColor = 0;
    for (var dataSet in this.props.labels) {
      if (iColor === tmp.length)
        iColor = 0;
      colorList.push(tmp[iColor++]);
    }
    let payments = [];
    this.props.data.forEach(paymentMethod => {
      paymentMethod.transactionHistory.forEach(transaction => {
        //TODO: DATE FILTERS
        payments.push(transaction.amount);
      })
    })
    const chartData = {
      labels: this.props.labels || [
        "Credit", "Checking", "Savings"
      ],
      datasets: [
        {
          label: "",
          backgroundColor: colorList,
          hoverBackgroundColor: colorList,
          borderWidth: 0,
          data: payments || [65.00, 59.05, 80.20]
        }
      ]
    };
    const chartOptions = {
      title: {
        display: false
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
              suggestedMax: this.props.max * 1.1
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              zeroLineWidth: 0
            },
            display: true,
            categoryPercentage: 0.5,
            barPercentage: 0.5
          }
        ]
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => this.formatMoney(tooltipItem.xLabel)
        }
      }
    };
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
        flexDirection: 'column',
        width: '20%',
        height: '100%'
      },
      unitLabel: {
        marginTop: '8px'
      },
      positionLabel: {
        fontSize: '9pt'
      },
      spendingWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%'
      },
      totalWrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        width: '20%',
        height: '100%',
        fontWeight: 500
      }
    }
    return (
      <ListItem id={this.props.id}>
        <Paper style={styles.wrapper}>
          <div style={styles.unitWrapper}>
            <Avatar size={60} src={this.props.picture} style={styles.avatar}></Avatar>
            <div style={styles.unitLabel}>{this.props.label}</div>
            <div style={styles.positionLabel}>{this.props.position || 'Member'}</div>
          </div>
          <div style={styles.spendingWrapper}>
            <HorizontalBar style={styles.graph} data={chartData} options={chartOptions} height={75} maxWidth={600} redraw></HorizontalBar>
          </div>
          <div style={styles.totalWrapper}>
            Total: {this.state.totalSpend}
          </div>
        </Paper>
      </ListItem>
    );
  }
}

SpendingUnitComponent.defaultProps = {
  labels: ["Credit", "Checking", "Savings"]
};

export default SpendingUnitComponent;
