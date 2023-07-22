import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./view/settings/Settings";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import SignIn from "./view/SignIn/SignIn";
import NavigationPanel from "./components/navigationPanels/NavigationPanel";
import Scheduler from "./view/scheduler/Scheduler";
import Home from "./view/home/Home";
import Grid from "@mui/material/Grid";
import NavigationPanelMobile from "./components/navigationPanels/NavigationPanelMobile";
import ReminderCalender from "./components/reminderCalender/ReminderCalender";
import './App.css'
import EmotionTracker from "./view/EmotionTracker/EmotionTracker";

const App = (props) => {
    // const token = true;

    return (

        <div className="App" style={{ height:'100vh'}}>
            <BrowserRouter>

                <Grid container>
                    <Grid item sm={1} xs={0} className='background-color'>
                            <div className='NavDesktopDisplay'>
                                <NavigationPanel/>
                            </div>
                        <div className='NavMobileDisplay'>
                            <NavigationPanelMobile/>
                        </div>
                    </Grid>
                    <Grid item sm={11} xs={12} sx={{textAlign:'center', justifyContent:'center'}}>
                        <div className="center-div">
                            <Routes>
                                <Route path='/*' element={<PageNotFound/>}/>
                                {/*<Route path='/' element={<Welcome/>}/>*/}
                                <Route path="/signIn" element={<SignIn/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                                <Route path="/scheduler" element={<Scheduler/>}/>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/reminder" element={<ReminderCalender/>}/>
                                <Route path="/emotion-tracker" element={<EmotionTracker/>}/>
                            </Routes>
                        </div>
                    </Grid>
                </Grid>
            </BrowserRouter>
        </div>
    );
}

export default App;
