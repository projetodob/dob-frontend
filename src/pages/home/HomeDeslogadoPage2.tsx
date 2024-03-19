import "./Home.css";
import "./HomeDeslogado.css";

function HomeDeslogadoPage2() {
  return (
    <>
    <div className="w-full">
      <div className="px-10 py-10 grid bg-gradient-to-b from-orange-500 to-orange-800 items-center justify-items-center overflow-hidden  bg-orange-700">
        <div className="flex gap-10 flex-wrap items-centers text-center">
          <div className="  w-full h-80 md:w-60  rounded shadow-lg hover:bg-orange-800  ">
            <a href="/login">
              <div className="grid grid-rows-4 py-4 h-full ">
                <div className="font-bold text-center text-2xl mb-2">
                  Entre na sua Conta
                </div>
                <div className="grid row-span-2 items-center justify-items-center">
                  <div className="">
                    <img
                      className="text-justify size-24 items-center justify-items-center"
                      src="./src/assets/usericon.png"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <p className="ml-2 mr-2 font-bold text-white-700 text-base">
                    Entre em sua conta e fique por dentro das novidades!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className=" w-full h-80 md:w-60 rounded shadow-lg   ">
            <div className="grid grid-rows-4 py-4 h-full w-full">
              <div className="font-bold text-center text-2xl mb-2">
                Anuncie o seu produto ou serviço
              </div>
              <div className="grid row-span-2 items-center justify-items-center">
                <div className="">
                  <img
                    className=" size-24 text-center items-center justify-items-center"
                    src="./src/assets/formulario.png"
                    alt=""
                  />
                </div>
              </div>
              <div className=" text-justify">
                <p className="ml-2 mr-2 font-bold text-white-700 text-base">
                  Você poderá anunciar seus produtos e serviços para outras
                  pessoas contratarem
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full h-80 md:w-60    rounded shadow-lg ">
            <div className="grid grid-rows-4 py-4 h-full ">
              <div className="font-bold text-center text-2xl mb-2">
                Oportunidade de Negócio
              </div>
              <div className="grid row-span-2 items-center justify-items-center">
                <div className="">
                  <img
                    className="size-24 text-center items-center justify-items-center"
                    src="./src/assets/negocios.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-justify">
                <p className=" ml-2 mr-2 font-bold text-white-700 text-base">
                  Você também tem a possibilidade de comprar e contratar
                  serviços.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full h-80 md:w-60   rounded shadow-lg">
            <div className="grid grid-rows-4 py-4 h-full ">
              <div className=" font-bold text-center text-2xl mb-2">
                Sustentabilidade Econômica
              </div>
              <div className="grid row-span-2 items-center justify-items-center">
                <div className="">
                  <img
                    className="size-24 text-center items-center justify-items-center"
                    src="./src/assets/sustentabilidade.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-justify">
                <p className="ml-2 mr-2 font-bold text-base">
                  Com a sua ajuda, criaremos um mundo mais sustentável!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default HomeDeslogadoPage2;
