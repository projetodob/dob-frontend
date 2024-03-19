import "./Home.css";
import "./HomeDeslogado.css";
import DeslogadoProdutos from "../../components/produtos/listaProdutos/ListaProdutoDeslogado";

function HomeDeslogadoPage3() {
  return (
    <>
    <div className="w-full">
      <div className="text-center">
        <h3 className="mb-14 mt-10 text-orange-500 text-5xl font-bold">
          Veja alguns produtos!
        </h3>
        <DeslogadoProdutos></DeslogadoProdutos>
      </div>
      </div>
    </>
  );
}
export default HomeDeslogadoPage3;
