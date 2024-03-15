import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta'
import ListaProdutoPerfil from '../../components/produtos/listaProdutos/ListaProdutoPerfil';

function Perfil() {

    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
            navigate("/login")
        }
    }, [usuario.token]);

    return (
        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
            
            <div className='flex w-full h-72 bg-laranjaEsc bg-opacity-50 rounded-xl'>
                <div className='flex w-[50%] h-72'>
                <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='ml-3 mt-4 rounded-xl h-[90%] w-[40%]' />
                <div className='h-72 ml-3 flex flex-col justify-center'>
                <p className='text-black font-bold text-3xl'>{usuario.nome} </p>
                <p className='text-gray-600 font-bold text-1xl'>{usuario.email}</p>
                </div>
                </div>
                <div className='flex justify-end w-[50%] h-[50%]'>
                    <Link to='/carrinho'className='mr-5 mt-5'>
                    <button>CART</button>
                    </Link>
                </div>
            </div>


            <div className='mt-5 text-orange-600 font-bold text-3xl'>
                <p>Seus produtos</p>
            </div>
            <ListaProdutoPerfil />



        </div>
    );
}

export default Perfil;
