import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../service/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import CardProdutoPerfil from '../cardProdutos/CardProdutoPerfil';

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
      <div className="w-full flex flex-col px-3 lg:px-10">
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-5 gap-3 py-10">
            {produtos.map((produto) => (
              <CardProdutoPerfil key={produto.id} prod={produto} usuario={usuario} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutoPerfil;
