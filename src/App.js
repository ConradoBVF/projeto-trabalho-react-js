import './App.css';
import { lazy } from 'react';
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Cadastro = lazy(() => import("./components/cadastro/Cadastro"))
const Login = lazy(() => import("./components/login/Login"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
