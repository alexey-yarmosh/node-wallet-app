import React, { Fragment } from 'react'

import text from './history-text.html'
import { History, HtmlFormatter } from '../components'

const HistoryContainer = () => (
  <Fragment>
    <History />
    <HtmlFormatter text={text} />
  </Fragment>
)

export default HistoryContainer
