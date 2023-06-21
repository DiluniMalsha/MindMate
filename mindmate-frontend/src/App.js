import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./view/welcomePage/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
