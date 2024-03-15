import dob from "../../assets/DOB.png";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";

import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <div
          className="grid grid-cols-2
            pt-20
            pb-20
            items-center
            justify-center"
        >
          <div
            className="flex flex-col 
                items-center
                justify-center
                space-y-10"
          >
            <div className="ml-20 mx-auto text-center">
              <div>
                <h2 className="text-orange-500 text-2xl font-bold">Comércio Justo!</h2>
                <p>
                  O "Desenvolvendo o Bem - DOB" é um projeto inovador voltado para a
                  erradicação da pobreza, alinhado ao Objetivo de Desenvolvimento
                  Sustentável 1 da ONU (ODS 1): Erradicação da Pobreza.
                </p>
              </div>
              <br></br>
              <div>
                <h2 className="text-orange-600 text-2xl font-bold">Oportunidades de Negócios!</h2>
                <p>
                  Queremos proporcionar oportunidades econômicas sustentáveis,
                  incentivando o empreendedorismo em comunidades carentes.
                </p>
              </div>
              <br />
              <div>
                <h2 className="text-orange-700 text-2xl font-bold">Sustentabilidade Econômica!</h2>
                <p>
                  Proporcionar uma fonte de renda sustentável para empreendedores
                  locais é a nossa missão.
                </p>
              </div>
            </div>
          </div>
          <div
            className=" flex items-center
                justify-center"
          >
            <div className=" ">
              <img
                src={dob}
                alt=""
                className="size-102 
                                                        pr-0"
              />
            </div>
          </div>
        </div>
        <div>
          <p className=" text-center font-extrabold text-orange-700 text-3xl">VENHA CONFERIR NOSSOS PRODUTOS</p>
        </div>
        <br />
        <ListaProdutos />
      </div>
      <div className="flex justify-around gap-4 ml-20">
              <ModalProduto />
            </div>
    </>
  );
}
export default Home;
