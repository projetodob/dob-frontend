import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Produto from '../../../models/Produto';
import { toastAlerta } from '../../../util/toastAlerta';
import CardProdutoHomeDeslogado from '../cardProdutos/CardProdutoHomeDeslogado';
import { buscarDeslogado } from '../../../service/Service';

function DeslogadoProdutos() {

 
    const [produtos, setProdutos] = useState<Produto[]>([]);  

    async function buscarProdutos() {
      try {
        await buscarDeslogado('/produtos', setProdutos, 
        );
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
        }
      }
    }
  
    useEffect(() => {
      buscarProdutos();
    }, [produtos.length]);
  
  
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
            <CardProdutoHomeDeslogado key={produto.id} prod={produto} />
          ))}
        </div>
      </>
    );
  }


export default DeslogadoProdutos;