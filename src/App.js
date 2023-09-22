import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import UserComplain from './components/UserComplain';
import PolicePortal from './components/PolicePortal';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/usercomplain" element={<UserComplain />}></Route>
          <Route exact path="/policeportal" element={<PolicePortal />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
