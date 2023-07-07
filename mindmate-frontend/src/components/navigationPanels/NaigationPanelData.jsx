import React from "react";
import {
    Albums,
    AlbumsOutline,
    Calendar,
    CalendarOutline,
    Fitness,
    FitnessOutline,
    Home,
    HomeOutline,
    Settings,
    SettingsOutline
} from "react-ionicons";

export const NavigationPanelData = [
    {
        title: 'Home',
        path: '/',
        iconVisibility: true,
        icon: <HomeOutline
            color={'#c0c0c0'}
            title={"Home"}
            height="40px"
            width="40px"
        />,
        iconActive:
            <Home
                color={'#ffffff'}
                title={"Home"}
                height="40px"
                width="40px"
            />,
        subItems: []
    },
    {
        title: 'EmotionTracker',
        path: '/emotion-tracker',
        iconVisibility: true,
        icon: <FitnessOutline
            color={'#c0c0c0'}
            title={"EmotionTracker"}
            height="40px"
            width="40px"
        />,
        iconActive:
            <Fitness
                color={'#ffffff'}
                title={"Emotion Tracker"}
                height="40px"
                width="40px"
            />,
        subItems: []
    },
    {
        title: 'Scheduler',
        path: '/scheduler',
        iconVisibility: true,
        icon: <CalendarOutline
            color={'#c0c0c0'}
            title={"Scheduler"}
            height="40px"
            width="40px"
        />,
        iconActive:
            <Calendar
                color={'#ffffff'}
                title={"Scheduler"}
                height="40px"
                width="40px"
            />,
        subItems: []
    },
    {
        title: 'Settings',
        path: '/settings',
        iconVisibility: true,
        icon: <SettingsOutline
            color={'#c0c0c0'}
            title={"Settings"}
            height="40px"
            width="40px"
        />,
        iconActive:
            <Settings
                color={'#ffffff'}
                title={"Settings"}
                height="40px"
                width="40px"
            />,
        subItems: []
    },
    {
        title: 'Dataset',
        path: '/dataset',
        iconVisibility: false,
        icon: <AlbumsOutline
            color={'#c0c0c0'}
            title={"Dataset"}
            height="40px"
            width="40px"
        />,
        iconActive:
            <Albums
                color={'#ffffff'}
                title={"Dataset"}
                height="40px"
                width="40px"
            />,
        subItems: []
    }

]
export const MNavigationPanelData = [
    {
        title: 'Home',
        path: '/',
        iconVisibility: true,
        icon: <HomeOutline
            color={'#c0c0c0'}
            title={"Home"}
            height="40px"
            width="40px"
        />,
        ss:
            <Home
                color={'#ffffff'}
                title={"ActiveHome"}
                height="40px"
                width="40px"
            />,
        subItems: []
    },
    {
        title: 'Child',
        path: '/child',
        iconVisibility: true,
        icon: <FitnessOutline
            color={'#c0c0c0'}
            title={"EmotionTracker"}
            height="40px"
            width="40px"
        />,
        ss:
            <Fitness
                color={'#ffffff'}
                title={"ActiveEmotionTracker"}
                height="40px"
                width="40px"
            />,
        subItems: []
    },
    {
        title: 'Schedule',
        path: '/schedule',
        iconVisibility: true,
        icon: <CalendarOutline
            color={'#c0c0c0'}
            title={"Scheduler"}
            height="40px"
            width="40px"
        />,
        ss:
            <Calendar
                color={'#ffffff'}
                title={"ActiveScheduler"}
                height="40px"
                width="40px"
            />,
        subItems: []
    },
    {
        title: 'Settings',
        path: '/settings',
        iconVisibility: true,
        icon: <SettingsOutline
            color={'#c0c0c0'}
            title={"Settings"}
            height="40px"
            width="40px"
        />,
        ss:
            <Settings
                color={'#ffffff'}
                title={"ActiveSettings"}
                height="40px"
                width="40px"
            />,
        subItems: []
    }
]