import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Items from '../layout/ItemsDisplay';
import Basket from '../layout/Basket';
import Total from '../layout/Total';

const Landing = ({ basket, toggleBasket }) => {
  return (
    <div className='container'>
      <Items />
      {toggleBasket && (
        <div className='basket-component'>
          <h1>BASKET</h1>
          <div className='basket-items'>
            <Basket />
          </div>
          <div className='total-wrapper'>
            <Total />
            <Link to='/checkout'>
              <button
                className='continue-button'
                disabled={basket.length ? false : true}
              >
                continue
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  toggleBasket: state.toggleBasket,
  basket: state.basket
});

Landing.propTypes = {
  basket: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
export default connect(mapStateToProps)(Landing);
