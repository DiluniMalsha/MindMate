import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Settings from "./view/settings/Settings";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import SignIn from "./view/SignIn/SignIn";
import Welcome from "./view/welcomePage/Welcome";
import NavigationPanel from "./components/navigationPanels/NavigationPanel";

const App = (props) => {
    const token = false;

    if (token) {
        return <SignIn/>
    }
    return (

        <div className="App">
            <Router>
                <div className='NavMobileDisplay'>
                   <NavigationPanel/>
                </div>
                <div className="center-div">
                    <Routes>
                        <Route path='/*' element={<PageNotFound/>}/>
                        <Route path='/' element={<Welcome/>}/>
                        <Route path="/signIn" element={<SignIn/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        {/*<Route path="/preparation" element={<Preferences/>}/>*/}
                    </Routes>
                </div>

            </Router>
        </div>
    );
}

export default App;
