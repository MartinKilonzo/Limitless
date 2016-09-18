import React from 'react';
import {Button} from 'react-bootstrap';

import MenuButton from '../../assets/MenuButton.jsx';
import Fingerprint from './Fingerprint.jsx';
import colors from '../../assets/colors.jsx';

class WelcomeViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.resizeWrapper = this.resizeWrapper.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.resizeWrapper);
    const wrapper = document.getElementById('buttonWrapper');
    this.resizeWrapper(wrapper);
    wrapper.style.visibility = 'visible';
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWrapper);
  }
  resizeWrapper(element) {
    element.style.width = document.getElementById('logo').offsetWidth + 'px';
  }
  render() {
    //TODO: User toggle for disableing the sequence near bottom corner
    const styles = {
      background: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: colors.white
        // background: `linear-gradient(to bottom right, ${colors.white}, ${colors.light})`
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '40vh'
      },
      logo: {
        color: colors.dark, // Transition from dark to base
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '56pt',
        fontWeight: 100,
        lineHeight: '56pt'
      },
      buttonWrapper: {
        visibility: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '12pt',
        fontWeight: 100,
        lineHeight: '24pt',
        cursor: 'pointer',
        userSelect: 'none'
      },
      fingerprint: {
        marginLeft: '-5px',
        fontSize: '36pt',
        fontWeight: '100',
        color: colors.dark,
        transition: 'color 1s'
      }
    };
    //TODO: MenuButton --> password input field
    return (
      <div style={styles.background}>
        <div style={styles.wrapper}>
          <span id="logo" style={styles.logo}>Touch t<Fingerprint style={styles.fingerprint}></Fingerprint>
            Pay</span>
          <div id="buttonWrapper" style={styles.buttonWrapper}>
            <MenuButton to="/home" {...this.props}>Password</MenuButton>
          </div>
        </div>
      </div>
    );
  }
}

WelcomeViewComponent.defaultProps = {};

export default WelcomeViewComponent;
