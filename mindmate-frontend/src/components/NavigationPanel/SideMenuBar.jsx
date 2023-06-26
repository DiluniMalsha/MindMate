// import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./SideMenuBar.css"
import home from "../../assets/icon/home.png";
import child from "../../assets/icon/child.png";
import schedule from "../../assets/icon/schedule.png";
import settings from "../../assets/icon/settings.png";
import dataset from "../../assets/icon/dataset.png";
import logo from "../../assets/logo/Logo.png";


const SideMenuBar = ({children}) => {
    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<img src={home} alt={home} width={50}/>
        },
        {
            path:"/",
            name:"Child",
            icon:<img src={child} alt={child} width={50}/>
        },
        {
            path:"/",
            name:"Schedule",
            icon:<img src={schedule} alt={schedule} width={50}/>
        },
        {
            path:"/",
            name:"Settings",
            icon:<img src={settings} alt={settings} width={50}/>
        },
        {
            path:"/",
            name:"Dataset",
            icon:<img src={dataset} alt={dataset} width={50}/>
        }
    ]
    return (
        <div className="sidebar-main">
            <div  className="sidebar">
                <div className="top_section">
                    <h1 className="logo"><img src={logo} alt='Mindmate' width={125}/></h1>
                </div>
                <div className="icon-center">
                    {
                        menuItem.map((item, index)=>(
                            <Link to={item.path} key={index} className="link-sidebar link" activeclassName="active">
                                <div className="icon-img">{item.icon}</div>
                                {/*<div  className="link_text">{item.name}</div>*/}
                            </Link>
                        ))
                    }
                </div>
                <div className="top_section">
                    <Link to="/" style={{textDecoration:'none', marginRight:'auto', marginLeft:'auto'}}>
                        <h1 className="sign-out-de">Sign Out</h1>
                    </Link>
                </div>

            </div>
            <main>{children}</main>
        </div>
    );
};

export default SideMenuBar;