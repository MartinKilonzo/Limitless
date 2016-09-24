import React from 'react';
import Paper from 'material-ui/Paper';

import AccountPayment from './AccountPayment.jsx';

class PaymentViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.location.pathname)
  }
  componentWillMount = () => {
    this.setState({
      initialBgColor: document.body.style.backgroundColor
    }, () => {
      document.body.style.backgroundColor = 'rgb(60, 60, 60)';
    });
  }
  componentWillUnmount = () => {
    document.body.style.backgroundColor = this.state.initalBgColor || 'white';
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {paymentMenthods: this.props.userData.paymentMenthods}));
    const styles = {
      background: {
        position: 'relative',
        height: '100%',
        width: '100%'
      },
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: '100%',
        marginTop: '50px'
      }
    };
    return (
      <div className="container" style={styles.wrapper}>
        {this.props.userData.paymentMethods.map((paymentMethod, key) => {
          return <AccountPayment key={key} {...paymentMethod}></AccountPayment>
        })}
      </div>
    );
  }
}

PaymentViewComponent.defaultProps = {};

export default PaymentViewComponent;
