import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import GroupIcon from '@material-ui/icons/Group';
import CommuteIcon from '@material-ui/icons/Commute';
import CachedIcon from '@material-ui/icons/Cached';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import HomeIcon from '@material-ui/icons/Home';
import DomainIcon from '@material-ui/icons/Domain';
import PinDropIcon from '@material-ui/icons/PinDrop';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

export const sideBarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/",
        subs: []
    },
    {
        title: 'Create Travel request',
        icon:"",
        link: "/requester",
        subs:[] 
    },
    {
        title: 'List of Travel request',
        icon:"",
        link: "/requester",
        subs:[
            {
                title:"Pending",
                icon:"",
                link:"/requester"
            },
            {
                title:"Approved",
                icon:"",
                link:"/requester"
            },
            {
                title:"Rejected & Canceled",
                icon:"",
                link:"/requester"
            },
            {
                title:"Done",
                icon:"",
                link:"/requester"
            }
        ] 
    },
    {
        title:"Chat",
        icon:<DashboardIcon />,
        link:"/chat",
        subs: []
    },

]
