import React from 'react';

import { 
	History,
	Prepaid,
	MobilePayment,
  Withdraw
} from '../components';

const Workspace = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 970px;
	padding: 15px;
`;


const Home = () => (
  <Workspace>
    <History />
    <Prepaid
      inactiveCardsList={inactiveCardsList}
    />
    <MobilePayment rootCard={rootCard} />
    <Withdraw
      rootCardId={rootCardId}
      inactiveCardsList={inactiveCardsList}
    />
  </Workspace>
)

export default Home;
