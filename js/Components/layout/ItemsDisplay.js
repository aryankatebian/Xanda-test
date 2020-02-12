import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import coin from '../../../assets/coins.png';
import controller from '../../../assets/controller.png';
import '../../../sass/items.scss';

//actions
import { addToBasket } from '../../actions/basket';

const Item = ({ games, addToBasket }) => {
  return (
    <div className='items-wrapper'>
      <div className='items-component'>
        {games.map(game => {
          return (
            <div
              className={game.pending ? 'item disable' : 'item'}
              key={game.id}
            >
              <img src={game.image} className='game-image' alt='gameImg'></img>
              <div className='game-info'>
                <h2>{game.title}</h2>
                <p className='item-p'>{game.description}</p>
                <div className='game-price'>
                  <img src={coin} alt='coin' />
                  <p>{`${game.price} $`}</p>
                </div>

                <button
                  className='add-button'
                  onClick={e => addToBasket(game)}
                  disabled={game.pending ? true : false}
                >
                  Add to basket
                </button>
              </div>
              <img
                src={controller}
                className='controller-image'
                alt='controllerImg'
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  basket: state.basket,
  games: state.items.games
});

Item.propTypes = {
  basket: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  addToBasket: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { addToBasket })(Item);
