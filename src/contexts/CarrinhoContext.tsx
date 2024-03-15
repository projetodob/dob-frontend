import { createContext, useState, useContext, ReactNode } from 'react';

interface Produto {
    id: number;
    nome: string;
    preco: number;
    foto: string;
}

interface CarrinhoContextType {
    carrinho: Produto[];
    adicionarProdutoAoCarrinho: (produto: Produto) => void;
    removerProdutoDoCarrinho: (produtoId: number) => void;
}

export const CarrinhoContext = createContext<CarrinhoContextType>({
    carrinho: [],
    adicionarProdutoAoCarrinho: () => { },
    removerProdutoDoCarrinho: () => { },
});

export const useCarrinho = () => {
    return useContext(CarrinhoContext);
};

interface CarrinhoProviderProps {
    children: ReactNode;
}

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {
    const [carrinho, setCarrinho] = useState<Produto[]>([]);

    const adicionarProdutoAoCarrinho = (produto: Produto) => {
        setCarrinho([...carrinho, produto]);
    };

    const removerProdutoDoCarrinho = (produtoId: number) => {
        const novoCarrinho = carrinho.filter((produto) => produto.id !== produtoId);
        setCarrinho(novoCarrinho);
    };

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarProdutoAoCarrinho, removerProdutoDoCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};