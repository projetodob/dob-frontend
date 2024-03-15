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
      <div className='w-full bg-white border-gray-200 dark:bg-gray-900'>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/home' className='text-2xl logodob font-bold uppercase ml-10'></Link>

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
else{
  navbarComponent = (
    <div className=' w-full  bg-laranjaEsc   border-gray-200 dark:bg-gray-900'>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to='/' className='text-4xl logodob font-bold uppercase ml-10'>aaa</Link>
      

        <div className='flex gap-4 justify-items-end'>
          <a href='#sobre' className='bg-transparent rounded-full hover:bg-orange-600 hover:rounded-full px-2 py-2'>Quem somos</a>
          <Link to='/login' className='hover:bg-orange-600 hover:rounded-full px-2 py-2'>Login</Link>
          <Link to='/cadastro' className='hover:bg-orange-600 hover:rounded-full px-2 py-2'>Cadastre-se</Link>
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