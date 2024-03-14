import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../service/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
  }


  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria atualizada com sucesso', 'sucesso')
        retornar()

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar a Categoria', 'erro')
        }

      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria cadastrada com sucesso', 'sucesso')

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar a Categoria', 'erro')
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');;
    }
  }, [token]);

  return (
    <div className="bg-verdeEsc h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl text-laranja text-center my-8">
        {id === undefined ? 'Cadastrar uma nova categoria' : 'Editar categoria'}
      </h1>

      <div className="w-[50%] text-gray-300 rounded-t shadow-lg overflow-hidden text-xs">
        <div className="h-8 flex items-center p-2 justify-between bg-gradient-to-b from-verdeMusgo to-verdeEsc">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span className="text-xl font-bold select-none">Terminal</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 cursor-pointer hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
        <div className="h-72 p-1 bg-verdeMusgo text-xl font-mono">
          <form className="w-full rounded-lg px-4 pt-2" onSubmit={gerarNovoCategoria}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-4 pt-3 pb-2 text-gray-300 font-bold text-lg"><span className="text-verde">➜ </span>Categoria</h2>
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <input className="text-gray-700 bg-gray-300 rounded-xl w-full h-15 py-2 px-3 font-medium focus:outline-none focus:bg-white" type="text"
                  placeholder="Escreva o nome da categoria"
                  name='tipo'
                  value={categoria.tipo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
              </div>
              <div className="w-full md:w-full flex items-start px-3">
                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                </div>
                <div className="flex">
                  <button
                    className="flex justify-center items-center w-full p-2 rounded-xl text-slate-100 bg-laranja hover:bg-laranjaEsc"
                    type="submit"
                  >
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                  </button>
                  <button className="flex justify-center items-center w-full p-2 ml-2 rounded-xl text-slate-100 bg-vermelhoEsc hover:bg-red-600" onClick={retornar}>Cancelar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>



  );
}

export default FormularioCategoria;