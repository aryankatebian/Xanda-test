import React, { Component, Fragment } from 'react';
import Telephone from '../../../assets/telephone.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Flag from '../../../assets/flag.png';
import '../../../sass/NavBar.scss';

import basket from '../../../assets/shopping-cart.png';

//actions
import { toggleBasket } from '../../actions/basket';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  handleToggle() {
    this.props.toggleBasket();
  }
  render() {
    return (
      <Fragment>
        <div className='NavBar'>
          <div>
            <img src={Telephone} className='icon' alt='telephone'></img>
            <p>1337 1337 1337</p>
          </div>
          <div>
            <img src={Flag} className='icon' alt='flag'></img>
            <p>Try another Castle</p>
          </div>
          <div>
            <a onClick={e => this.handleToggle()}>
              <img src={basket} className='shopping-card' alt='shopping-cart' />
              {this.props.basket.length > 0 && (
                <p className='basket-length'>{this.props.basket.length}</p>
              )}
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  basket: state.basket
});

NavBar.propTypes = {
  basket: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
export default connect(mapStateToProps, { toggleBasket })(NavBar);
