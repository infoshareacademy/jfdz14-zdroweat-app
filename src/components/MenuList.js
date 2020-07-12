import React from 'react';
import MenuItems from './MenuItems'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import { NavLink } from "react-router-dom";


const entries = [
    { 
        name: 'Strona Główna',
        icon: HomeIcon,
        url: "/"
    },
    { 
        name: 'ZdrowEatowe Przepisy',
        icon: EcoOutlinedIcon,
        url: "/"
    },
    { 
        name: 'ZdrowEat w Liczbach',
        icon: TrendingUpOutlinedIcon,
        url: "/DashboardWrapper"
    },
    { 
        name: 'Nasi Fani',
        icon: FavoriteBorderOutlinedIcon,
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
                <ListItemIcon>{item.index % 2 === 0 ? <FaceOutlinedIcon fontSize = "large" /> : <MailOutlineIcon fontSize = "large" />}</ListItemIcon>
                <NavLink exact activeClassName="active-nav" to="/DashboardWrapper">
                    {item.text}
                </NavLink> 
            </ListItem>
            ))}
        </List>
        </React.Fragment>
    )
}