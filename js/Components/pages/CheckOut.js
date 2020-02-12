import React from 'react';
import Total from '../layout/CalculateTotal';
import { Link } from 'react-router-dom';
import Basket from '../layout/Basket';

const CheckOut = () => {
  return (
    <div className='basket-component'>
      <div className='checkout-wrapper'>
        <Link to='/'>
          <button
            className='continue-button'
            style={{ width: '150px', marginTop: '40px' }}
          >
            Go Back
          </button>
        </Link>
        <Basket />
        <Total />
      </div>
    </div>
  );
};

export default CheckOut;
