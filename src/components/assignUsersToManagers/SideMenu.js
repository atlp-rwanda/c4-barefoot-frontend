import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import StarBorder from '@material-ui/icons/StarBorder';
import { Container, Grid, Avatar, Typography, Divider } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import MailIcon from '@material-ui/icons/Mail';
import BusinessIcon from '@material-ui/icons/Business';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
  activeMenuItem: {
      backgroundColor: '#43A0D6',
  }
}));

const managerLinks = [
    {title: 'Home', path: '/' },
    {title: 'My Travel', path: '/' },
    {title: 'Report requests', path: '/' },
    {title: 'Book accommodation', path: '/' },
    {title: 'Users', path: '/' }
]

const SideMenu = () => {
    const classes = useStyles();
    const [{open1, open2}, setState] = React.useState({open1: false, open2: false});

    const handleClick1 = () => {
        setState({open1: !open1, open2});
    };
    const handleClick2 = () => {
        setState({open1, open2: !open2});
    };
    let photo = '';
    photo = 'https://cdn.filestackcontent.com/Nvdf2SQRFSR8adGrueTw';
    return (
        <Container style={{minWidth: 270, maxWidth: 270, backgroundColor: '#EAF4FB', padding: 'unset'}}>
            <Grid container alignItems='center'>
                <Avatar 
                    style={{ backgroundColor: '#ABD5ED', height: 80, width: 80, margin: 5}}
                    alt="Manager loggedin" 
                    name='profile_picture' 
                    margin='normal'
                    src={photo ? photo : 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg' }
                />
                <Typography variant='body1'> Manager LoggedIn</Typography>
            </Grid>
            <Divider />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                style={{backgroundColor: 'inherit'}}
                className={classes.root}
                >
            <ListItem button>
                <ListItemIcon>
                <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleClick1}>
                <ListItemIcon>
                    <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="My Travel Requests" />
                {open1 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Create Travel Request" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="List of Travel Request" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick2}>
                <ListItemIcon>
                <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary="Report requests" />
                {open2 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Pending" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Approved" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Rejected & Canceled" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Done" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button>
                <ListItemIcon>
                <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Book Accomodation" />
            </ListItem>
            <ListItem button className={classes.activeMenuItem}>
                <ListItemIcon>
                    <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Chat" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Trash" />
            </ListItem>
            
            </List>
        </Container>
    )
};

export default SideMenu;
