import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { prepareCardsData } from './../utils';
import { changePrepaidId, card2CardSubmit, changePrepaidStatus } from '../actions';
import PrepaidContract from './PrepaidContract';
import PrepaidSuccess from './PrepaidSuccess';

class Prepaid extends Component {
	render() {
		const { rootCardId, cardsList, status, onCardClick, prepaidCardId, onSubmitForm, repeatPayment, lastTransaction } = this.props;

		if (status === 'success') {
			return (
				<PrepaidSuccess transaction={lastTransaction} repeatPayment={() => repeatPayment()} />
			);
		}

		return (
			<PrepaidContract
				rootCardId={rootCardId}
				prepaidCardId={prepaidCardId}
				cardsList={cardsList}
				onCardClick={onCardClick}
				onSubmitForm={onSubmitForm}
				onPaymentSuccess={transaction => this.onPaymentSuccess(transaction)}
			/>
		);
	}
}

Prepaid.propTypes = {
	rootCardId: PropTypes.number.isRequired,
	prepaidCardId: PropTypes.number.isRequired,
	status: PropTypes.string.isRequired,
	cardsList: PropTypes.arrayOf(PropTypes.object).isRequired,
	onCardClick: PropTypes.func.isRequired,
	onSubmitForm: PropTypes.func.isRequired,
	repeatPayment: PropTypes.func.isRequired,
	lastTransaction: PropTypes.object
};

const mapStateToProps = state => ({
	rootCardId: state.rootCardId,
	prepaidCardId: state.prepaidData.id,
	status: state.prepaidData.status,
	cardsList: prepareCardsData(state.cards),
	lastTransaction: state.prepaidData.lastTransaction
});

const mapDispatchToProps = dispatch => ({
	onCardClick: cardId => dispatch(changePrepaidId(cardId)),
	onSubmitForm: data => dispatch(card2CardSubmit(data)),
	repeatPayment: () => dispatch(changePrepaidStatus('contract'))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Prepaid);
