'use strict'

import React from 'react'
import Image from 'react-bootstrap/Image'

function HomepageView (props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  )
}

function Header () {
  return (
    <Image src="../../public/Title.png" fluid />
  )
}

function Main () {
  return null;
}

function Footer () {
  return (
    <footer id="footer">
      <DifficultySlider/>
    </footer>
  )
}

function DifficultySlider (props) {
  var difficulty = props.difficultySlider;

  return (
    <div className="slidecontainer">
      <input type="range" min="1" max="3" value={difficulty} className="slider" id="myRange">
      </input>
    </div>
  )
}

export default HomepageView
