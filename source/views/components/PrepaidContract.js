import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import axios from 'axios';

import { Island, Title, Button, Input } from './';

const PrepaidLayout = styled(Island)`
	width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #353536;
`;

const PrepaidTitle = styled(Title)`
	color: #fff;
`;

const PrepaidItems = styled.div`
	width: 285px;
	margin-bottom: 40px;
`;

const PrepaidItem = styled.div`
	height: 65px;
	display: flex;
	align-items: center;
	border-radius: 3px;
	cursor: pointer;
	background-color: ${({ selected, bgColor }) => (selected ? bgColor : 'rgba(0, 0, 0, 0.05)')};
`;

const PrepaidItemIcon = styled.div`
	width: 42px;
	height: 42px;
	margin: 18px;
	border-radius: 21px;
	background-image: url(${({ bankSmLogoUrl }) => bankSmLogoUrl});
	background-size: contain;
	background-repeat: no-repeat;
	filter: ${({ selected }) => (selected ? 'none' : 'grayscale(100%)')};
`;

const PrepaidItemTitle = styled.div`
	font-size: 13px;
	color: ${({ selected, textColor }) => (selected ? textColor : 'rgba(255, 255, 255, 0.6)')};
`;

const PrepaidItemDescription = styled.div`
	color: ${({ selected, textColor }) => (selected ? textColor : 'rgba(255, 255, 255, 0.4)')};
`;

const InputField = styled.div`
	margin: 20px 0;
	position: relative;
`;

const SumInput = styled(Input)`
	max-width: 200px;
	padding-right: 20px;
	background-color: rgba(0, 0, 0, 0.08);
	color: #fff;
`;

const Currency = styled.span`
	font-size: 12px;
	position: absolute;
	right: 10;
	top: 8px;
	color: #fff;
`;

class PrepaidContract extends Component {
	static getDerivedStateFromProps(nextProps) {
		return {
			selectedCardId: nextProps.inactiveCardsList[0].id,
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			selectedCardId: props.inactiveCardsList[0].id,
			sum: ''
		};
	}

	/**
	 * Изменения активной карты
	 * @param {Number} selectedCardId id активной карты
	 */
	onCardChange(selectedCardId) {
		this.setState({ selectedCardId });
	}

	/**
	 * Обработка изменения значения в input
	 * @param {Event} event событие изменения значения input
	 */
	onChangeInputValue(event) {
		if (!event) {
			return;
		}

		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	}

	/**
	 * Отправка формы
	 * @param {Event} event событие отправки формы
	 */
	onSubmitForm(event) {
		if (event) {
			event.preventDefault();
		}

		const { sum, selectedCardId } = this.state;
		const { rootCardId, inactiveCardsList } = this.props;

		const isNumber = !isNaN(parseFloat(sum)) && isFinite(sum);
		if (!isNumber || sum <= 0) {
			return;
		}

		axios.post(`/cards/${selectedCardId}/card2CardPay`, { sum, targetCardId: rootCardId })
			.then(() => {
				this.setState({ sum: '' });
				this.props.onPaymentSuccess({
					sum,
					number: inactiveCardsList.find(card => card.id === selectedCardId).number
				});
			});
	}

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		const { inactiveCardsList } = this.props;

		const { selectedCardId } = this.state;
		const selectedCard = inactiveCardsList.find(card => card.id === selectedCardId);

		return (
			<form onSubmit={event => this.onSubmitForm(event)}>
				<PrepaidLayout>
					<PrepaidTitle>Пополнить эту карту</PrepaidTitle>

					<PrepaidItems>
						{
							inactiveCardsList.map(card => (
								<PrepaidItem
									bgColor={card.theme.bgColor}
									key={card.id}
									onClick={() => this.onCardChange(card.id)}
									selected={selectedCardId === card.id}
								>
									<PrepaidItemIcon
										bankSmLogoUrl={card.theme.bankSmLogoUrl}
										selected={selectedCardId === card.id}
									/>
									<PrepaidItemTitle
										textColor={card.theme.textColor}
										selected={selectedCardId === card.id}
									>
										C карты
										<PrepaidItemDescription
											textColor={card.theme.textColor}
											selected={selectedCardId === card.id}
										>
											{card.number}
										</PrepaidItemDescription>
									</PrepaidItemTitle>
								</PrepaidItem>
							))
						}
					</PrepaidItems>

					<InputField>
						<SumInput
							name='sum'
							value={this.state.sum}
							onChange={event => this.onChangeInputValue(event)}
						/>
						<Currency>$</Currency>
					</InputField>
					<Button
						type='submit'
						bgColor={selectedCard.theme.bgColor}
						textColor={selectedCard.theme.textColor}
					>
						Пополнить
					</Button>
				</PrepaidLayout>
			</form>
		);
	}
}

PrepaidContract.propTypes = {
	rootCardId: PropTypes.number.isRequired,
	inactiveCardsList: PropTypes.arrayOf(PropTypes.object).isRequired,
	onPaymentSuccess: PropTypes.func.isRequired
};

export default PrepaidContract;
