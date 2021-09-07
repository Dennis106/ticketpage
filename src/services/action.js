import { createActions } from 'redux-actions';

const {
  getTickets,
  getTicketsSucceed,
  getTicketsFailed,
  setCurrentTicket
} = createActions({
  GET_TICKETS: (params) => ({params}),
  GET_TICKETS_SUCCEED: (tickets) => (tickets),
  GET_TICKETS_FAILED: (error) => ({error}),
  SET_CURRENT_TICKET: (ticket) => (ticket)
});
export {
    getTickets,
    getTicketsSucceed,
    getTicketsFailed,
    setCurrentTicket
};