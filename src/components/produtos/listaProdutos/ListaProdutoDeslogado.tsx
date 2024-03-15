import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar, buscarDeslogado} from '../../../service/Service';
import CardProduto from '../cardProdutos/CardProdutos';
import { toastAlerta } from '../../../util/toastAlerta';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext';

function DeslogadoProdutos() {

 
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { adicionarProdutoAoCarrinho } = useContext(CarrinhoContext);
  
    const navigate = useNavigate();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    async function buscarProdutos() {
      try {
        await buscarDeslogado('/produtos', setProdutos, 
        );
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        }
      }
    }
  
    useEffect(() => {
      buscarProdutos();
    }, [produtos.length]);
  
    function adicionarAoCarrinho(produto: Produto) {
      adicionarProdutoAoCarrinho(produto);
    }
  
    return (
      <>
        {produtos.length === 0 && (
           <div className="text-center">
           <ThreeDots
             visible={true}
             height="200"
             width="200"
             color="#7EAB88"
             radius="9"
             ariaLabel="three-dots-loading"
             wrapperStyle={{ display: 'inline-block' }}
             wrapperClass="mx-auto"
           />
         </div>
        )}
        <div className='mt-8 container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {produtos.map((produto) => (
            <CardProduto key={produto.id} prod={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
          ))}
        </div>
      </>
    );
  }


export default DeslogadoProdutos;