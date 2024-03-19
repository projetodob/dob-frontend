import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import Usuario from '../../../models/Usuario';

interface CardProdutosProps {
  prod: Produto,
  usuario: Usuario
}

function CardProdutoPerfil({ prod, usuario }: CardProdutosProps) {
  if (prod.usuario?.id === usuario.id) {
    return (
      <div className="mb-4">
        <div className="w-80">
          <div className="mr-10 ml-10 h-auto rounded-xl overflow-hidden bg-white shadow-md transition duration-500 ease-in-out transform flex flex-col">
            <img className="w-full h-64 object-cover" src={prod.foto} alt="imagem do produto" />
            <div className='p-4 flex-grow'>
              <p className="mb-2 font-bold text-gray-900 dark:text-black-400">{prod.nome}</p>
              <p className="mb-2 font-normal text-gray-900 dark:text-gray-400 max-w-full break-all">{prod.descricao}</p>
              <p className="mb-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-black">R$ {prod.preco.toFixed(2)}</p>
              <p className="font-bold text-gray-900 dark:text-gray-400">{prod.categoria?.tipo}</p>
            </div>
            <div className='ml-4 mb-7 flex justify-start'>
              <Link to={`/editarProduto/${prod.id}`} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-laranjaEsc rounded-xl hover:bg-laranja focus:ring-4 focus:outline-none'>
                <button>Editar</button>
              </Link>
              <Link to={`/deletarProduto/${prod.id}`} className='ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-vermelhoEsc rounded-xl hover:bg-red-400 '>
                <button>Deletar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null;
}

export default CardProdutoPerfil;
