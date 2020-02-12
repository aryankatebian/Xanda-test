import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../sass/basket.scss';
import coins from '../../../assets/coins.png';
import bin from '../../../assets/bin.png';
// actions
import { removeFromBasket } from '../../actions/basket';

const Basket = ({ basket, removeFromBasket }) => {
  return (
    <Fragment>
      {basket.length > 0 ? (
        basket.map(game => (
          <div className='item-container' key={game.id}>
            <img src={game.image} className='basket-game-image' alt='game' />
            <div>
              <h3 className='game-title'>{game.title}</h3>
              <div className='game-price'>
                <img src={coins} className='coins-icon' alt='coins' />
                <p>{game.price}$</p>
                <img
                  src={bin}
                  alt='bin'
                  className='bin-icon'
                  onClick={e => removeFromBasket(game)}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            textAlign: 'center',
            fontSize: '1rem',
            padding: '200px 0',
            color: 'gray'
          }}
        >
          No Items
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  basket: state.basket
});
Basket.propTypes = {
  basket: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  removeFromBasket: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { removeFromBasket })(Basket);
