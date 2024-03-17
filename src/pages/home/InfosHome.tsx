import dob from "../../assets/DOB.png";

function InfosHome() {
    return (
      <>
          <div className="mt-5 grid grid-cols-2 items-center justify-center">
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
      </>
    );
  }
  
  export default InfosHome;