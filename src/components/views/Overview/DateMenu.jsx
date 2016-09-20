import React from 'react';
import DatePicker from 'material-ui/DatePicker';

class DateMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
      }
    }
    return (
      <div style={styles.wrapper}>
        <div>
          <DatePicker floatingLabelText={this.state.endDate} autoOk={this.state.autoOk} disableYearSelection={this.state.disableYearSelection}/>
        </div>
        <div>
          <DatePicker floatingLabelText={this.state.endDate} autoOk={this.state.autoOk} disableYearSelection={this.state.disableYearSelection}/>
        </div>
      </div>
    );
  }
}

DateMenuComponent.defaultProps = {};

export default DateMenuComponent;
