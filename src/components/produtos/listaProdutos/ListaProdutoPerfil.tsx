import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../service/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import CardProdutoPerfil from '../cardProdutos/NovoCardProduto';

function ListaProdutoPerfil() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  return (
    <>
      {produtos.length === 0 && (
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
      )}
      <div className='m-6 mt-10 container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produto) => (
          <CardProdutoPerfil key={produto.id} prod={produto} usuario={usuario}/>
        ))}
      </div>
    </>
  );
}

export default ListaProdutoPerfil;
