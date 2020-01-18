import React from 'react'
import HomepageContainer from './Containers/HomepageContainer'
import NameSelectContainer from './Containers/NameSelectContainer'
import QuestionsContainer from './Containers/QuestionsContainer'
import PlayerStore from './Data/NameSelectData/PlayerStore'

const HomePageRoute = () => <HomepageContainer />
const NameSelectRoute = () => <NameSelectContainer />
const QuestionsRoute = () => PlayerStore.getState().count() === 0 ? <HomepageContainer /> : <QuestionsContainer />

const routes = {
  '/': HomePageRoute,
  '/nameSelect': NameSelectRoute,
  '/game': QuestionsRoute
}

export default routes
