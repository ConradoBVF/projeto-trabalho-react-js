import './App.css';
import { lazy } from 'react';
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Cadastro = lazy(() => import("./components/cadastro/Cadastro"))
const Login = lazy(() => import("./components/login/Login"))
const PaginaProduto = lazy(() => import("./components/pagina-produto/PaginaProduto"))
const Checkout = lazy(() => import("./components/checkout/Checkout"))
const Carrinho = lazy(() => import("./components/cart/Cart"))
const NotFound = lazy(() => import("./components/not-found/NotFound"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pagina-produto/:id" element={<PaginaProduto />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
