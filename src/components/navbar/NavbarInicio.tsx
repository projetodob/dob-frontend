import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta'
import './doblogo.css'
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";

function NavbarInicio() {

  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso')
    navigate("/login")
  }

  

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full bg-white shadow border-gray-200 dark:bg-gray-900'>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/home' className='hover:rounded-full px-1 py-1 text-2xl font-bold uppercase ml-10'>Desenvolvendo o Bem</Link>

          <div className='flex gap-4'>
            <Link to='/sobre' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Quem somos</Link>
            <Link to='/produtos' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Produtos</Link>
            <Link to='/contato' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Contato</Link>
            <Link to='/perfil' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Sair</Link>

          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}
export default NavbarInicio;