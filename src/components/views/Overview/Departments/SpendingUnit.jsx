import React from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {HorizontalBar} from 'react-chartjs-2';

import colors from '../../../assets/colors.jsx';

class SpendingUnitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(this.props);
  }
  getTotal = () => {
    let sum = 0;
    this.props.data.forEach(transaction => sum += transaction);
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
        alignItems: 'center',
        flexDirection: 'row',
        width: '20%',
        height: '100%'
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
              suggestedMax: this.state.suggestedMax
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
          label: (tooltipItem, data) => {
            let value = tooltipItem.xLabel;
            const noDecimals = value * 100;
            if ((noDecimals) % 100 === 0) {
              value += '.00';
            } else if ((noDecimals) % 10 === 0) {
              value += '0';
            }
            return '$' + value;
          }
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
            {this.getTotal}
          </div>
        </Paper>
      </ListItem>
    );
  }
}

SpendingUnitComponent.defaultProps = {};

export default SpendingUnitComponent;
