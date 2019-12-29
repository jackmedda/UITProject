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

}

function Footer () {
  return (
    <footer id="footer">
      <DifficultySlider/>
    </footer>
  )
}

function DifficultySlider () {

}
