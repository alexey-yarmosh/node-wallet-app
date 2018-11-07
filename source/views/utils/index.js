import CardInfo from 'card-info'
import axios from 'axios'

/**
 * Подготавливает данные карт
 *
 * @param {Object} cardsData данные карт
 * @returns {Object[]}
 */
export function prepareCardsData(cardsData) {
	return cardsData.map(card => {
		const cardInfo = new CardInfo(card.cardNumber, {
			banksLogosPath: '/assets/',
			brandsLogosPath: '/assets/'
		})

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
		}
	})
}

export function card2CardSubmit({ fromId, toId, sum }) {
	return axios.post(`/cards/${fromId}/card2CardPay`, { sum, toId })
		.then(res => res.data)
}
