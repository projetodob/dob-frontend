import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta'
import './doblogo.css';

function NavbarInicio() {

  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso')
    navigate("/login")
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full h-[4rem] bg-white shadow border-gray-200 dark:bg-white'>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/home' className='hover:rounded-full px-1 py-1 text-2xl font-bold uppercase ml-10'>Desenvolvendo o Bem</Link>

          <div className='flex gap-4'>
            <Link to='/sobre' className='py-2 px-2 hover:border-b-2 hover:border-green-500 hover:font-bold'>Quem somos</Link>
            <Link to='/produtos' className='py-2 px-2 hover:border-b-2 hover:border-green-500 hover:font-bold'>Produtos</Link>
            <Link to='/contato' className='py-2 px-2 hover:border-b-2 hover:border-green-500 hover:font-bold'>Contato</Link>
            <Link to='/perfil' className='py-2 px-2 hover:border-b-2 hover:border-green-500 hover:font-bold'>Perfil</Link>
            <Link to='' onClick={logout} className='py-2 px-2 hover:border-b-2 hover:border-green-500 hover:font-bold'>Sair</Link>
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
