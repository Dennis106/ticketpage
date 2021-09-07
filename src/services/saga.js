import { put, takeEvery, call, all } from 'redux-saga/effects';

// Import Actions
import {
  getTicketsFailed,
  getTicketsSucceed
} from './action';

// Import API
import * as ticketApi from './api';

export function* ticketSubscriber() {
  yield all([takeEvery('GET_TICKETS', getTickets)]);
}
export function* getTickets({ payload: { params } }) {
    try {
        const tickets = yield call(ticketApi.getTickets, params);
        yield put(getTicketsSucceed(tickets));
    } catch (error) {
        console.error(error);
        yield put(getTicketsFailed(error));
    }
}
  