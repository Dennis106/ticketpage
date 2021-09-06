import React from 'react';
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

export default function Ticket(props) {
    const ticket = props.data

    return (
        <ListItem className={(props.selected === true ? ' bg-light' : '')} onClick={() => props.handleSelect(ticket)}>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={ticket.title}
                secondary={
                    ticket.first_name + ' ' + ticket.last_name
                }
            />
        </ListItem>
    )
}