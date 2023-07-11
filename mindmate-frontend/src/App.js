import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Settings from "./view/settings/Settings";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import SignIn from "./view/SignIn/SignIn";
// import Welcome from "./view/welcomePage/Welcome";
import NavigationPanel from "./components/navigationPanels/NavigationPanel";
import Scheduler from "./view/scheduler/Scheduler";
import Home from "./view/home/Home";
import Grid from "@mui/material/Grid";

const App = (props) => {
    const token = false;

    if (token) {
        return <SignIn/>
    }
    return (

        <div className="App">
            <Router>
                <Grid container>
                    <Grid item xs={.8} className='background-color'>
                            <div className='NavMobileDisplay'>
                                <NavigationPanel/>
                            </div>
                    </Grid>
                    <Grid item xs={11.2} sx={{textAlign:'center', justifyContent:'center'}}>
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
