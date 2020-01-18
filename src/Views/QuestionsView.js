import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import shuffle from '../Data/shuffle'
import shortid from 'shortid'
import { makeStyles } from '@material-ui/core'

function QuestionsView (props) {
  return (
    <Container>
      <Question {...props}/>
    </Container>
  )
}

function Question (props) {
  const classes = useStyles()

  return (
    <div id="questions-block">
      <Paper elevation={3} aria-label="question text" className={classes.question}>
        {props.questions.first().get('text')}
      </Paper>
      <Grid className={classes.answers}>
        <ButtonGroup size="large" color="primary" aria-label="answers">
          {shuffle(props.questions.first().get('answers')).map(answer => (
            <Button
              key={shortid.generate()}
              onClick={() => {}}
            >{answer.text}</Button>
          ))}
        </ButtonGroup>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles({
  question: {
    padding: '1%',
    'font-size': 'xx-large',
    'text-align': 'center',
    'margin-bottom': '2%'
  },
  answers: {
    'text-align': 'center'
  }
})

export default QuestionsView
