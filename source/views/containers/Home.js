import React, { Fragment } from 'react'

import {
	History,
	Prepaid,
	MobilePayment,
  Withdraw
} from '../components'

const Home = ({ inactiveCardsList, rootCard }) => (
  <Fragment>
    <History />
    <Prepaid
      inactiveCardsList={inactiveCardsList}
    />
    <MobilePayment rootCard={rootCard} />
    <Withdraw
      rootCardId={rootCard.id}
      inactiveCardsList={inactiveCardsList}
    />
  </Fragment>
)

export default Home
