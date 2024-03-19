import "./Home.css";
import "./HomeDeslogado.css";

function HomeDeslogadoPage1() {
  return (
    <>
      <div className="w-screen">
        <div className="pt-10 bg-gradient-to-b  pb-32 grid items-center justify-items-center grid-cols-3  md:grid-cols-3">
          <div className="grid grid-cols-3 col-span-2 w-full">
            <div className="grid items-center justify-items-center col-span-3">
              <h2 className="mb-6 ml-6 text-orange-500 text-5xl font-bold">
                Comece aqui o seu negócio!
              </h2>
              <p className="ml-6 text-center text-1xl font-bold">
                O "Desenvolvendo o Bem - DOB" é um projeto inovador alinhado ao
                Objetivo de Desenvolvimento Sustentável 1 da ONU, (ODS 1):
                Erradicação da Pobreza. Aqui você terá a oportunidade de iniciar
                a sua jornada no mundo do empreendedorismo, anunciando os seus
                produtos e serviços.
              </p>
              <div className="mt-16 size-full  text-center ">
                <a href="/cadastro">
                  <button
                    className="items-center justify-items-center m-auto rounded-xl text-2xl text-white font-medium bg-verdeEsc hover:bg-verdeMusgo w-60 h-80 md:w-1/3 h-1/2 py-2 h-full"
                    type="submit"
                  >
                    Crie sua conta!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" ">
            <img
              src="./src/assets/dobsemfundo.png"
              alt=""
              className="size-80 pr-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeDeslogadoPage1;
