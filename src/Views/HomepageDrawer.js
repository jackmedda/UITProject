import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import EmojiEvents from '@material-ui/icons/EmojiEvents'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import Mail from '@material-ui/icons/Mail'
import People from '@material-ui/icons/People'
import clsx from 'clsx'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Immutable from 'immutable'
import { FixedSizeList } from 'react-window'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import players from '../players'

const GSTable = forwardRef(function GSTable (props, ref) {
  return (
    <Table ref={ref} style={props.style}>
      <TableHead>
        <TableRow>
          <TableCell>Position</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Score</TableCell>
        </TableRow>
      </TableHead>
      {props.children}
    </Table>
  )
})

class GlobalScore extends React.PureComponent {
  render () {
    const player = this.props.data[this.props.index]

    return (
      <TableRow>
        <TableCell>{this.props.index + 1}</TableCell>
        <TableCell>{player.name}</TableCell>
        <TableCell>{player.score}</TableCell>
      </TableRow>
    )
  }
}

export default function HomepageDrawer (props) {
  const classes = useStyles()

  const Transition = React.forwardRef(function Transition (props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
  })

  const _players = players.map(player => player[1]).sort((a, b) => {
    if (a.score < b.score) { return 1 }
    if (a.score > b.score) { return -1 }
    return 0
  })

  // Global score drawer item
  const globalScore = (
    <div>
      <Dialog
        open={props.openDrawerData.get('globalScore')}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => { props.onOpenDrawerItem('globalScore', false) }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={clsx(!props.openDrawerData.get('globalScore') && classes.hide)}
      >
        <ThemeProvider theme={theme}>
          <DialogTitle id="alert-dialog-slide-title">Global Score</DialogTitle>
        </ThemeProvider>
        <DialogContent>
          <FixedSizeList
            height={400}
            itemData={_players}
            itemCount={_players.length}
            itemSize={35}
            width={300}
            itemKey={(index, data) => { return data[index].id }}
            outerElementType={GSTable}
            innerElementType={TableBody}
          >
            {GlobalScore}
          </FixedSizeList>
        </DialogContent>
      </Dialog>
    </div>
  )

  // What's 2Answer drawer item
  const whats2Answer = (
    <div>
      <Dialog
        open={props.openDrawerData.get('whats2Answer')}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => { props.onOpenDrawerItem('whats2Answer', false) }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={clsx(!props.openDrawerData.get('whats2Answer') && classes.hide)}
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
        open={props.openDrawerData.get('team')}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => { props.onOpenDrawerItem('team', false) }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={clsx(!props.openDrawerData.get('team') && classes.hide)}
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
        open={props.openDrawerData.get('contacts')}
        keepMounted
        onClose={() => { props.onOpenDrawerItem('contacts', false) }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={clsx(!props.openDrawerData.get('contacts') && classes.hide)}
      >
        <ThemeProvider theme={theme}>
          <DialogTitle id="alert-dialog-slide-title">Contact Us</DialogTitle>
          <DialogContent>
            <form id="contents_form" action={ undefined }>
              <TextField id="contacts_email" autoFocus={true} fullWidth margin="dense"
                type="email" label="Email" variant="outlined"
                value={props.contactUs.get('email')}
                onChange={(event) => { props.onChangeContactUs(event.target.value, props.contactUs.get('message')) }}
              />
              <TextField id="contacts_message" fullWidth
                type="text" label="Message" variant="outlined" multiline={true}
                value={props.contactUs.get('message')}
                onChange={(event) => { props.onChangeContactUs(props.contactUs.get('email'), event.target.value) }}
              />
            </form>
          </DialogContent>
        </ThemeProvider>
        <DialogActions>
          <Button type="submit" form="contents_form" value="Submit"
            onClick={() => { props.onSubmitContactUs() }} color="primary">
            Submit
          </Button>
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
    MuiDialogTitle: {
      root: {
        'text-align': 'center'
      }
    },
    MuiInputLabel: {
      root: {
        'background-color': 'white',
        padding: '0 5px'
      }
    }
  }
})

const useStyles = makeStyles({
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
})

HomepageDrawer.propTypes = {
  openDrawerData: PropTypes.instanceOf(Immutable.Record),
  onOpenDrawerItem: PropTypes.func,
  contactUs: PropTypes.instanceOf(Immutable.Record),
  onChangeContactUs: PropTypes.func,
  onSubmitContactUs: PropTypes.func,
  players: PropTypes.arrayOf(Immutable.Record)
}

GSTable.propTypes = {
  style: PropTypes.shape({ subProp: PropTypes.string }).isRequired,
  children: PropTypes.node
}

GlobalScore.propTypes = {
  index: PropTypes.number,
  data: PropTypes.any
}
