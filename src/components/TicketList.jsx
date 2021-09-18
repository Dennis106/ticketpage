import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBox from './SearchBox';
import { Grid, List, Divider, Paper } from '@material-ui/core';
import Ticket from './Ticket'
import TicketContent from './TicketContent'
import { getTickets, setCurrentTicket } from '../services/action';

function TicketList(props) {
    const [searchKey, setSearchKey] = useState('');
    
    useEffect(() => {
        props.ticktActions.getTickets({
            search: searchKey
        })
    }, [searchKey])

    const handleSelect = (ticket) => {
        props.ticktActions.setCurrentTicket(ticket);
    }

    const { tickets, currentTicket } = props.ticketData;
    console.log(props)
    return (
        <div className='px-4 py-4'>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <SearchBox handleSearch={setSearchKey} />
                </Grid>
                <Grid item xs={4}>
                    <Paper className='overflow-auto' style={{ height: 'calc( 100vh - 144px )' }}>
                        <List className='py-0'>
                            {
                                tickets.map((item, index) => (
                                    <React.Fragment key={item.id} >
                                        <Ticket data={item} handleSelect={handleSelect} selected={currentTicket === item} />
                                        {(index !== tickets.length - 1) ? <Divider variant='inset' /> : ''}
                                    </React.Fragment>
                                ))
                            }
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className='overflow-auto' style={{ height: 'calc( 100vh - 144px )' }}>
                        {currentTicket ? <TicketContent data={currentTicket} /> : ''}
                        </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default connect(
    state => ({
        ticketData: {
          ...state
        }
      }),
    dispatch => ({
      ticktActions: bindActionCreators({ getTickets, setCurrentTicket }, dispatch)
    })
  )(TicketList);