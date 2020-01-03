import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

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
  const onSubmitName = (event) => props.onSubmitName(event.target.value)

  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Player 1</Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Name..." />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Player 2</Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Name..." onBlur={onSubmitName}/>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </CardDeck>
  )
}

function Footer (props) {
  return null
}

export default NameSelectView
