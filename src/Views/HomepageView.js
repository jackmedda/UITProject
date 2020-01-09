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
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import EmojiEvents from '@material-ui/icons/EmojiEvents'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import Mail from '@material-ui/icons/Mail'
import People from '@material-ui/icons/People'
import Slide from '@material-ui/core/Slide'
import clsx from 'clsx'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { navigate } from 'hookrouter'
import Title from '../Miscellaneous/Title.png'

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

  // Global score drawer item
  const globalScore = (
    <div>
      <Dialog
        open={props.openDrawerData.globalScore}
        TransitionComponent={Transition}
        keepMounted
        onClose={(event) => { props.onOpenDrawerItem('globalScore', false) }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={clsx(!props.openDrawerData.globalScore && classes.hide)}
      >
        <ThemeProvider theme={theme}>
          <DialogTitle id="alert-dialog-slide-title">Global Score</DialogTitle>
        </ThemeProvider>
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

  // What's 2Answer drawer item
  const whats2Answer = (
    <div>
      <Dialog
        open={props.openDrawerData.whats2Answer}
        TransitionComponent={Transition}
        keepMounted
        onClose={(event) => { props.onOpenDrawerItem('whats2Answer', false) }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={clsx(!props.openDrawerData.whats2Answer && classes.hide)}
      >
        <ThemeProvider theme={theme}>
          <DialogTitle id="alert-dialog-slide-title">What&apos;s 2Answer?</DialogTitle>
        </ThemeProvider>
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

  // Team drawer item
  const team = (
    <div>
      <Dialog
        open={props.openDrawerData.team}
        TransitionComponent={Transition}
        keepMounted
        onClose={(event) => { props.onOpenDrawerItem('team', false) }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={clsx(!props.openDrawerData.team && classes.hide)}
      >
        <ThemeProvider theme={theme}>
          <DialogTitle id="alert-dialog-slide-title">Team</DialogTitle>
        </ThemeProvider>
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

  // Contact us drawer item
  const contacts = (
    <div>
      <Dialog
        open={props.openDrawerData.contacts}
        TransitionComponent={Transition}
        keepMounted
        onClose={(event) => { props.onOpenDrawerItem('contacts', false) }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={clsx(!props.openDrawerData.contacts && classes.hide)}
      >
        <ThemeProvider theme={theme}>
          <DialogTitle id="alert-dialog-slide-title">Contact Us</DialogTitle>
        </ThemeProvider>
        <DialogActions>
          <ThemeProvider theme={theme}>
            <form autoComplete="off">
              <TextField id="contacts_email"
                type="email" name="email" label="Email" variant="outlined" classname={classes.contactsEmail} />
              <TextField id="contacts_message"
                type="text" name="message" label="Message" variant="outlined" multiline={true} />
            </form>
          </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  )

  // Drawer
  const sideList = (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        {globalScore}
        {whats2Answer}
        {team}
        {contacts}
        <ListItem button
          onClick={() => { props.onOpenDrawerItem('globalScore', true) }}
          onKeyDown={(event) => { if (event.key === 'Enter') props.onOpenDrawerItem('globalScore', true) }}
        >
          <ListItemIcon><EmojiEvents/></ListItemIcon>
          <ListItemText primary='Global Score' />
        </ListItem>
        <ListItem button
          onClick={() => { props.onOpenDrawerItem('whats2Answer', true) }}
          onKeyDown={(event) => { if (event.key === 'Enter') props.onOpenDrawerItem('whats2Answer', true) }}
        >
          <ListItemIcon><VideogameAssetIcon/></ListItemIcon>
          <ListItemText primary='What&apos;s 2Answer?' />
        </ListItem>
        <ListItem button
          onClick={() => { props.onOpenDrawerItem('team', true) }}
          onKeyDown={(event) => { if (event.key === 'Enter') props.onOpenDrawerItem('team', true) }}
        >
          <ListItemIcon><People/></ListItemIcon>
          <ListItemText primary='Team' />
        </ListItem>
        <ListItem button
          onClick={() => { props.onOpenDrawerItem('contacts', true) }}
          onKeyDown={(event) => { if (event.key === 'Enter') props.onOpenDrawerItem('contacts', true) }}
        >
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
        onClick={() => { props.onOpenDrawerItem('drawer', true) }}
        edge="end"
        className={clsx(props.openDrawerData.drawer && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={props.openDrawerData.drawer} onClose={() => { props.onOpenDrawerItem('drawer', false) }}>
        {sideList}
      </Drawer>
    </div>
  )
}

const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        display: 'block'
      }
    },
    MuiDialogTitle: {
      root: {
        'text-align': 'center'
      }
    }
  }
})

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
    right: theme.spacing(3)
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
  openDrawerData: PropTypes.objectOf(PropTypes.object),
  onOpenDrawerItem: PropTypes.func
}

export default HomepageView
