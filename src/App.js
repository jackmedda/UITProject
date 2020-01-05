import React from 'react'
import Title from './Miscellaneous/Title.png'
import routes from './routes'
import { useRoutes } from 'hookrouter'
import { Container } from '@material-ui/core'

function App (props) {
  const routeResult = useRoutes(routes)

  return (
    <Container>
      <Header/>
      {routeResult}
    </Container>
  )
}

function Header () {
  return (
    <img alt="Title" src={Title}/>
  )
}

export default App
