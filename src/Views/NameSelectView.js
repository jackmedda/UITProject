import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import { navigate } from 'hookrouter'
import Immutable from 'immutable'
import clsx from 'clsx'
import playersJSON from '../players'

function NameSelectView (props) {
  return (
    <Container maxWidth="md">
      <Main {...props} />
      <Footer {...props} />
    </Container>
  )
}

function Main (props) {
  const classes = useStyles()

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {[...props.players.values()].map(player => (
          <Player
            key={player.id}
            player={player}
            {...props}
          />
        ))}
        <Fab color="primary" aria-label="add" onClick={ () => { props.onNewPlayer(); props.onNewValName() }}>
          <AddIcon />
        </Fab>
      </Grid>
    </Container>
  )
}

function Footer (props) {
  const classes = useStyles()
  const onClick = () => {
    if (!props.nameValidators.reduce((acc, curr) => acc.error || curr.error)) {
      navigate('/game')
    }
  }

  return (
    <Button className={clsx(props.players.size === 0 && classes.hide)} onClick={onClick}>
      {props.players.size > 1 ? 'We\'re ready!' : 'I\'m ready!'}
    </Button>
  )
}

function Player (props) {
  const classes = useStyles()

  const onChange = (event) => {
    props.onSubmitName(props.player.id, event.target.value)

    const _players = props.players.toArray()
    // In _players is added manually the changed name
    _players.forEach(element => {
      if (element[0] === props.player.id) {
        element[1] = element[1].set('name', event.target.value)
      }
    })

    _players.forEach((outerElement, outerIndex) => {
      let notDistinct = false
      _players.forEach((innerElement, innerIndex) => {
        if (outerIndex !== innerIndex) {
          if (outerElement[1].name !== '' && outerElement[1].name === innerElement[1].name) {
            props.onUpdateValName('standard-basic-' + outerElement[0], true)
            notDistinct = true
          }
        }
      })
      // Called to check if playersJSON contains event.target.value
      if (!notDistinct) {
        props.onUpdateValName(
          'standard-basic-' + outerElement[0],
          playersJSON.reduce((acc, curr) => acc || curr[1].name === outerElement[1].name.trim(), false)
        )
      }
    })
  }

  return (
    <Grid item key={props.player.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardActions>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id={'standard-basic-' + props.player.id}
              error={props.nameValidators.get('standard-basic-' + props.player.id).error}
              defaultValue={props.player.name}
              label="Game Name"
              onChange={onChange}
              aria-describedby="error-helper-text"
              helperText={props.nameValidators.get('standard-basic-' + props.player.id).helperText}
            />
          </form>
        </CardActions>
      </Card>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  hide: {
    display: 'none'
  }
}))

Main.propTypes = {
  players: PropTypes.instanceOf(Immutable.OrderedMap),
  onSubmitName: PropTypes.func,
  onNewPlayer: PropTypes.func,
  onNewValName: PropTypes.func
}

Footer.propTypes = {
  players: PropTypes.instanceOf(Immutable.OrderedMap),
  nameValidators: PropTypes.instanceOf(Immutable.OrderedMap)
}

Player.propTypes = {
  players: PropTypes.instanceOf(Immutable.OrderedMap),
  player: PropTypes.object,
  onSubmitName: PropTypes.func,
  nameValidators: PropTypes.instanceOf(Immutable.OrderedMap),
  onUpdateValName: PropTypes.func
}

export default NameSelectView
