import { useState } from 'react';
import Produto from '../../../models/Produto';

interface CardProdutosProps {
  prod: Produto;
  adicionarAoCarrinho: (produto: Produto) => void;
}

function CardProdutoHome({ prod, adicionarAoCarrinho }: CardProdutosProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-sm bg-white mb-7 rounded-lg shadow dark:bg-white dark:border-black-700 transition duration-300 ease-in-out transform hover:scale-105 hover:text-black-600 flex flex-col">
      <img className="w-full object-cover" src={prod.foto} alt="" />
      <div className="p-5 flex flex-col justify-between" style={{ height: 'calc(100% - 180px)' }}>
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">{prod.nome}</h5>
        <p className="mb-3 font-normal text-gray-900 dark:text-gray-400" style={{ maxHeight: showFullDescription ? 'none' : '2.6em', overflow: 'hidden' }}>{prod.descricao}</p>
        {prod.descricao.length > 150 && (
          <button onClick={toggleDescription} className="text-blue-500 hover:underline focus:outline-none">
            {showFullDescription ? 'Ver menos' : 'Ver mais'}
          </button>
        )}
        
        </div>
        <div className="flex flex-col mt-auto">
        <p className="mb-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-black">R$ {prod.preco}</p>
        <button onClick={() => adicionarAoCarrinho(prod)} className='w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Comprar</button>
        </div>
      </div>
    </div>

  )
}

export default CardProdutoHome;