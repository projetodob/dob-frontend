import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import CardCarrinho from './CardCarrinho';

function Carrinho() {
    
    const { carrinho } = useContext(CarrinhoContext);

    return (
        <div className="h-screen bg-gray-100 pt-10">
            <h1 className="mb-5 text-center text-2xl font-bold">ITENS DO CARRINHO</h1>
            {carrinho.map((produto) => (
                <CardCarrinho key={produto.id} produto={produto} />
            ))}
           
        </div>
    );
}

export default Carrinho;