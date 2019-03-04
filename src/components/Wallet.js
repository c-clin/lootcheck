import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdrawal } from '../actions/balance';

export class Wallet extends Component {
  state = {
    balance: undefined
  };
  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input
          className="input-wallet"
          onChange={e => this.setState({ balance: parseInt(e.target.value) })}
        />
        <button
          className="btn-deposit"
          onClick={() => this.props.deposit(this.state.balance)}
        >
          Deposit
        </button>
        <button
          className="btn-withdrawal"
          onClick={() => this.props.withdrawal(this.state.balance)}
        >
          Withdrawal
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance
  };
};

export default connect(
  mapStateToProps,
  { deposit, withdrawal }
)(Wallet);
