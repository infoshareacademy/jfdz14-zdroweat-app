import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItems from './MenuItems'

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import { NavLink } from "react-router-dom";


const entries = [
    { 
        name: 'Strona Główna',
        icon: MenuIcon,
        url: "/"
    },
    { 
        name: 'ZdrowEatowe Przepisy',
        icon: MenuIcon,
        url: "/"
    },
    { 
        name: 'ZdrowEat w Liczbach',
        icon: MenuIcon,
        url: "/DashboardWrapper"
    },
    { 
        name: 'Nasi Fani',
        icon: MenuIcon,
        url: "/"
    }
]

const aboutUs = [
    { 
        text: 'O nas',
        index: 1,
        url: "/"
    },
    { 
        text: 'Kontakt',
        index: 2,
        url: "/"
    }
]

export default function MenuList() {
    return (
        <React.Fragment>
        <Divider />
        <List>
            {entries.map((item) => (
                <MenuItems item = {item} />
            ))}
        </List>
        <Divider />
        <List>
            {aboutUs.map((item) => (
            <ListItem button key={item.text}>
                <ListItemIcon>{item.index % 2 === 0 ? <FaceOutlinedIcon /> : <MailOutlineIcon />}</ListItemIcon>
                <NavLink exact activeClassName="active-nav" to="/DashboardWrapper">
                    {item.text}
                </NavLink> 
            </ListItem>
            ))}
        </List>
        </React.Fragment>
    )
}