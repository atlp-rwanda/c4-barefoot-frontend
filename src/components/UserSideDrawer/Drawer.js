import React, { useState } from 'react'
import { Menu, AccountCircle, ExpandLess, ExpandMore } from '@material-ui/icons'
import { makeStyles, IconButton, Drawer, Box, Avatar, Typography, Collapse, Divider, List,LinearProgress, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
// import {sideBarData} from "./sideBarData";
import { Link, useHistory } from 'react-router-dom';
import {getTripLocations} from '../../redux/actions/userTravelHistoryAction';
import {connect} from 'react-redux'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import GroupIcon from '@material-ui/icons/Group';
import CommuteIcon from '@material-ui/icons/Commute';
import CachedIcon from '@material-ui/icons/Cached';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneAllIcon from '@material-ui/icons/DoneAll';


 
const useStyles = makeStyles( theme =>({
  root: {
    background: '#EAF4FB'
  },  
  list: {
    width: 290,
  },
  menuIcon: {
    color: 'white'
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: 'black'
  },
  accountInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 80
  },
  paper: {
    backgroundColor: '#EAF4FB'
  },
  listIcons: {
    color: theme.palette.primary.main,
  },
  subList: {
    paddingLeft: theme.spacing(4),
    textDecoration: `none`,
    color: 'black'
  },
  nested: {
    paddingLeft: theme.spacing(4),
    textDecoration: `none`,
    color: 'black'
  },
}))
function DrawerComponent(props) {
    const classes = useStyles();
    const history = useHistory();
    const [openDrawer, setOpenDrawer] = useState(true);
    const [state, setState] = useState({left: false});
    const locations = props.locations
    const pending = props.pending

    React.useEffect(()=> {
      props.getTripLocations()
    }, [])
  
 const subs= Object.keys(locations).map(key=>( 
  {
  title: `${key}: ${locations[key]}`,
  icon: '',
  link: `/travel-history/${key.split(',')[0]}`
}))
    

     const sideBarData = [
      {
          title:"Dashboard",
          icon:<DashboardIcon />,
          link:"/home",
          subs: []
      },
        {
           title:"Accomodation",
          icon:<AddLocationIcon />,
          link:"/accomodation",
          subs: []
      },
      {
          title:"Travel requests",
          icon:<CommuteIcon />,
          link:"/travelRequests",
          subs: [
              {
                  title: 'Create Travel',
                  icon: <CachedIcon />,
                  link: "/travelReqests"
              },
              {
                  title: 'List of Travel Requests',
                  icon: <ThumbUpIcon />,
                  link: "/travelRequests",
                  subs: [
                      {
                          title: 'Pending',
                          icon: <CachedIcon />,
                          link: "/travelRequests"
                      },
                      {
                          title: 'Approved',
                          icon: <ThumbUpIcon />,
                          link: "/travelRequests/approved"
                      },
                      {
                          title: 'Canceled & Rejected',
                          icon: <CancelIcon />,
                          link: "/travelRequests/canceled"
                      },
                      {
                          title: 'Done',
                          icon: <DoneAllIcon />,
                          link: "/travelRequests/done"
                      },
                  ]
              },
          ]
      },
      {
          title:"Requester Reports",
          icon:<CommuteIcon />,
          link:"/managerTravel",
          subs: [
              {
                  title: 'Pending',
                  icon: <CachedIcon />,
                  link: "/managerTravel"
              },
              {
                  title: 'Approved',
                  icon: <ThumbUpIcon />,
                  link: "/managerTravel/approved"
              },
              {
                  title: 'Canceled & Rejected',
                  icon: <CancelIcon />,
                  link: "/managerTravel/canceled"
              },
              {
                  title: 'Done',
                  icon: <DoneAllIcon />,
                  link: "/managerTravel/done"
              },
          ]
      },
  
      {
          title:"Trip History",
          icon:<CommuteIcon />,
          link:"/travel-history",
          subs
      }
  ]
  
    const [drop, setDrop] = React.useState( sideBarData.map( link=>{
        return {
          item: link.title,
          open: false
        }
    })
    );

    const goTo = link => {history.push(link); console.log('Function called!');}

    const [collapse,setCollapse]= useState(false);
    const checkIsOpen= ( title =>{
      let isOpen= false;
      drop.forEach( link => {
        if( link.item === title){
          isOpen= link.open
        }
      })
      return isOpen;
    });
    // checkIsOpen('Travel requests');
    const handleCollapse= (item)=>{
      const newState= drop.map( (link)=>{
        if(link.item === item){
          return {
            item: link.item,
            open: !link.open
          }
        }
        else{
          return {
            item: link.item,
            open: false
          }
        }
      });
      setDrop(newState);
      // setCollapse(!collapse);
    }
    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ [anchor]: open });
  };
    const drawSideBar = (anchor) => (
        <>
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        </div>
        <Box className={classes.accountInfo}>
        <Avatar className={classes.paper}>
          <AccountCircle fontSize='large' className={classes.listIcons}/>
        </Avatar>
        <Typography>{localStorage.getItem('userProfile').username}</Typography>
      </Box>
      <Divider/>
      <List>
          {sideBarData.map(list => (
             list.subs.length === 0 ? (
              <Link to={list.link} key={list.title} className={classes.nested}>
                <ListItem button onClick={toggleDrawer('left', false)}>
                    <ListItemIcon className={classes.listIcons}>{list.icon}</ListItemIcon>
                    <ListItemText>
                        {list.title}
                    </ListItemText>
                </ListItem>
              </Link>
              )
               :
              (
                <Box key={list.title} onClick={()=> handleCollapse(list.title)}>
                <ListItem button >
                    <ListItemIcon className={classes.listIcons}>{list.icon}</ListItemIcon>
                    <ListItemText>
                        {list.title}
                    </ListItemText>
                    {checkIsOpen(list.title) ? <ExpandLess /> : <ExpandMore  /> }
                </ListItem>
                    <Collapse in={checkIsOpen(list.title)} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        { list.subs.map((sub)=>(
                          <a href={sub.link} key={sub.title} style={{textDecoration: 'none'}} onClick={toggleDrawer('left', false)} >
                            <ListItem button className={classes.subList}>
                              <ListItemIcon className={classes.listIcons}>
                                {sub.icon}
                              </ListItemIcon>
                              <ListItemText> {sub.title} </ListItemText>
                            </ListItem>
                          </a>
                        ))}
                      </List>
                    </Collapse>
              </Box>               
              )
          ))}
      </List>
      </>
    )
    return (
        <React.Fragment>
        {pending === true && <LinearProgress />}
         <IconButton edge='start' onClick={toggleDrawer('left', true)}>
            <Menu fontSize='large' className = {classes.menuIcon} />
          </IconButton>
        <Drawer 
        classes= { {paper: classes.root}}
        anchor='left'
        open={state.left} 
        onClose={toggleDrawer('left', false)}>
            {drawSideBar('left')}
        </Drawer>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
  locations: state.tripHistory.locations,
  pending: state.tripHistory.pending
})

export default connect(mapStateToProps, {getTripLocations})(DrawerComponent)

















