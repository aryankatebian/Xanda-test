import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Total extends React.Component {
  constructor(props) {
    super(props);
  }
  renderTotal(e) {
    let newTotal = 0;
    if (e.length) {
      e.map(game => (newTotal += game.price));
      return newTotal;
    } else {
      return 0;
    }
  }

  render() {
    return (
      <div className='total'>
        <h2>Total</h2>
        <h3>{this.renderTotal(this.props.basket)}$</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  basket: state.basket
});
Total.propTypes = {
  basket: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
export default connect(mapStateToProps)(Total);
