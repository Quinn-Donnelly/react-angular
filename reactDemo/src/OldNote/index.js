import React, { Component } from 'react'

export default class OldNote extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0,
      date: new Date().toTimeString(),
      interval: 0,
    }
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({
        date: new Date().toTimeString(), 
        interval,
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  updateCounter = (value) => {
    this.setState((state) => {
      return {counter: state.counter + value}
    });
  }

  render() {
    return (
      <div>
        <div>
          This is the note component {this.state.counter} and it is currently {this.state.date}
        </div>
        <button onClick={() => this.updateCounter(1)}>Update</button>
      </div>
    )
  }
}

