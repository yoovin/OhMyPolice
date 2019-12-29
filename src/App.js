import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'
// import seafrog from './Img/seafrog.png'
// import seafrog from './Img/wseafrog.png'

export default class App extends Component {

  render() {
    return (
      <div className="out">
        <div className="in">
          <Main/>
          {/* <img className="seafrog" src={seafrog} width="100px" alt="frog"/> */}
          {/* <span className="nextButton">다음</span> */}
      </div>
    </div>
    )
  }
}
