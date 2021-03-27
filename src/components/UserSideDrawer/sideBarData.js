import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import GroupIcon from '@material-ui/icons/Group';
import CommuteIcon from '@material-ui/icons/Commute';
import CachedIcon from '@material-ui/icons/Cached';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {subs} from './Drawer';
export const sideBarData = [
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
        link:"",
        subs
    }
]
