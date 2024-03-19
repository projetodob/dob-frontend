import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import ListaProdutoPerfil from '../../components/produtos/listaProdutos/ListaProdutoPerfil';
import carrinho from "../../assets/carrinho.png";
import categoria from "../../assets/categoria.png";


function Perfil() {

    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
            navigate("/login")
        }
    }, [usuario.token]);

    let imagemCarrinho: string;
    imagemCarrinho = carrinho;

    let imagemCategoria: string;
    imagemCategoria = categoria;

    return (
        <div>

            <div className='flex justify-between h-48 bg-laranja'>
                <div className='flex'>
                    <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='ml-12 mt-4 h-40 w-40 rounded-full' />
                    <div className='ml-5 flex flex-col justify-center items-center'>
                        <p className='text-white font-bold text-3xl'>{usuario.nome}</p>
                        <p className='text-white text-1xl'>{usuario.email}</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <Link to='/carrinho' className='mr-5 mt-5'>
                        <img
                            src={imagemCarrinho}
                            alt="carrinho"
                            loading="lazy"
                            width="30"
                            height="30"
                        />
                    </Link>
                    <Link to='/categorias' className='mr-5 mt-5'>
                        <img
                            src={imagemCategoria}
                            alt="carrinho"
                            loading="lazy"
                            width="30"
                            height="30"
                        />
                    </Link>
                </div>
            </div>

            <div className='mt-5 ml-10 px-10 text-laranjaEsc font-bold text-3xl'>
                <p>SEUS PRODUTOS</p>
            </div>
            <ListaProdutoPerfil />
        </div>
    );
}

export default Perfil;
