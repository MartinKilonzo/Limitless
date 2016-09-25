import React from 'react';
import Paper from 'material-ui/Paper';
import ListItem from 'material-ui/List';
import {Bar} from 'react-chartjs-2';

import colors from '../../assets/colors';

class OverallSummaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSpend: this.getTotal(),
      height: props.height
    };
  }
  getTotal = () => {
    const balances = this.props.data.balance.data;
    let limits = this.props.data.limits.slice();
    let sum = 0;
    for (var i in balances) {
      sum += limits[i] - balances[i];
    }
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

    const balances = this.props.data.balance.data;
    let remainingData = this.props.data.limits;
    for (var department in balances) {
      remainingData[department] -= balances[department];
    }
    let tmp = [colors.blue, colors.green, colors.yellow, colors.orange, colors.purple];
    let colorList = [];
    let remaningColorList = [];
    let iColor = 0;
    for (var dataSet in this.props.data.labels) {
      if (iColor === tmp.length)
        iColor = 0;
      colorList.push(tmp[iColor++]);
    }
    for (var i in remainingData) {
      if (remainingData[i] < 0)
        remaningColorList.push('#EF9A9A');
      else
        remaningColorList.push('#E0E0E0');
      }
    const chartData = {
      labels: this.props.data.balance.labels || [
        "Credit", "Checking", "Savings"
      ],
      datasets: [
        {
          label: "",
          backgroundColor: colorList,
          hoverBackgroundColor: colorList,
          borderWidth: 0,
          data: this.props.data.balance.data || [65.00, 59.05, 80.20]
        }, {
          label: "",
          backgroundColor: remaningColorList,
          hoverBackgroundColor: remaningColorList,
          borderWidth: 0,
          data: remainingData || [65.00, 59.05, 80.20]
        }
      ]
    };
    const chartOptions = {
      title: {
        display: false
      },
      legend: {
        display: true,
        position: 'bottom',
        onClick: this.props.redirect
      },
      cutoutPercentage: 75,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
              zeroLineWidth: 0
            },
            display: true,
            stacked: true
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              zeroLineWidth: 0
            },
            display: true,
            stacked: true
          }
        ]
      },
      tooltips: {
        callbacks: {
          beforeLabel: (a, b) => {
            if (a.datasetIndex === 0)
              return 'Used:';
            else
              return 'Reamining:'
          },
          label: (tooltipItem, data) => this.formatMoney(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])
        }
      }
    };
    const styles = {
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      },
      unitWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
      },
      labelWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      },
      label: {
        fontFamily: 'Roboto, ',
        fontWeight: 500
      },
      graphWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%'
      },
      totalWrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        height: '100%',
        fontWeight: 500
      }
    };
    return (
      <ListItem>
        <div style={styles.wrapper}>
          <div style={styles.labelWrapper}>
            <div style={styles.unitWrapper}>
              <h1 style={styles.label}>Welcome to your dashboard.</h1>
            </div>
            <div style={styles.totalWrapper}>
              Your current cash: {this.state.totalSpend}
            </div>
          </div>
          <div style={styles.graphWrapper}>
            <Bar style={styles.graph} data={chartData} options={chartOptions} height={this.state.height} maxWidth={600} redraw></Bar>
          </div>

        </div>
      </ListItem>
    );
  }
}

OverallSummaryComponent.defaultProps = {
  height: 100
};

export default OverallSummaryComponent;
