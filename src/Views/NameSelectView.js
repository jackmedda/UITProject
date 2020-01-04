import React from 'react'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

function NameSelectView (props) {

  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  )
}

function Header (props) {
  return null
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
            onSubmitName={props.onSubmitName}
          />
        ))}
        <Fab color="primary" aria-label="add" onClick={props.onNewPlayer}>
          <AddIcon />
        </Fab>
      </Grid>
    </Container>
  )
}

function Footer (props) {
  return null
}

function Player (props) {
  const onSubmitName = (event) => props.onSubmitName(props.player.id, event.target.value)
  const classes = useStyles()

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
            <TextField id="standard-basic" label="Standard" onBlur={onSubmitName}/>
          </form>
        </CardActions>
      </Card>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
    padding: theme.spacing(6),
  },
}));

export default NameSelectView
