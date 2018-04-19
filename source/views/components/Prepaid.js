import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { prepareCardsData } from './../utils';
import PrepaidContract from './PrepaidContract';
import PrepaidSuccess from './PrepaidSuccess';

class Prepaid extends Component {
	constructor(props) {
		super(props);

		this.state = { stage: 'contract' };
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.rootCardId !== nextProps.rootCardId) {
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

	render() {
		const { transaction, stage } = this.state;
		const { rootCardId, inactiveCardsList } = this.props;

		if (stage === 'success') {
			return (
				<PrepaidSuccess transaction={transaction} repeatPayment={() => this.repeatPayment()} />
			);
		}

		return (
			<PrepaidContract
				rootCardId={rootCardId}
				inactiveCardsList={inactiveCardsList}
				onPaymentSuccess={transaction => this.onPaymentSuccess(transaction)}
			/>
		);
	}
}

Prepaid.propTypes = {
	rootCardId: PropTypes.number.isRequired,
	inactiveCardsList: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
	rootCardId: state.rootCardId,
	inactiveCardsList: prepareCardsData(state.cards.filter(card => card.id !== state.rootCardId))
});

export default connect(
	mapStateToProps
)(Prepaid);
