import React, { Component } from 'react'

export default class OldNote extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0,
      date: new Date().toTimeString()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({date: new Date().toTimeString()})
    }, 1000);
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

