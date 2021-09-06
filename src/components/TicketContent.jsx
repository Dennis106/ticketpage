import React from 'react';

export default function Ticket(props) {
    const ticket = props.data

    return (
        <div className='px-4 py-2'>
            <h2>{ticket.title}</h2>
            <h4>{ticket.first_name + ' ' + ticket.last_name}</h4>
            <div>
                <img src={ticket.url} className='float-start me-2 w-25' />
                <p>{ticket.content}</p>
            </div>
        </div>
    )
}