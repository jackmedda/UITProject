import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Title from '../Miscellaneous/Title.png'
import routes from '../routes'
import { navigate, useRoutes, usePath } from 'hookrouter'

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
    <Image src={Title} fluid />
  )
}

function Main (props) {
  const route = useRoutes(routes)

  return (
    <div id="main">
      <Button variant="primary" onClick={ () => { navigate('/nameSelect') } }>Start!</Button>
      {usePath() === '/' ? '' : route}
    </div>
  )
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
