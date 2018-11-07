import React, { Fragment } from 'react'

import text from './withdraw-text.html'
import { Withdraw, HtmlFormatter } from '../components'

const WithdrawContainer = ({ rootCardId, inactiveCardsList }) => (
  <Fragment>
    <Withdraw rootCardId={rootCardId} inactiveCardsList={inactiveCardsList} />
    <HtmlFormatter text={text} />
  </Fragment>
)

export default WithdrawContainer
