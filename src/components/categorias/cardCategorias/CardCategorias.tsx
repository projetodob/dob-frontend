import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import produtos from '../../../assets/Produtos.png'
import serviços from '../../../assets/Serviços.png'
import outros from '../../../assets/Outros.png'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {

  const { usuario } = useContext(AuthContext);

  const [isRoot, setIsRoot] = useState(false);

  useEffect(() => {

    setIsRoot(usuario.email === 'root@root.com');

  }, [usuario.email])

  let imagemURL: string;

  if (categoria.tipo === "Serviços") {
    imagemURL = serviços;
  } else if (categoria.tipo === "Produtos") {
    imagemURL = produtos;
  } else {
    imagemURL = outros;
  }

  return (
    <div className="relative group h-38 flex flex-col rounded-xl bg-verdeEsc bg-clip-border text-white shadow-md">
      <a href="#" className="block">
        <div className="h-28">
          <div
            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-verde rounded-xl justify-items-center align-middle">
            <img
              src={imagemURL}
              className="w-36 h-36 mt-6 m-auto"
              alt=""
              title=""
              loading="lazy"
              width="200"
              height="200"
            />
          </div>
        </div>
        <div className="p-4 z-10 w-[90%] flex flex-col relative left-[5%]">
          {isRoot && (
            <div className='flex'>
              <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-laranja hover:bg-laranjaEsc flex items-center justify-center py-2 rounded-xl'>
                <button>Editar</button>
              </Link>
              <Link to={`/deletarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-vermelhoEsc hover:bg-red-700 ml-2 flex items-center justify-center rounded-xl'>
                <button>Deletar</button>
              </Link>
            </div>
          )}
          <p
            className="mb-2 mt-4 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
            {categoria.tipo}
          </p>
        </div>
      </a>
    </div>
  )
}

export default CardCategorias;