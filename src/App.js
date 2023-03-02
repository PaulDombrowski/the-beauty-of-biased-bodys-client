import logo from './logo.svg';
import './App.css';

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

  <Navbar />

    <Routes>      
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
    </Routes>

    </div>
  );
}

export default App;
