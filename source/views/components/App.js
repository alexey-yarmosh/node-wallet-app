import React from 'react';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import PropTypes from 'prop-types';
import CardInfo from 'card-info';
import { connect } from 'react-redux';

import { switchCard } from './../actions';
import {
	CardsBar,
	Header,
	History,
	Prepaid,
	MobilePayment,
	Withdraw
} from './';
import './fonts.css';

injectGlobal`
	html,
	body {
		margin: 0;
	}

	#root {
		height: 100%;
		font-family: 'Open Sans';
		color: #000;
	}
`;

const Wallet = styled.div`
	display: flex;
	min-height: 100%;
	background-color: #fcfcfc;
`;

const CardPane = styled.div`
	flex-grow: 1;
`;

const Workspace = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 970px;
	padding: 15px;
`;

/**
 * Приложение
 */
const App = ({ cardsList, rootCardId, cardHistory, onCardChange }) => {
	const rootCard = cardsList.find(card => card.id === rootCardId);
	const inactiveCardsList = cardsList.filter(card => card.id !== rootCardId);
	const filteredHistory = cardHistory.filter(data => data.cardId === rootCardId);

	return (
		<Wallet>
			<CardsBar
				rootCardId={rootCardId}
				cardsList={cardsList}
				onCardChange={rootCardId => onCardChange(rootCardId)}
			/>
			<CardPane>
				<Header rootCard={rootCard} />
				<Workspace>
					<History cardHistory={filteredHistory} />
					<Prepaid
						rootCardId={rootCardId}
						inactiveCardsList={inactiveCardsList}
					/>
					<MobilePayment rootCard={rootCard} />
					<Withdraw
						rootCardId={rootCardId}
						inactiveCardsList={inactiveCardsList}
					/>
				</Workspace>
			</CardPane>
		</Wallet>
	);
};

App.propTypes = {
	rootCardId: PropTypes.number,
	cardsList: PropTypes.array,
	cardHistory: PropTypes.array,
	onCardChange: PropTypes.func
};

/**
 * Подготавливает данные карт
 *
 * @param {Object} cardsData данные карт
 * @returns {Object[]}
 */
function prepareCardsData(cardsData) { // TODO 🔥: move to utils.js
	return cardsData.map(card => {
		const cardInfo = new CardInfo(card.cardNumber, {
			banksLogosPath: '/assets/',
			brandsLogosPath: '/assets/'
		});

		return {
			id: card.id,
			balance: card.balance,
			number: cardInfo.numberNice,
			bankName: cardInfo.bankName,
			theme: {
				bgColor: cardInfo.backgroundColor,
				textColor: cardInfo.textColor,
				bankLogoUrl: cardInfo.bankLogoSvg,
				brandLogoUrl: cardInfo.brandLogoSvg,
				bankSmLogoUrl: `/assets/${cardInfo.bankAlias}-history.svg`
			}
		};
	});
}

const mapStateToProps = state => {
	const cardsList = prepareCardsData(state.cards);
	const cardHistory = state.transactions.map(transaction => {
		const card = cardsList.find(card => card.id === transaction.cardId);
		return card ? Object.assign({}, transaction, { card }) : transaction;
	});

	return {
		rootCardId: state.rootCardId,
		cardsList,
		cardHistory
	};
};

const mapDispatchToProps = dispatch => ({
	onCardChange: rootCardId => dispatch(switchCard(rootCardId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
