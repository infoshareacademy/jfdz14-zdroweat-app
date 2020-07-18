import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NavLink } from "react-router-dom";


export default function MenuItems({item}) {
    const Icon = item.icon
    return (
        <ListItem button key={item.name}>   
            <NavLink exact activeClassName="active-nav" to={item.url} >
                <ListItemIcon>
                    <Icon fontSize="large" />
                </ListItemIcon>
                {item.name}
            </NavLink>
        </ListItem>
    )
}   