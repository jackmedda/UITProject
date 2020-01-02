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

function Header (props) {
  return (
    <Image src="../../public/Title.png" fluid />
  )
}

function Main (props) {
  return null
}

function Footer (props) {
  return (
    <footer id="footer">
      <DifficultySlider {...props}/>
    </footer>
  )
}

function DifficultySlider (props) {
  const difficulty = props.difficultySlider
  const onChange = (event) => props.onChangeDifficulty(event.target.value)

  return (
    <div className="slidercontainer">
      <input
        type="range"
        min="1"
        max="3"
        value={difficulty}
        onChange={onChange}
        className="slider">
      </input>
    </div>
  )
}

export default HomepageView
