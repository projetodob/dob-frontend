import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/home')
    }
}, [usuario])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
  })
}

function login(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}

  return (
    <>
      <div className="h-screen font-sans fundoLogin bg-cover bg-center bg-no-repeat flex flex-1 justify-center items-center">
        <form className="max-w-xl m-4 p-24 bg-white bg-opacity-25 rounded shadow-xl" onSubmit={login}>
          <h2 className="text-verdeEsc text-center text-5xl font-bold ">LOGIN</h2>
          <div className="">
            <label className='mt-16 block font-medium text-lg text-verdeEsc' htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="email"
              placeholder="Insira seu e-mail"
              className="w-full px-7 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={usuarioLogin.email} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className='mt-4 block font-medium text-lg text-verdeEsc' htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Insira sua senha"
              className="w-full px-7 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button  type='submit' className="mt-8 mx-auto block px-5 py-3 text-white font-medium tracking-wider bg-verdeEsc hover:bg-verdeMusgo rounded">
           {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>Entrar</span>}
          </button>

          <hr className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400" />

          <p>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="inline-block right-0 align-baseline font-medium text-base text-verdeMusgo hover:text-white">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;