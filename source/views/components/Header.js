import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Title, UserInfo } from './';

const HeaderLayout = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 74px;
	background: #fff;
	padding: 20px 30px;
	box-sizing: border-box;
	border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const Balance = styled(Title)`
	margin: 0;
`;

const BalanceSum = styled.span`
	font-weight: bold;
`;

const Header = ({ rootCard }) => (
	<HeaderLayout>
		<Balance>
			{`${rootCard.bankName}: `}
			<BalanceSum>{`${rootCard.balance} $`}</BalanceSum>
		</Balance>
		<UserInfo />
	</HeaderLayout>
);

Header.propTypes = {
	rootCard: PropTypes.shape({
		bankName: PropTypes.string.isRequired,
		balance: PropTypes.number.isRequired
	})
};

export default Header;
