import React from 'react'
import PropTypes from 'prop-types'
import { difficultyTypes } from '../Data/HomepageData/DifficultySliderStore'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import EmojiEvents from '@material-ui/icons/EmojiEvents'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { navigate } from 'hookrouter'
import Title from '../Miscellaneous/Title.png'

function HomepageView (props) {
  return (
    <Container>
      <Header {...props}/>
      <Main {...props} />
      <Footer {...props} />
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

function HomepageDrawer () {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const sideList = (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => { setOpen(false) }}
      onKeyDown={(event) => { if (event.key !== 'Tab' && event.key !== 'Shift') setOpen(false) }}
    >
      <List>
        {['Global Score', 'Info', 'Team', 'Contacts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.menuButton}>
      <CssBaseline/>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => { setOpen(true) }}
        edge="end"
        className={clsx(open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => { setOpen(false) }}>
        {sideList}
      </Drawer>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  },
  formLabel: {
    'text-align': 'center'
  },
  menuButton: {
    position: 'absolute',
    top: '1%',
    right: '2%'
  },
  list: {
    width: 250
  },
  hide: {
    display: 'none'
  }
}))

DifficultySlider.propTypes = {
  difficultySlider: PropTypes.oneOf(['EASY', 'NORMAL', 'HARD']),
  onChangeDifficulty: PropTypes.func
}

export default HomepageView
