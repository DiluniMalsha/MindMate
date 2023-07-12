import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Settings from "./view/settings/Settings";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import SignIn from "./view/SignIn/SignIn";
import NavigationPanel from "./components/navigationPanels/NavigationPanel";
import Scheduler from "./view/scheduler/Scheduler";
import Home from "./view/home/Home";
import Grid from "@mui/material/Grid";
import NavigationPanelMobile from "./components/navigationPanels/NavigationPanelMobile";

const App = (props) => {
    const token = false;

    if (token) {
        return <SignIn/>
    }
    return (

        <div className="App" style={{ height:'100vh'}}>
            <Router>

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
                                {/*<Route path="/preparation" element={<Preferences/>}/>*/}
                            </Routes>
                        </div>
                    </Grid>
                </Grid>
            </Router>
        </div>
    );
}

export default App;
