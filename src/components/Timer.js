import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import SecondsTohhmmss from './SecondsTohhmmss'

let offset = null, interval = null

/**
 * Timer module
 * A simple timer component.
**/
export default class Timer extends Component {

  constructor(props) {
    super(props)
    this.state = { clock: 0, time: '' }

    this.pause = this.pause.bind(this)
  }

  componentDidMount() {
    this.play()
  }

  componentWillUnmount() {
    this.pause()
  }

  pause() {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }

  play() {
    if (!interval) {
      offset = Date.now()
      interval = setInterval(this.update.bind(this), this.props.options.delay)
    }
  }

  reset() {
    let clockReset = 0
    this.setState({clock: clockReset })
    let time = SecondsTohhmmss(clockReset / 1000)
    this.setState({time: time })
  }

  update() {
    let clock = this.state.clock
    clock += this.calculateOffset()
    this.setState({clock: clock })
    let time = SecondsTohhmmss(clock / 1000)
    this.setState({time: time })
  }

  calculateOffset() {
    let now = Date.now()
    let newOffset = now - offset
    offset = now
    return newOffset
  }

  render() {
    const timerStyle = {
      margin: "0px",
      padding: "2em"
    };

    const buttonStyle = {
      background: "#fff",
      color: "#666",
      border: "1px solid #ddd",
      margin: "0.25em",
      padding: "0.75em",
      fontWeight: "200"
    };

    const secondsStyles = {
      fontSize: "200%",
      fontWeight: "200",
      lineHeight: "1.5",
      margin: "0px",
      color: "#666"
    };

    if(this.props.stop){
    	this.pause();
    }

    return (
      <div style={timerStyle} className="react-timer">
        <h3 style={secondsStyles} className="seconds"> {this.state.time} {this.props.prefix}</h3>
        <br />
      </div>
    )
  }
}

