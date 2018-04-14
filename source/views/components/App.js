import React, { Component } from 'react';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import PropTypes from 'prop-types';
import CardInfo from 'card-info';
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
	/**
	 * Конструктор
	 */
	constructor(props) {
		super(props);
		const cardsList = this.prepareCardsData(props.data.cards);
		const cardHistory = props.data.transactions.map(data => {
			const card = cardsList.find(card => card.id === data.cardId);
			return card ? Object.assign({}, data, { card }) : data;
		});

		this.state = {
			cardsList,
			cardHistory,
			rootCardId: cardsList[0].id
		};
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
	 * Подготавливает данные карт
	 *
	 * @param {Object} cardsData данные карт
	 * @returns {Object[]}
	 */
	prepareCardsData(cardsData) {
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

	/**
	 * Рендер компонента
	 *
	 * @override
	 * @returns {JSX}
	 */
	render() {
		const { cardsList, rootCardId, cardHistory } = this.state;
		const activeCard = cardsList.find(card => card.id === rootCardId);
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
					<Header activeCard={activeCard} />
					<Workspace>
						<Withdraw
							rootCardId={rootCardId}
							inactiveCardsList={inactiveCardsList}
						/>
						<History cardHistory={filteredHistory} />
						<Prepaid
							activeCard={activeCard}
							inactiveCardsList={inactiveCardsList}
						/>
						<MobilePayment activeCard={activeCard} />
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

export default App;
