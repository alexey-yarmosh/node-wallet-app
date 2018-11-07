import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import MobilePaymentContract from './MobilePaymentContract'
import MobilePaymentSuccess from './MobilePaymentSuccess'

class MobilePayment extends PureComponent {
	static getDerivedStateFromProps(nextProps, prevState) {
		return (prevState.rootCard !== nextProps.rootCard) ? { stage: 'contract' } : null
	}

	constructor(props) {
		super(props)
		this.state = {
			stage: 'contract',
			rootCard: props.rootCard
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
		})
	}

	/**
	 * Повторить платеж
	 */
	repeatPayment() {
		this.setState({ stage: 'contract' })
	}

	/**
	 * Рендер компонента
	 *
	 * @override
	 * @returns {JSX}
	 */
	render() {
		const { rootCard } = this.props

		if (this.state.stage === 'success') {
			return (
				<MobilePaymentSuccess
					transaction={this.state.transaction}
					repeatPayment={() => this.repeatPayment()}
				/>
			)
		}

		return (
			<MobilePaymentContract
				rootCard={rootCard}
				onPaymentSuccess={transaction => this.onPaymentSuccess(transaction)}
			/>
		)
	}
}

MobilePayment.propTypes = {
	rootCard: PropTypes.shape({
		id: PropTypes.number,
		theme: PropTypes.object
	}).isRequired
}

export default MobilePayment
