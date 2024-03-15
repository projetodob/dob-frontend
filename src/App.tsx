import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarInicio from "./components/navbar/NavbarInicio";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/sobre/Sobre";
import Contato from "./pages/contato/Contato";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto";
import DeletarProduto from "./components/produtos/deletarProduto/deletarProduto";
import Perfil from "./pages/perfil/Perfil";
import Carrinho from "./components/carrinho/Carrinho";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";

function App() {
  return (
    <AuthProvider>
      <CarrinhoProvider>
        <ToastContainer />
        <BrowserRouter>
          <NavbarInicio />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="contato" element={<Contato />} />
              <Route path="perfil" element={<Perfil />} />
              <Route path="carrinho" element={<Carrinho />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CarrinhoProvider>
    </AuthProvider>
  );
}

export default App;
