import React from 'react';
import Paper from 'material-ui/Paper';
import ListItem from 'material-ui/List';
import HorizontalBar from 'react-chartjs-2';

import colors from '../../assets/colors';

class DepartmentSummaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSpend: this.getTotal()
    };
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
    let tmp =  [
      colors.blue, colors.green, colors.yellow, colors.orange, colors.purple
    ];
    let colorList = [];
    let iColor = 0;
    for (var dataSet in this.props.labels) {
      if (iColor === tmp.length) iColor = 0;
      colorList.push(tmp[iColor++]);
    }
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
          data: this.props.data || [65.00, 59.05, 80.20]
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
            display: false,
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              zeroLineWidth: 0
            },
            display: false
          }
        ]
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => this.formatMoney(data.datasets[0].data[tooltipItem.index])
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
      label: {
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
        width: '20%',
        height: '100%',
        fontWeight: 500
      }
    };
    return (
      <ListItem>
        <Paper style={styles.wrapper}>
          <div style={styles.unitWrapper}>
            <span style={styles.label}>{this.props.label}</span>
          </div>
          <div style={styles.graphWrapper}>
            <HorizontalBar style={styles.graph} data={chartData} options={chartOptions} height={100} maxWidth={600} redraw></HorizontalBar>
          </div>
          <div style={styles.totalWrapper}>
            Total: {this.state.totalSpend}
          </div>
        </Paper>
      </ListItem>
    );
  }
}

DepartmentSummaryComponent.defaultProps = {};

export default DepartmentSummaryComponent;
