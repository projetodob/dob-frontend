import Produto from '../../../models/Produto';

interface CardProdutosProps {
  prod: Produto;
  adicionarAoCarrinho: (produto: Produto) => void;
}

function CardProduto({ prod, adicionarAoCarrinho }: CardProdutosProps) {

  return (
    <div className="max-w-sm bg-white mb-7 rounded-lg shadow dark:bg-white dark:border-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:border-orange-500 hover:text-gray-600">
      <div className="flex w-full bg-orange-400 py-2 px-4 items-center gap-4">
        <img src={prod.usuario?.foto} className='h-12 rounded-full' alt="" />
        <h3 className='text-lg font-bold text-center uppercase '>{prod.usuario?.nome}</h3>
      </div>
      <a href="#">
        <img className=" w-full h-90" src={prod.foto} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{prod.nome}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{prod.descricao}</p>
        <p className="mb-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-black">R$ {prod.preco}</p>
        <p className="mb-3 font-bold text-gray-900 dark:text-gray-400">{prod.categoria?.tipo}</p>
        <div>


          <button onClick={() => adicionarAoCarrinho(prod)} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Comprar</button>

        </div>
      </div>
    </div>

  )
}

export default CardProduto;