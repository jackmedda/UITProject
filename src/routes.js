import React from 'react'
import HomepageContainer from './Containers/HomepageContainer'
import NameSelectContainer from './Containers/NameSelectContainer'

const HomePageRoute = () => <HomepageContainer />
const NameSelectRoute = () => <NameSelectContainer />
const QuestionsRoute = () => <QuestionsRoute />

const routes = {
  '/': HomePageRoute,
  '/nameSelect': NameSelectRoute,
  '/game': QuestionsRoute
}

export default routes
