import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta'
import './doblogo.css'
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


     if(usuario.token !== "") {
      navbarComponent = (
      <div className='w-full bg-black border-gray-200 dark:bg-white'>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/home' className='ml-10'>
          <img src='./assets/logodobLaranja.png' alt='Logo do Site' className='doblogo' />
          </Link>

          <div className='flex gap-4'>
            <Link to='/sobre' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Quem somos</Link>
            <Link to='/produtos' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Produtos</Link>
            <Link to='/categorias' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Cadastrar categoria</Link>
            <Link to='/contato' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Contato</Link>
            <Link to='/perfil' className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:bg-green-500 hover:rounded-full px-2 py-2'>Sair</Link>
          </div>
        </div>
      </div>
    
  )
}


return (
  <>
    {navbarComponent}
  </>
)
}

export default NavbarInicio