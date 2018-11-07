import React, { Fragment } from 'react'

import text from './prepaid-text.html'
import { Prepaid, HtmlFormatter } from '../components'

const PrepaidContainer = ({ inactiveCardsList }) => (
  <Fragment>
    <Prepaid inactiveCardsList={inactiveCardsList} />
    <HtmlFormatter text={text} />
  </Fragment>
)

export default PrepaidContainer
