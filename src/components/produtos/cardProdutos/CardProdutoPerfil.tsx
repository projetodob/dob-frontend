import { useState } from "react";
import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import Usuario from "../../../models/Usuario";

interface CardProdutosProps {
  prod: Produto;
  usuario: Usuario;
}

function CardProdutoPerfil({ prod, usuario }: CardProdutosProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (prod.usuario?.id === usuario.id) {
    return (
      <div className="max-w-sm bg-white mb-7 rounded-lg shadow dark:bg-white dark:border-black-700 transition duration-300 ease-in-out transform hover:scale-105 hover:text-black-600 flex flex-col">
        <a href="#">
          <img className="w-full h-64 object-cover" src={prod.foto} alt="" />
        </a>
        <div
          className="p-5 flex flex-col justify-between"
          style={{ height: "calc(100% - 180px)" }}
        >
          <div className="h-auto">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                {prod.nome}
              </h5>
            </a>
            <p
              className="mb-3 font-normal text-gray-900 dark:text-gray-400"
              style={{
                maxHeight: showFullDescription ? "none" : "2.6em",
                overflow: "hidden",
              }}
            >
              {prod.descricao}
            </p>
            {prod.descricao.length > 150 && (
              <button
                onClick={toggleDescription}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {showFullDescription ? "Ver menos" : "Ver mais"}
              </button>
            )}
          </div>
          <div className="flex flex-col mt-auto">
            <p className="mb-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-black">
              R$ {prod.preco.toFixed(2)}
            </p>
            <p className="mb-3 font-bold text-gray-900 dark:text-gray-400">
              {prod.categoria?.tipo}
            </p>
            <div className="mb-3 flex justify-start">
              <Link
                to={`/editarProduto/${prod.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-laranjaEsc rounded-xl hover:bg-laranja focus:ring-4 focus:outline-none"
              >
                <button>Editar</button>
              </Link>
              <Link
                to={`/deletarProduto/${prod.id}`}
                className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-vermelhoEsc rounded-xl hover:bg-red-400 "
              >
                <button>Deletar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default CardProdutoPerfil;
