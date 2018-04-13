import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Card } from './';

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: #242424;
	padding: 20px;
`;

const Logo = styled.div`
	width: 147px;
	height: 28px;
	margin-bottom: 55px;
	background-image: url('/assets/yamoney-logo.svg');
`;

const Edit = styled.div`
	position: absolute;
	top: 25px;
	right: 20px;
	width: 18px;
	height: 18px;
	background-image: url('/assets/cards-edit.svg');
`;

const CardsList = styled.div`
	flex: 1;
`;

const Footer = styled.footer`
	color: rgba(255, 255, 255, 0.2);
	font-size: 15px;
`;

const CardsBar = ({ rootCardId, cardsList, onCardChange }) => {
	const onCardClick = rootCardId => {
		onCardChange && onCardChange(rootCardId);
	};
	return (
		<Layout>
			<Logo />
			<Edit />
			<CardsList>
				{cardsList.map((card, index) => (
					<Card
						key={index}
						data={card}
						active={card.id === rootCardId}
						onClick={() => onCardClick(card.id)}
					/>
				))}
				<Card type='new' />
			</CardsList>
			<Footer>Yamoney Node School</Footer>
		</Layout>
	);
};

CardsBar.propTypes = {
	cardsList: PropTypes.array.isRequired,
	rootCardId: PropTypes.number.isRequired,
	onCardChange: PropTypes.func.isRequired
};

export default CardsBar;
