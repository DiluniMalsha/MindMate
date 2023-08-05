import pic from '../../assets/profilePic/DrMihir.jpg'
import './HeadingBar.css'
import Grid from "@mui/material/Grid";
import SetDate from "../homeHeading/SetDate";
import WishPerTime from "../homeHeading/WishPerTime";
import React from "react";

const HeadingBar = (props) => {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={11}>
                    <div className = 'heading-bar'>
                        <div className = 'row'>
                            <div className="col">
                                <SetDate/>
                            </div>
                            <div className="col">
                                <WishPerTime/>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <img src={pic} alt="ProfilePic" className='profile-pic-img'/>
                </Grid>
            </Grid>
        </div>
    );
}

export default HeadingBar;