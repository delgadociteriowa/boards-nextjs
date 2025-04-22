import React from 'react';
import './GamesSelection.css';
import GameCard from '../GameCard/GameCard';
import GameChessImg from '../../assets/games-chess.png';
import GameCheckersImg from '../../assets/games-checkers.png';
import GameGoImg from '../../assets/games-go.png';

interface GamesSelectionInterface {
  isPage: Boolean;
}

const GamesSelection = ({ isPage }: GamesSelectionInterface) => (
  <section className={`games ${isPage ? 'games__page' : ''}`}>
      <div className='games__container'>
        <h2 className='games__title'>Select a game</h2>
        <div className='games__items'>
        <GameCard
            title={'CHESS'}
            game={'chess'}
            img={GameChessImg.src}
            ready={true}
          />
          <GameCard
            title={'CHECKERS'}
            game={''}
            img={GameCheckersImg.src}
            ready={false}
          />
          <GameCard
            title={'GO'}
            game={''}
            img={GameGoImg.src}
            ready={false}
          />
        </div>
      </div>
    </section>
);

export default GamesSelection;
