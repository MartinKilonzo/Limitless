import React from 'react';
import {Button} from 'react-bootstrap';

import FingerPrintLogo from './FingerPrintLogo.jsx';
import Password from './Password.jsx';
import colors from '../../assets/colors.jsx';

class WelcomeViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.addEventListener('resize', this.resizeWrapper);
    const wrapper = document.getElementById('buttonWrapper');
    this.resizeWrapper();
    wrapper.style.visibility = 'visible';
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWrapper);
  }
  resizeWrapper() {
    const wrapper = document.getElementById('buttonWrapper');
    wrapper.style.width = document.getElementById('logo').offsetWidth + 'px';
  }
  highlightFingerPrintLogo() {
    const style = document.getElementById('fingerprint').style;
    style.color = colors.accent;
  }
  unHighlightFingerPrintLogo() {
    const style = document.getElementById('fingerprint').style;
    style.color = colors.dark;
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
        backgroundColor: "#002888",
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
        color: "rgb(231,196,38)", // Transition from dark to base
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
        color: "rgb(231,196,38)",
        transition: 'color 1s'
      }
    };
    //TODO: MenuButton --> password input field
    return (
      <div style={styles.background}>
        <div style={styles.wrapper}>
          <span id="logo" style={styles.logo} onMouseOver={this.highlightFingerPrintLogo} onMouseLeave={this.unHighlightFingerPrintLogo}>Touch t<FingerPrintLogo id="fingerprint" style={styles.fingerprint}></FingerPrintLogo>
            Pay</span>
          <div id="buttonWrapper" style={styles.buttonWrapper}>
            <Password callback={this.highlightFingerPrintLogo}></Password>
          </div>
        </div>
      </div>
    );
  }
}

WelcomeViewComponent.defaultProps = {};

export default WelcomeViewComponent;
