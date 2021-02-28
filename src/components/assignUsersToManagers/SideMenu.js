import React from 'react';
import SideDrawer from '../SideDrawer';

const managerLinks = [
    {title: 'Home', path: '/' },
    {title: 'My Travel', path: '/' },
    {title: 'Report requests', path: '/' },
    {title: 'Book accommodation', path: '/' },
    {title: 'Users', path: '/' }
]


const SideMenu = () => {
    return (
        <SideDrawer navLinks={managerLinks} />
    )
};

export default SideMenu;
