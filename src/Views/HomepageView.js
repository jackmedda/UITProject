import React from 'react'
import PropTypes from 'prop-types'
import { difficultyTypes } from '../Data/HomepageData/DifficultySliderStore'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { makeStyles } from '@material-ui/core/styles'
import { navigate } from 'hookrouter'
import Title from '../Miscellaneous/Title.png'
import HomepageDrawer from './HomepageDrawer'

function HomepageView (props) {
  return (
    <Container>
      <Header {...props}/>
      <Main />
      <DifficultySlider {...props}/>
      <Footer />
    </Container>
  )
}

function Header (props) {
  return (
    <Grid container justify="center" direction="row" >
      <img alt="Title" src={Title}/>
      <HomepageDrawer {...props}/>
    </Grid>
  )
}

function Main () {
  return (
    <div id="main">
      <Button variant="contained" color="primary" onClick={ () => { navigate('/nameSelect') } }>
        Start!
      </Button>
    </div>
  )
}

function Footer () {
  return (
    <footer id="footer">
      Copyright
    </footer>
  )
}

function DifficultySlider (props) {
  const difficulty = props.difficultySlider
  const onChange = (event) => props.onChangeDifficulty(event.target.value)
  const classes = useStyles()

  return (
    <div className="slidercontainer">
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.formLabel}>Difficulty</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={difficulty} onChange={onChange} row>
          <FormControlLabel value={difficultyTypes.EASY} control={<Radio />} label="EASY" />
          <FormControlLabel value={difficultyTypes.NORMAL} control={<Radio />} label="NORMAL" />
          <FormControlLabel value={difficultyTypes.HARD} control={<Radio />} label="HARD" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  },
  formLabel: {
    'text-align': 'center'
  }
}))

DifficultySlider.propTypes = {
  difficultySlider: PropTypes.oneOf(['EASY', 'NORMAL', 'HARD']),
  onChangeDifficulty: PropTypes.func
}

export default HomepageView
