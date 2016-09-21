import React from 'react';
import List from 'material-ui/List'

import SpendingUnit from './SpendingUnit.jsx';

class MarketingViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      wrapper: {
        paddingTop: '6%',
        paddingBottom: '1%'
      }
    }
    return (
      <div>
        <List style={styles.wrapper}>
          {this.props.view === 'team' && this.props.users.map((user, key) => {
            return <SpendingUnit key={key} max={this.props.max} {...user}></SpendingUnit>
          })}
        </List>
        {this.props.view !== 'team' && <div>
          Marketing
        </div>}
      </div>
    );
  }
}

MarketingViewComponent.defaultProps = {};

export default MarketingViewComponent;
