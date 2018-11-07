import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { connect } from 'react-redux'

import { Card } from './'
import { switchRootCard, changePrepaidStatus } from './../actions'
import { prepareCardsData } from './../utils'

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: #242424;
	padding: 20px;
`

const Logo = styled.div`
	width: 147px;
	height: 28px;
	margin-bottom: 55px;
	background-image: url('/assets/yamoney-logo.svg');
`

const Edit = styled.div`
	position: absolute;
	top: 25px;
	right: 20px;
	width: 18px;
	height: 18px;
	background-image: url('/assets/cards-edit.svg');
`

const CardsList = styled.div`
	flex: 1;
`

const Footer = styled.footer`
	color: rgba(255, 255, 255, 0.2);
	font-size: 15px;
`

const CardsBar = ({ rootCardId, cards, onCardChange }) => (
	<Layout>
		<Logo />
		<Edit />
		<CardsList>
			{cards.map((card, index) => (
				<Card
					key={index}
					data={card}
					active={card.id === rootCardId}
					onClick={() => onCardChange(card.id)}
				/>
			))}
			<Card type='new' />
		</CardsList>
		<Footer>Yamoney Node School</Footer>
	</Layout>
)

CardsBar.propTypes = {
	cards: PropTypes.array.isRequired,
	rootCardId: PropTypes.number.isRequired,
	onCardChange: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	rootCardId: state.rootCardId,
	cards: prepareCardsData(state.cards),
})

const mapDispatchToProps = dispatch => ({
	onCardChange: rootCardId => { // TODO🔥: should implement something like RESET_MAIN_SECTION action
		dispatch(switchRootCard(rootCardId))
		dispatch(changePrepaidStatus('contract'))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardsBar)
