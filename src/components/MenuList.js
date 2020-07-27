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
import GroupIcon from '@material-ui/icons/Group';
import { NavLink } from "react-router-dom";


const entries = [
    {
        name: 'Strona Główna',
        icon: HomeIcon,
        url: "/"
    },
    {
        name: 'ZdrowEat w Liczbach',
        icon: TrendingUpOutlinedIcon,
        url: "/zdroweat-w-liczbach"
    },
    {
        name: 'Nasi Fani',
        icon: GroupIcon,
        url: "/nasi-fani"
    },
    {
        name: 'Twoje ulubione przepisy',
        icon: FavoriteBorderOutlinedIcon,
        url: "/lista-ulubionych"
    }
]

// const aboutUs = [
//     {
//         text: 'O nas',
//         index: 1,
//         url: "/Home"
//     },
//     {
//         text: 'Kontakt',
//         index: 2,
//         url: "/"
//     }
// ]

export default function MenuList() {
    return (
        <React.Fragment>
            <Divider />
            <List>
                {entries.map((item) => (
                    <MenuItems item={item} />
                ))}
            </List>
            {/* <Divider /> */}
            {/* poniższy kod może być wykorzystany w przyszłości przy ewentualnym dodaniu kontaktu etc */}
            {/* <List>
                {aboutUs.map((item) => (
                    <ListItem button key={item.text}>
                        <NavLink exact activeClassName="active-nav" to={item.url}>
                            <ListItemIcon>{item.index % 2 === 0 ? <FaceOutlinedIcon fontSize="large" /> : <MailOutlineIcon fontSize="large" />}</ListItemIcon>
                            {item.text}
                        </NavLink>
                    </ListItem>
                ))}
            </List> */}
        </React.Fragment>
    )
}