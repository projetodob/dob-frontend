import { useState } from 'react';
import { useCarrinho } from '../../contexts/CarrinhoContext';

function CardCarrinho({ produto }) {

    const [quantidade, setQuantidade] = useState(1);

    const incrementarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const decrementarQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    const { carrinho, removerProdutoDoCarrinho } = useCarrinho();

    const handleClickRemover = (produtoId) => {
        removerProdutoDoCarrinho(produtoId);
    };

    return (
        <div>

            <div className="mx-auto max-w-6xl md:flex md:space-x-6 ">

                <div className="rounded-lg md:w-2/3">
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img src={produto.foto} alt="product-image" className="w-full rounded-lg sm:w-40" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                                <h2 className="text-lg font-bold text-gray-900">{produto.nome}</h2>
                                <p className="mt-1 text-xs text-gray-700">{produto.descricao}</p>
                            </div>
                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div className="flex items-center border-gray-100">
                                    <span
                                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                        onClick={decrementarQuantidade}
                                    >
                                        -
                                    </span>
                                    <input
                                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                        value={quantidade}
                                        min="1"
                                        readOnly
                                    />
                                    <span
                                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                        onClick={incrementarQuantidade}
                                    >
                                        +
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <p className="text-sm">R$ {produto.preco.toFixed(2)}</p>
                                    <svg onClick={() => handleClickRemover(produto.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default CardCarrinho;