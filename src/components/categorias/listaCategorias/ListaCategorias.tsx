import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../service/Service";
import CardCategorias from "../cardCategorias/CardCategorias";
import Categoria from "../../../models/Categoria";
import { toastAlerta } from "../../../util/toastAlerta";
import { Link } from "react-router-dom";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [isRoot, setIsRoot] = useState(false);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    setIsRoot(usuario.email === "root@root.com");
  }, [usuario.email]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <div className="h-screen">
      <>
        {categorias.length === 0 ? (
          <div className="text-center">
            <ThreeDots
              visible={true}
              height="200"
              width="200"
              color="#7EAB88"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ display: "inline-block" }}
              wrapperClass="mx-auto"
            />
          </div>
        ) : (
          <div className=" w-[90%] mt-8 p-2 flex justify-between">
            <h1 className="text-laranja text-4xl ml-40">Categorias</h1>

            {isRoot && (
              <Link
                to={`/cadastroCategoria/`}
                className="w-[15%] ml-36 h-10 text-slate-100 bg-laranja hover:bg-laranjaEsc flex items-center justify-center rounded-xl"
              >
                <button className="font-bold text-1xl">+ nova categoria</button>
              </Link>
            )}
          </div>
        )}
        <div className="flex justify-center w-full py-24 px-4 lg:px-16">
          <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-50">
              {categorias.map((categoria) => (
                <>
                  <CardCategorias key={categoria.id} categoria={categoria} />
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ListaCategorias;
