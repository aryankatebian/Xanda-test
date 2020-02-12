import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Flag from '../../../assets/flag.png';
import basketIcon from '../../../assets/shopping-cart.png';
import Telephone from '../../../assets/telephone.png';
import '../../../sass/NavBar.scss';

//actions
import { toggleBasket } from '../../actions/basket';

const NavBar = ({ toggleBasket, basket }) => {
  return (
    <div className='navbar-wrapper'>
      <div>
        <img src={Telephone} className='navbar-icon' alt='telephone'></img>
        <p>1337 1337 1337</p>
      </div>
      <div>
        <img src={Flag} className='navbar-icon' alt='flag'></img>
        <p>Try another Castle</p>
      </div>
      <div>
        <a onClick={e => toggleBasket()}>
          <img
            src={basketIcon}
            className='shopping-card-icon'
            alt='shopping-cart'
          />
          {basket.length > 0 && (
            <p className='basket-length-icon'>{basket.length}</p>
          )}
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  basket: state.basket
});

NavBar.propTypes = {
  basket: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
export default connect(mapStateToProps, { toggleBasket })(NavBar);
