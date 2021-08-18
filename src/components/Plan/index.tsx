import React from 'react';
import { Container } from './styles';
import musicIcon from '../../assets/icon-music.svg';

interface PlanProps {
  plan: {
    type: string;
    price: number;
  }
}

const Plan = ({ plan }: PlanProps): JSX.Element => {

  return (
    <Container>
      <img src={musicIcon} alt="music icon" />

      <div>
        <h4>{plan.type.charAt(0).toUpperCase()+plan.type.slice(1)} Plan</h4>
        <span>
          {new Intl.NumberFormat('in-US', {
            style: 'currency',  
            currency: 'USD',
          }).format(plan.price)}
          /
          {plan.type === 'annual' ? 'year' : 'month'}
        </span>
      </div>

      <a href="/">change</a>
    </Container>
  )
}

export default Plan;