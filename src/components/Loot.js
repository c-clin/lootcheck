import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount = () => {
    this.props.fetchBitcoin();
  };

  render() {
    return <h3>Bitcoin Balance</h3>;
  }
}

const mapStateToProps = state => {
  return {
    bitcoin: state.bitcoin
  };
};

export default connect(
  mapStateToProps,
  fetchBitcoin
)(Loot);
