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
import Slide from '@material-ui/core/Slide'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { navigate } from 'hookrouter'
import Title from '../Miscellaneous/Title.png'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'

function HomepageView (props) {
  return (
    <Container>
      <Header {...props}/>
      <Main />
      <DifficultySlider {...props}/>
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

function HomepageDrawer (props) {
  const classes = useStyles()

  const Transition = React.forwardRef(function Transition (props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
  })

  const globalScore = (
    <div>
      <Dialog
        open={props.openDrawerData.globalScore}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onOpenGlobalScore(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" classes={classes.globalScoreText}>Global Score</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  )

  const sideList = (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => { props.onOpenDrawer(false) }}
      onKeyDown={(event) => { if (event.key !== 'Tab' && event.key !== 'Shift') props.onOpenDrawer(false) }}
    >
      <List>
        <ListItem button onClick={ () => { return globalScore } }>
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
        className={clsx(props.openDrawerData.drawer && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={props.openDrawerData.drawer} onClose={() => { props.onOpenDrawer(false) }}>
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
    top: theme.spacing(1),
    right: theme.spacing(2)
  },
  list: {
    width: 250
  },
  hide: {
    display: 'none'
  },
  globalScoreText: {
    'text-align': 'center'
  }
}))

DifficultySlider.propTypes = {
  difficultySlider: PropTypes.oneOf(['EASY', 'NORMAL', 'HARD']),
  onChangeDifficulty: PropTypes.func
}

HomepageDrawer.propTypes = {
  openDrawerData: PropTypes.objectOf(PropTypes.bool),
  onOpenDrawer: PropTypes.func,
  onOpenGlobalScore: PropTypes.func,
  onOpenWhats2Answer: PropTypes.func,
  onOpenTeam: PropTypes.func,
  onOpenContacts: PropTypes.func
}

export default HomepageView
