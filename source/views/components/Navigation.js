import React from 'react'
import styled from 'react-emotion'
import { Link as RouterLink } from 'react-router-dom'

const Wrapper = styled.nav`
background: #323233;
padding: 20px;
`

const Link = styled(RouterLink)`
  list-style-type: none;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`

const Navigation = () => (
  <Wrapper>
    <Link to='/'>Домой</Link>
    <Link to='/history'>История</Link>
    <Link to='/prepaid'>Пополнить</Link>
    <Link to='/withdraw'>Перевести</Link>
    <Link to='/mobile-payment'>Мобильный</Link>
  </Wrapper>
)

export default Navigation
