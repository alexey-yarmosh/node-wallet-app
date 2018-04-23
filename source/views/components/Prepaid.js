import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { prepareCardsData } from './../utils';
import { changePrepaidId } from '../actions';
import PrepaidContract from './PrepaidContract';
import PrepaidSuccess from './PrepaidSuccess';

class Prepaid extends Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		return (prevState.rootCardId !== nextProps.rootCardId) ? { status: 'contract' } : null;
	}

	constructor(props) {
		super(props);

		this.state = {
			status: 'contract'
		};
	}

	onPaymentSuccess(transaction) {
		this.setState({
			status: 'success',
			transaction
		});
	}

	repeatPayment() {
		this.setState({ status: 'contract' });
	}

	render() {
		const { transaction, status } = this.state;
		const { rootCardId, cardsList, onCardClick, prepaidCardId } = this.props;

		if (status === 'success') {
			return (
				<PrepaidSuccess transaction={transaction} repeatPayment={() => this.repeatPayment()} />
			);
		}

		return (
			<PrepaidContract
				rootCardId={rootCardId}
				prepaidCardId={prepaidCardId}
				cardsList={cardsList}
				onCardClick={onCardClick}
				onPaymentSuccess={transaction => this.onPaymentSuccess(transaction)}
			/>
		);
	}
}

Prepaid.propTypes = {
	rootCardId: PropTypes.number.isRequired,
	prepaidCardId: PropTypes.number.isRequired,
	cardsList: PropTypes.arrayOf(PropTypes.object).isRequired,
	onCardClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	rootCardId: state.rootCardId,
	prepaidCardId: state.prepaidData.id,
	cardsList: prepareCardsData(state.cards)
});

const mapDispatchToProps = dispatch => ({
	onCardClick: cardId => dispatch(changePrepaidId(cardId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Prepaid);
