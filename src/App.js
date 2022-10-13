import './App.css';
import { lazy } from 'react';
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = lazy(() => import("./components/login/Login"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
