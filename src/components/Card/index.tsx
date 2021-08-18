import React from 'react';
import { Container } from './styles';
import headerImage from '../../assets/illustration-hero.svg';
import Plan from '../Plan/index';

const Card = (): JSX.Element => {
  const plan = {
    type: "annual",
    price: 100
  }

  return (
    <Container>
      <header>
        <img src={headerImage} alt="dancing girl" />
      </header>

      <main>
        <div>
          <h2>Order Summary</h2>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        </div>

        <Plan plan={plan}/>

        <div className="buttons">
          <a href="/">Proceed to Payment</a>
          <a href="/">Cancel Order</a>
        </div>
      </main>
    </Container>
  )
}

export default Card;