'use strict'

import React from 'react'

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
