import React, { Component } from 'react'
import styles from './App.css'

import socketIO from 'socket.io-client'

class App extends Component {
  componentDidMount() {
    let io = socketIO('http://localhost:7000')
    io.on('connection', () => {})
    io.on('connectToRoom', data => {
      console.log(data)
    })
  }

  render() {
    return(
      <div className={styles.app}>
        <h2>Hello,sdf</h2>
      </div>
    )
  }
}

export default App