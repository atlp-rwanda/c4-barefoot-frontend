import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import GroupIcon from '@material-ui/icons/Group';
import CommuteIcon from '@material-ui/icons/Commute';
import CachedIcon from '@material-ui/icons/Cached';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import BusinessIcon from '@material-ui/icons/Business';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import ApartmentIcon from '@material-ui/icons/Apartment';
import ExploreIcon from '@material-ui/icons/Explore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import DomainIcon from '@material-ui/icons/Domain';
import PinDropIcon from '@material-ui/icons/PinDrop';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

const role = localStorage.getItem('userRole');


// let menuItems= [
//     {
//         title:"Dashboard",
//         icon:<DashboardIcon />,
//         link:"/home",
//         subs: []
//     },
//     //   {
//     //      title:"Accomodation",
//     //     icon:<AddLocationIcon />,
//     //     link:"/accomodation",
//     //     subs: []
//     // },
// ];

// switch( role ){
//     case 'manager':
//         menuItems= [
//             ...menuItems,
//             {
//                 title:"Travel requests",
//                 icon:<CommuteIcon />,
//                 link:"/travelRequests",
//                 subs: [
//                     {
//                         title: 'Create Travel',
//                         icon: <CachedIcon />,
//                         link: "/travelReqests"
//                     },
//                     {
//                         title: 'List of Travel Requests',
//                         icon: <ThumbUpIcon />,
//                         link: "/travelRequests",
//                         subs: [
//                             {
//                                 title: 'Pending',
//                                 icon: <CachedIcon />,
//                                 link: "/travelRequests"
//                             },
//                             {
//                                 title: 'Approved',
//                                 icon: <ThumbUpIcon />,
//                                 link: "/travelRequests/approved"
//                             },
//                             {
//                                 title: 'Canceled & Rejected',
//                                 icon: <CancelIcon />,
//                                 link: "/travelRequests/canceled"
//                             },
//                             {
//                                 title: 'Done',
//                                 icon: <DoneAllIcon />,
//                                 link: "/travelRequests/done"
//                             },
//                         ]
//                     },
        
//                 ]
//             },
//             {
//                 title:"Requester Reports",
//                 icon:<CommuteIcon />,
//                 link:"/managerTravel",
//                 subs: [
//                     {
//                         title: 'Pending',
//                         icon: <CachedIcon />,
//                         link: "/managerTravel"
//                     },
//                     {
//                         title: 'Approved',
//                         icon: <ThumbUpIcon />,
//                         link: "/managerTravel/approved"
//                     },
//                     {
//                         title: 'Canceled & Rejected',
//                         icon: <CancelIcon />,
//                         link: "/managerTravel/canceled"
//                     },
//                     {
//                         title: 'Done',
//                         icon: <DoneAllIcon />,
//                         link: "/managerTravel/done"
//                     },
//                 ]
//             }
        

            
//         ];
//         break;

//     case 'travel-admin':
//         menuItems=[
//             ...menuItems,
//             {
//                 title:"Travel requests",
//                 icon:<CommuteIcon />,
//                 link:"/travelRequests",
//                 subs: [
//                     {
//                         title: 'Create Travel',
//                         icon: <CachedIcon />,
//                         link: "/travelReqests"
//                     },
//                     {
//                         title: 'List of Travel Requests',
//                         icon: <ThumbUpIcon />,
//                         link: "/travelRequests",
//                         subs: [
//                             {
//                                 title: 'Pending',
//                                 icon: <CachedIcon />,
//                                 link: "/travelRequests"
//                             },
//                             {
//                                 title: 'Approved',
//                                 icon: <ThumbUpIcon />,
//                                 link: "/travelRequests/approved"
//                             },
//                             {
//                                 title: 'Canceled & Rejected',
//                                 icon: <CancelIcon />,
//                                 link: "/travelRequests/canceled"
//                             },
//                             {
//                                 title: 'Done',
//                                 icon: <DoneAllIcon />,
//                                 link: "/travelRequests/done"
//                             },
//                         ]
//                     },
        
//                 ]
//             },
//             {
//                 title:"Accomodations",
//                 icon:<BusinessIcon />,
//                 link:"/travelmanager/accomodations",
//                 subs: [
//                     {
//                         title: 'Create accomodation',
//                         icon: <EmojiTransportationIcon />,
//                         link: "/travelManager/accomodations/create"
//                     },
//                     {
//                         title: 'List of accomodations',
//                         icon: <ApartmentIcon />,
//                         link: "/accomodations"
//                     },
                   
//                 ]
//             },
//             {
//                 title:"Locations",
//                 icon:<LocationOnIcon />,
//                 link:"/travelmanager/locations",
//                 subs: [
//                     {
//                         title: 'Create location',
//                         icon: <AddLocationIcon />,
//                         link: "/travelManager/locations/create"
//                     },
//                     {
//                         title: 'List of locations',
//                         icon: <ExploreIcon />,
//                         link: "/locations"
//                     },
                   
//                 ]
//             }

//         ];
//         break;

//     case 'requester':
//         menuItems= [
//             ...menuItems,
//             {
//                 title:"Travel requests",
//                 icon:<CommuteIcon />,
//                 link:"/travelRequests",
//                 subs: [
//                     {
//                         title: 'Create Travel',
//                         icon: <CachedIcon />,
//                         link: "/travelReqests"
//                     },
//                     {
//                         title: 'List of Travel Requests',
//                         icon: <ThumbUpIcon />,
//                         link: "/travelRequests",
//                         subs: [
//                             {
//                                 title: 'Pending',
//                                 icon: <CachedIcon />,
//                                 link: "/travelRequests"
//                             },
//                             {
//                                 title: 'Approved',
//                                 icon: <ThumbUpIcon />,
//                                 link: "/travelRequests/approved"
//                             },
//                             {
//                                 title: 'Canceled & Rejected',
//                                 icon: <CancelIcon />,
//                                 link: "/travelRequests/canceled"
//                             },
//                             {
//                                 title: 'Done',
//                                 icon: <DoneAllIcon />,
//                                 link: "/travelRequests/done"
//                             },
//                         ]
//                     },
        
//                 ]
//             },
//         ];
//         break;

//     default: 
//         menuItems= [
//             ...menuItems,
//         ];
        
// }

let menuItems={
    manager:[
        {
            title:"Home",
            icon:<HomeIcon/>,
            link:"/home",
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
        }
    

        
    ],
    "travel-admin":[
        {
            title:"Home",
            icon:<HomeIcon/>,
            link:"/home",
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
            title:"Accomodations",
            icon:<BusinessIcon />,
            link:"/travelmanager/accomodations",
            subs: [
                {
                    title: 'Create accomodation',
                    icon: <EmojiTransportationIcon />,
                    link: "/travelManager/accomodations/create"
                },
                {
                    title: 'List of accomodations',
                    icon: <ApartmentIcon />,
                    link: "/accomodations"
                },
               
            ]
        },
        {
            title:"Locations",
            icon:<LocationOnIcon />,
            link:"/travelmanager/locations",
            subs: [
                {
                    title: 'Create location',
                    icon: <AddLocationIcon />,
                    link: "/travelManager/locations/create"
                },
                {
                    title: 'List of locations',
                    icon: <ExploreIcon />,
                    link: "/locations"
                },
               
            ]
        }

    ],
    requester:[
        {
            title:"Home",
            icon:<HomeIcon/>,
            link:"/home",
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
    ],
    administrator:[
        {
            title:"Home",
            icon:<HomeIcon/>,
            link:"/home",
            subs: []
        },
          {
             title:"My Travels",
            icon:<DomainIcon />,
            link:"/accomodation",
            subs: []
        },
        {
            title:"Accomodation",
            icon:<DomainIcon />,
            link:"/travelRequests",
            subs: [
    
            ]
        },
        {
            title:"Location",
            icon:<PinDropIcon/>,
            link:"/admin",
            subs: [
                
            ]
        },
        {
            title:"Statistics",
            icon:<EqualizerIcon/>,
            link:"/admin",
            subs: [
                
            ]
        },
        {
            title:"Roles",
            icon:<RecentActorsIcon/>,
            link:"/admin",
            subs: [
                {
                    title: 'create Role',
                    icon: <AddIcon/>,
                    link: "/admin/roles"
                },
                {
                    title: 'List Of Roles',
                    icon: <ListIcon />,
                    link: "/admin/roleslist"
                }
            ]
        },
        {
            title:"Set Permissions",
            icon:<RecentActorsIcon/>,
            link:"/admin/permissions",
            subs: [
            ]
        }
    
    ]
}


export {menuItems};

export default menuItems;
