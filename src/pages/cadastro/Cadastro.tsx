
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import { ChangeEvent, useEffect, useState } from 'react';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../service/Service';
import { toastAlerta } from '../../util/toastAlerta';

function Cadastro() {

  const navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
    foto: '',
    tipo: ""
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
    foto: '',
    tipo: ""
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      setUsuario({ ...usuario, senha: "" })
      setConfirmaSenha("")
    }
  }


  return (
    <>
      <div className="font-sans fundoCadastro bg-cover bg-center bg-no-repeat flex flex-1 justify-center items-center">
        <form className='max-w-xl m-4 p-24 bg-white bg-opacity-25 rounded shadow-xl' onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-white text-center text-5xl font-bold '>Cadastrar</h2>
          <div className=" flex flex-col w-full">
            <label className='mt-16 block font-medium text-lg text-white' htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="w-full md:w-96 px-7 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className='mt-3 block font-medium text-lg text-white' htmlFor="email">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="email"
              placeholder="Usuario"
              className="w-full px-7 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={usuario.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className='mt-3 block font-medium text-lg text-white' htmlFor="tipo">Tipo</label>
            <input
              type="text"
              id="tipo"
              name="tipo"
              placeholder="Vendedor/Consumidor"
              className="w-full px-7 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={usuario.tipo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className='mt-3 block font-medium text-lg text-white' htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="w-full px-7 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className='mt-3 block font-medium text-lg text-white' htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="w-full px-7 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className=" flex flex-col w-full">
            <label className='mt-3 block font-medium text-lg text-white' htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="mb-4 w-full px-7 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="mt-4 flex justify-around w-full gap-8">
            <button className='rounded text-white font-medium bg-vermelhoEsc hover:bg-red-700 w-1/2 py-2' onClick={back}>
              Voltar
            </button>
            <button className='rounded text-white font-medium bg-verdeEsc hover:bg-verdeMusgo w-1/2 py-2' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro;