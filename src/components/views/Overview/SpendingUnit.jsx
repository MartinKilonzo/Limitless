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
    this.state = {};
  }
  componentDidMount = () => {
    this.setState({totalSpend: this.getTotal()});
  }
  getTotal = () => {
    let sum = 0;
    this.props.data.forEach(transaction => sum += transaction);
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
    const tempData = {
      labels: [
        "Credit", "Checking", "Savings"
      ],
      datasets: [
        {
          label: "",
          backgroundColor: [
            colors.blue, colors.green, colors.yellow, colors.orange, colors.purple
          ],
          hoverBackgroundColor: [
            colors.blue, colors.green, colors.yellow, colors.orange, colors.purple
          ],
          borderWidth: 0,
          data: this.props.data || [65.00, 59.05, 80.20]
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
              suggestedMax: this.props.max* 1.1
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
    return (
      <ListItem>
        <Paper style={styles.wrapper}>
          <div style={styles.unitWrapper}>
            <Avatar size={60} style={styles.avatar}>{this.props.firstName.charAt(0)}</Avatar>
            <span style={styles.unitLabel}>{this.props.firstName}</span>
          </div>
          <div style={styles.spendingWrapper}>
            <HorizontalBar style={styles.graph} data={tempData} options={chartOptions} height={75} maxWidth={600} redraw></HorizontalBar>
          </div>
          <div style={styles.totalWrapper}>
            Total: {this.state.totalSpend}
          </div>
        </Paper>
      </ListItem>
    );
  }
}

SpendingUnitComponent.defaultProps = {};

export default SpendingUnitComponent;
