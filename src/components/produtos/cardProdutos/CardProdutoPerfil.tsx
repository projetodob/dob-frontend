import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import Usuario from '../../../models/Usuario';

interface CardProdutosProps {
  prod: Produto,
  usuario: Usuario
}

function CardProdutoPerfil({ prod, usuario }: CardProdutosProps,) {

  if (prod.usuario?.id == usuario.id) {

    return (
      <div className="h-32 w-full md:h-48 xl:h-56 rounded-xl ">
        <img className="w-full h-60 object-cover" src={prod.foto} alt="imagem do produto" />
        <div className='py-4'>
          <p className="mb-2 font-normal text-gray-900 dark:text-gray-400">{prod.nome}</p>
          <p className="mb-2 font-normal text-gray-900 dark:text-gray-400 max-w-full break-all">{prod.descricao}</p>
          <p className="mb-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-black">R$ {prod.preco.toFixed(2)}</p>
          <p className="font-bold text-gray-900 dark:text-gray-400">{prod.categoria?.tipo}</p>
        </div>
        <div>
          <Link to={`/editarProduto/${prod.id}`} className='
                inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-laranjaEsc rounded-xl hover:bg-laranja focus:ring-4 focus:outline-none'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarProduto/${prod.id}`} className='ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-vermelhoEsc rounded-xl hover:bg-red-400 '>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default CardProdutoPerfil;