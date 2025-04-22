import React from 'react';
import Link from 'next/link';

import './GameCard.css';

interface GameCardInterface {
  title: string;
  game: string;
  img: string;
  ready: boolean;
}

const GamesSelection = ({ title, game, img, ready }: GameCardInterface) => {
  return (
  <div className='game'>
    <div className='game__bck' style={{ backgroundImage: `url(${img})` }}>
      <h3 className='game__title'>{title}</h3>
    </div>
    <div className='game__cta__box'>
      {ready ? (
        <Link href={'/' + game} className='game__cta'>
          NEW GAME
        </Link>
      ) : (
        <h4 className='game__soon'>COMING SOON</h4>
      )}
    </div>
  </div>
)};

export default GamesSelection;
