import React, { Fragment } from 'react'

import text from './mobile-text.html'
import { MobilePayment, HtmlFormatter } from '../components'

const MobileContainer = ({ rootCard }) => (
  <Fragment>
    <MobilePayment rootCard={rootCard} />
    <HtmlFormatter text={text} />
  </Fragment>
)

export default MobileContainer
