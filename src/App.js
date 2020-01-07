import React from 'react'
import Container from '@material-ui/core/Container'
import routes from './routes'
import { useRoutes } from 'hookrouter'

function App (props) {
  const routeResult = useRoutes(routes)

  return (
    <Container fluid>
      {routeResult}
    </Container>
  )
}

export default App
