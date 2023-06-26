import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./view/welcomePage/Welcome";
import SignIn from "./view/SignIn/SignIn";
import SideMenuBar from "./components/NavigationPanel/SideMenuBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/sideBar" element={<SideMenuBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
