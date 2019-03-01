import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, actions) => {
  let balance;

  switch (actions.type) {
    case constants.SET_BALANCE: {
      return actions.balance;
    }
    case constants.DEPOSIT: {
      return state + actions.deposit;
    }
    case constants.WITHDRAWAL: {
      return state - actions.withdrawal;
    }
    default: {
      return parseInt(read_cookie(BALANCE_COOKIE), 10 || state);
    }
  }
};

export default balance;
