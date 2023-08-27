import { HomeOutline} from "react-ionicons";
import "./Home.css"
import Grid from "@mui/material/Grid";
import mood from '../../assets/faceIcon/fear.svg'
import CustomButton from "../../components/button/CustomButton";
import LiveChart from "../../components/chart/LiveChart";
import React from "react";
import HeadingTitle from "../../components/title/HeadingTitle";

const Home = (props) => {
    let moodDescription = "Mihasa is Now in a fear Mood"
    let upcomingTask = 'Reading Books';
    let time = 'at 08:00 AM';
    let icons =<HomeOutline
                    color={'#4285f5'}
                    title={"Home"}
                    height="20px"
                    width="20px"
                    style={{marginBottom: '5px'}}
                />
    return (
        <section className="home-margin">
            <HeadingTitle title='Dashboard' icon={icons} ml={'70px'}/>
            <div className='second-div mt-4 ms-4'>
                <Grid container spacing={2}>
                    <Grid item xs={11} md={3}>
                        <div className='show-mood'>
                            <img src={mood} alt='mood' className='mood-section'/>
                            <br/>
                            <span className='mt-3 mood-des'>
                                {moodDescription}
                            </span>
                            <br/>
                            <CustomButton
                                type="button"
                                variant="history"
                                radius="10"
                                size="sm"
                                className="mt-4 btn-mrg"
                                fontSize="18"
                                width="180"
                            >
                                Respond to Her
                            </CustomButton>
                        </div>
                        <div className='second-div mt-5 '>
                            <div className='show-mood'>
                                <div style={{paddingTop: '15%'}}>
                                    {/*<br/>*/}
                                    <span className='mt-3 mood-des mb-3'
                                          style={{fontSize: '1.5rem', marginTop: '50px'}}>
                                Upcoming Task For Mihasa
                            </span>
                                    <br/>
                                    <div className='mt-4 upcoming'>
                                        {upcomingTask}
                                    </div>
                                    <br/>
                                    <div className='upcoming'>
                                        {time}
                                    </div>
                                    <br/>
                                    <CustomButton
                                        type="button"
                                        variant="primary"
                                        radius="10"
                                        size="sm"
                                        className="mt-4 btn-mrg"
                                        fontSize="18"
                                        width="200"
                                    >
                                        Send a Reminder
                                    </CustomButton>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={11} md={9} className='chart-grid'>
                        <div className='chart-section'>
                            <LiveChart width='1200' height='600' display='none'/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
        ;
}

export default Home;