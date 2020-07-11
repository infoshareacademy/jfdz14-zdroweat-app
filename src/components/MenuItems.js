import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { NavLink } from "react-router-dom";


export default function MenuItems({item}) {
    const Icon = item.icon
    return (
        <ListItem button key={item.name}>
            <ListItemIcon><Icon /></ListItemIcon>
            <NavLink exact activeClassName="active-nav" to={item.url} >
                {item.name}
            </NavLink>
        </ListItem>
    )
}   