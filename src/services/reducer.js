import { handleActions } from 'redux-actions';

import {
  getTickets,
  getTicketsFailed,
  getTicketsSucceed,
  setCurrentTicket
} from './action';

const defaultState = {
  tickets: [],
  currentTicket: null,
  error: null,
  loading: false,
  message: '',
  success: false
};

const reducer = handleActions(
  {
    [getTickets](state) {
      return {
        ...state,
        error: null,
        loading: true,
        message: 'Getting tickets listing...'
      };
    },
    [getTicketsSucceed](state,{payload: tickets}) {
        return {
            ...state,
            tickets: tickets,
            currentTicket: (tickets.length > 0) ? tickets[0] : null,
            error: null,
            loading: false,
            message: 'Success'
        };
    },
    [getTicketsFailed](state,{payload: error}) {
        return {
            ...state,
            tickets: [],
            currentTicket: null,
            error: error,
            loading: false,
            message: 'Error!'
        };
    },
    [setCurrentTicket](state, {payload: ticket}) {
        return {
            ...state,
            currentTicket: ticket,
            error: null,
            loading: false,
            message: ''
        };
    }
  },
  defaultState
);

export default reducer;