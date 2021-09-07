import { handleActions } from 'redux-actions';

import {
  getTickets,
  getTicketsFailed,
  getTicketsSucceed
} from './action';

const defaultState = {
  tickets: [],
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
        message: 'Generating cities listing...'
      };
    },
    [getTicketsSucceed](state,{payload: tickets}) {
        return {
            ...state,
            tickets: tickets,
            error: null,
            loading: false,
            message: 'Success'
        };
    },
    [getTicketsFailed](state,{payload: error}) {
        return {
            ...state,
            tickets: [],
            error: error,
            loading: false,
            message: 'Error!'
        };
    }
  },
  defaultState
);

export default reducer;