import React from 'react';
import UserDetails from './UserDetails';
import ButtonSection from './ButtonSection';
import './Card.css';

function Card() {
  return (
    <div className="card">
      <UserDetails />
      <ButtonSection />
    </div>
  );
}

export default Card;
