import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import { Grid, List, Divider, Paper } from '@material-ui/core';
import Ticket from './Ticket'
import TicketContent from './TicketContent'

export default function TicketList() {
    const [tickets, setTickets] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [selectedTicket, setSelectedTicket] = useState(null);

    useEffect(() => {
        fetch("https://test.com/ticketlist", {
            method: 'POST',
            body: JSON.stringify({ search: searchKey })
        })
            .then(response => response.json())
            .then(result => {
                setTickets(result);
                if (result.length > 0) {
                    setSelectedTicket(result[0]);
                } else {
                    setSelectedTicket(null);
                }
            })
    }, [searchKey])

    const handleSelect = (ticket) => {
        setSelectedTicket(ticket);
    }

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
                                        <Ticket data={item} handleSelect={handleSelect} selected={selectedTicket === item} />
                                        {(index !== tickets.length - 1) ? <Divider variant='inset' /> : ''}
                                    </React.Fragment>
                                ))
                            }
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className='overflow-auto' style={{ height: 'calc( 100vh - 144px )' }}>
                        {selectedTicket ? <TicketContent data={selectedTicket} /> : ''}
                        </Paper>
                </Grid>
            </Grid>
        </div>
    );
}