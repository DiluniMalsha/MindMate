import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import './App.css'
// import NavigationPanel from "./components/navigationPanels/NavigationPanel";
import Settings from "./components/settings/Settings";
import NavigationPanelMobile from "./components/navigationPanels/NavigationPanelMobile";
// import NavbarMobile from "./components/navigationPanels/NavbarMobile";
import PageNotFound from "./components/pageNotFound/PageNotFound";
// import NavigationPanel from "./components/navigationPanels/NavigationPanel";
import SideMenuBar from "./components/NavigationPanel/SideMenuBar";
import Welcome from "./view/welcomePage/Welcome";
import SignIn from "./view/SignIn/SignIn";
import NavigationPanel from "./components/navigationPanels/NavigationPanel";



const App = (props) => {
    const token = false;

    if (token) {
        return <SignIn/>
    }
    return (

        <div className="App">
            <Router>
                {/*<NavbarMobile/>*/}
                <div className='NavMobileDisplay'>
                   <NavigationPanel/>
                </div>
                <div className="NavDesktopDisplay">
                    <NavigationPanelMobile />
                </div>
                <Routes>
                    <Route path='/*' element={<PageNotFound/>}/>
                    {/*<Route path="/" element={<Welcome/>}/>*/}
                    <Route path="/signIn" element={<SignIn/>}/>
                    <Route path="/sideBar" element={<SideMenuBar/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
