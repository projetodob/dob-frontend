import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Categoria from '../../../models/Categoria'
import { buscar, deletar } from '../../../service/Service'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }

        retornar()
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='mb-5 my-8'>
                <h1 className='text-4xl text-laranja'>DELETAR CATEGORIA</h1>
            </div>
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
                    <span className="text-verde">➜ </span>
                    <span>Atenção, {usuario.nome}!</span>
                    <br />
                    <span className="text-verde">➜ </span>
                    <span>Você realmente deseja deletar a categoria: <span className='font-bold text-verde'>{categoria.tipo}</span>?</span>
                    <div className='flex mt-4 ml-8'>
                        <button className="flex justify-center items-center h-10 w-[15%] py-2 px-4 rounded-xl text-slate-100 bg-laranja hover:bg-laranjaEsc" onClick={deletarCategoria}>Sim</button>
                        <button className="flex justify-center items-center h-10 w-[15%] ml-2 py-2 px-4 rounded-xl text-slate-100 bg-vermelhoEsc hover:bg-red-600" onClick={retornar}>Não</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria;