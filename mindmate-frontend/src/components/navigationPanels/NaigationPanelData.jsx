import React from "react";
import home from "../../assets/icon/home.png";
import child from "../../assets/icon/child.png";
import schedule from "../../assets/icon/schedule.png";
import settings from "../../assets/icon/settings.png";
import dataset from "../../assets/icon/dataset.png";

export const NavigationPanelData = [
    {
        title: 'Home',
        path: '/',
        iconVisibility: true,
        icon: <img src={home} alt={home} width={50} className="nav-bar-icon-width" />,
        subItems: []
    },
    {
        title: 'Child',
        path: '/child',
        iconVisibility: true,
        icon: <img src={child} alt={child} width={50} className="nav-bar-icon-width"/>,
        subItems: []
    },
    {
        title: 'Schedule',
        path: '/schedule',
        iconVisibility: true,
        icon: <img src={schedule} alt={schedule} width={50} className="nav-bar-icon-width"/>,
        subItems: []
    },
    {
        title: 'Settings',
        path: '/settings',
        iconVisibility: true,
        icon: <img src={settings} alt={settings} width={50} className="nav-bar-icon-width"/>,
        subItems: []
    },
    {
        title: 'Dataset',
        path: '/dataset',
        iconVisibility: false,
        icon: <img src={dataset} alt={dataset} width={50} className="nav-bar-icon-width"/>,
        subItems: []
    },
    // {
    //     title: 'Log out',
    //     path: '/',
    //     icon: <img src={power} alt={power} width={25}/>,
    //     subItems: []
    // },

]

export const MNavigationPanelData = [
    {
        title: 'Home',
        path: '/',
        iconVisibility: true,
        icon: <img src={home} alt={home} width={50} className="nav-bar-icon-width" />,
        subItems: []
    },
    {
        title: 'Child',
        path: '/child',
        iconVisibility: true,
        icon: <img src={child} alt={child} width={50} className="nav-bar-icon-width"/>,
        subItems: []
    },
    {
        title: 'Schedule',
        path: '/schedule',
        iconVisibility: true,
        icon: <img src={schedule} alt={schedule} width={50} className="nav-bar-icon-width"/>,
        subItems: []
    },
    {
        title: 'Settings',
        path: '/settings',
        iconVisibility: true,
        icon: <img src={settings} alt={settings} width={50} className="nav-bar-icon-width"/>,
        subItems: []
    },
    // {
    //     title: 'Log out',
    //     path: '/',
    //     icon: <img src={power} alt={power} width={25}/>,
    //     subItems: []
    // },

]