import React from 'react'
import { difficultyTypes } from '../Data/HomepageData/DifficultySliderStore'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { makeStyles } from '@material-ui/core'
import { navigate } from 'hookrouter'

function HomepageView (props) {
  return (
    <div>
      <Main {...props} />
      <Footer {...props} />
    </div>
  )
}

function Header (props) {

}

function Main (props) {
  return (
    <div id="main">
      <Button variant="contained" color="primary" onClick={ () => { navigate('/nameSelect') } }>
        Start!
      </Button>
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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  formLabel: {
    'text-align': 'center'
  }
}))

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

export default HomepageView
