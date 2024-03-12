import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
            <div className='w-full h-72 bg-orange-300 border-b-8'></div>
            <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
            <div className="mb-10 relative mt-[-6rem] mb-[-5rem] h-72 flex flex-col bg-green-500 text-white text-2xl items-center justify-center">
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.email}</p>
            </div>

            <div className='mb-5 text-orange-600 font-bold text-3xl'>
                <p>Seus produtos</p>
            </div>
            
            <ListaProdutoPerfil />
        </div>


    );
}

export default Perfil;
