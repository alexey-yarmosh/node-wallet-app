import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobilePaymentContract from './MobilePaymentContract';
import MobilePaymentSuccess from './MobilePaymentSuccess';

/**
 * Класс компонента MobilePayment
 */
class MobilePayment extends Component {
	/**
	 * Конструктор
	 * @param {Object} props свойства компонента MobilePayment
	 */
	constructor(props) {
		super(props);
		this.state = { stage: 'contract' };
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.rootCard.id !== nextProps.rootCard.id) {
			this.setState({
				stage: 'contract'
			});
		}
	}

	/**
	 * Обработка успешного платежа
	 * @param {Object} transaction данные о транзакции
	 */
	onPaymentSuccess(transaction) {
		this.setState({
			stage: 'success',
			transaction
		});
	}

	/**
	 * Повторить платеж
	 */
	repeatPayment() {
		this.setState({ stage: 'contract' });
	}

	/**
	 * Рендер компонента
	 *
	 * @override
	 * @returns {JSX}
	 */
	render() {
		const { rootCard } = this.props;

		if (this.state.stage === 'success') {
			return (
				<MobilePaymentSuccess
					transaction={this.state.transaction}
					repeatPayment={() => this.repeatPayment()}
				/>
			);
		}

		return (
			<MobilePaymentContract
				rootCard={rootCard}
				onPaymentSuccess={transaction => this.onPaymentSuccess(transaction)}
			/>
		);
	}
}

MobilePayment.propTypes = {
	rootCard: PropTypes.shape({
		id: PropTypes.number,
		theme: PropTypes.object
	}).isRequired
};

export default MobilePayment;
