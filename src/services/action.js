import { createActions } from 'redux-actions';

const {
  getTickets,
  getTicketsSucceed,
  getTicketsFailed
} = createActions({
  GET_TICKETS: (params) => ({params}),
  GET_TICKETS_SUCCEED: (tickets) => (tickets),
  GET_TICKETS_FAILED: (error) => ({error}),

});
export {
    getTickets,
    getTicketsSucceed,
    getTicketsFailed
};