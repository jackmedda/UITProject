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
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import EmojiEvents from '@material-ui/icons/EmojiEvents'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import Mail from '@material-ui/icons/Mail'
import People from '@material-ui/icons/People'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { navigate } from 'hookrouter'
import Title from '../Miscellaneous/Title.png'

function HomepageView (props) {
  return (
    <Container>
      <Header {...props}/>
      <Main />
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

function Main () {
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

function HomepageDrawer (props) {
  const classes = useStyles()

  const sideList = (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => { props.onOpenDrawer(false) }}
      onKeyDown={(event) => { if (event.key !== 'Tab' && event.key !== 'Shift') props.onOpenDrawer(false) }}
    >
      <List>
        <ListItem button>
          <ListItemIcon><EmojiEvents/></ListItemIcon>
          <ListItemText primary='Global Score' />
        </ListItem>
        <ListItem button>
          <ListItemIcon><VideogameAssetIcon/></ListItemIcon>
          <ListItemText primary='What is 2Answer?' />
        </ListItem>
        <ListItem button>
          <ListItemIcon><People/></ListItemIcon>
          <ListItemText primary='Team' />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Mail/></ListItemIcon>
          <ListItemText primary='Contacts' />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div className={classes.menuButton}>
      <CssBaseline/>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => { props.onOpenDrawer(true) }}
        edge="end"
        className={clsx(props.open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={props.open} onClose={() => { props.onOpenDrawer(false) }}>
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

HomepageDrawer.propTypes = {
  open: PropTypes.bool,
  onOpenDrawer: PropTypes.func
}

export default HomepageView
