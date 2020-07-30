import React from 'react';
import MenuItems from './MenuItems'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add'


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
    },
    {
        name: 'Dodaj przepis',
        icon: AddIcon,
        url: "/Formularz"
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
                    <MenuItems key={item.url} item={item} />
                ))}
            </List>
            {/* <Divider /> */}
            {/* poniższy kod może być wykorzystany w przyszłości przy ewentualnym dodaniu kontaktu etc. Aby zadziałał należy zainportować komponenty w kodzie*/}
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