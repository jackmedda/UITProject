import React from 'react'
import Button from '@material-ui/core/Button'
import Title from '../Miscellaneous/Title.png'
import routes from '../routes'
import { navigate, useRoutes } from 'hookrouter'

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
    <img src={Title}/>
  )
}

function Main (props) {
  routes['/'] = ''
  const route = useRoutes(routes)

  return (
    <div id="main">
      <Button variant="contained" color="primary" onClick={ () => { navigate('/nameSelect') } }>
        Start!
      </Button>
      {route}
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
