import React, { Component } from 'react';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import PropTypes from 'prop-types';
import CardInfo from 'card-info';
import { connect } from 'react-redux';

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
class App extends Component {
	constructor(props) {
		super(props);
		const { data } = props;

		this.state = {
			cardsList: prepareCardsData(data.cards),
			cardHistory: data.transactions.map(transaction => {
				const card = data.cards.find(card => card.id === transaction.cardId);
				return card ? Object.assign({}, transaction, { card }) : transaction;
			}),
			rootCardId: data.cards[0].id
		}
	}
	/**
	 * Обработчик переключения карты
	 *
	 * @param {Number} activeCardIndex индекс выбранной карты
	 */
	onCardChange(rootCardId) {
		this.setState({ rootCardId });
	}

	/**
	 * Рендер компонента
	 *
	 * @override
	 * @returns {JSX}
	 */
	render() {
		const { cardsList, rootCardId, cardHistory } = this.state;
		const rootCard = cardsList.find(card => card.id === rootCardId);
		const inactiveCardsList = cardsList.filter(card => card.id !== rootCardId);
		const filteredHistory = cardHistory.filter(data => data.cardId === rootCardId);

		return (
			<Wallet>
				<CardsBar
					rootCardId={rootCardId}
					cardsList={cardsList}
					onCardChange={rootCardId => this.onCardChange(rootCardId)}
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
	}
}

App.propTypes = {
	data: PropTypes.shape({
		user: PropTypes.object,
		cards: PropTypes.array,
		transactions: PropTypes.array
	}),
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

// const mapStateToProps = state => ({
// 	cardsList: prepareCardsData(state.cards),
// 	cardHistory: state.transactions.map(transaction => {
// 		const card = state.cards.find(card => card.id === transaction.cardId);
// 		return card ? Object.assign({}, transaction, { card }) : transaction;
// 	}),
// 	rootCardId: state.cards[0].id
// });

// export default connect(
// 	mapStateToProps,
// 	() => ({})
// )(App);

export default App;
