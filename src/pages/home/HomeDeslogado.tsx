import dob from "../../assets/DOB.png";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import Sobre from "../sobre/Sobre";

import "./Home.css";
import "./HomeDeslogado.css";


function HomeDeslogado() {
  return (
    <>
      <div className="w-screen">
        <div className="pb-20 grid items-center justify-items-center grid-cols-3">
            <div className="grid grid-cols-3 col-span-2 ">
              <div className="grid items-center justify-items-center col-span-2">
                <h2 className="mb-6 ml-6 text-orange-500 text-5xl font-bold">Comece aqui o seu negócio!</h2>
                <p className="ml-6 text-justify text-1xl font-bold">
                  O "Desenvolvendo o Bem - DOB" é um projeto inovador alinhado ao Objetivo de Desenvolvimento
                  Sustentável 1 da ONU, (ODS 1): Erradicação da Pobreza. Aqui você terá a oportunidade de iniciar a sua jornada
                  no mundo do empreendedorismo, anunciando os seus produtos e serviços.                  
                </p>
                <div className="mt-16 size-full  text-center ">
                <button className='items-center justify-items-center m-auto rounded-full text-2xl text-white font-medium bg-verdeEsc hover:bg-verdeMusgo w-1/3 h-1/2 py-2 h-full' type='submit'>
             Crie sua conta!
            </button></div>
              </div>
            </div>
            <div className=" ">
              <img
                src='./src/assets/doblogin3.png'
                alt=""
                className="size-80 
                                                        pr-0"
              />
            </div>
            
        </div>

        <div className=" mb-10 justify-items-center overflow-hidden grid grid-cols-4 md:grid-flow-row gap-4 bg-orange-700 h-80">
       <div className="  rounded shadow-lg hover:bg-blue-600">  
       <a href="/login">   
              <div className="grid grid-rows-4 py-4 h-full ">
                <div className="font-bold text-center text-2xl mb-2">Entre na sua Conta</div>
                <div className="grid row-span-2 items-center justify-items-center">
                  <div className=""><img className="size-24 text-center items-center justify-items-center"src='./src/assets/usericon.png' alt="" />
                  </div>
                </div>
                <div>
                <p className="ml-2 mr-2 font-bold text-white-700 text-base"> 
                 Entre em sua conta e inicie sua jornada!
                </p>
                </div>              
              </div>
              </a>
            </div>
            <div className="   rounded shadow-lg">     
              <div className="grid grid-rows-4 py-4 h-full ">
                <div className="font-bold text-center text-2xl mb-2">Anuncie o seu produto ou serviço</div>
                <div className="grid row-span-2 items-center justify-items-center">
                  <div className=""><img className="size-24 text-center items-center justify-items-center"src='./src/assets/formulario.png' alt="" />
                  </div>
                </div>
                <div className="">
                <p className="ml-2 mr-2 font-bold text-white-700 text-base"> 
                  Você poderá anunciar seus produtos e serviços para outras pessoas contratarem
                </p>
                </div>              
              </div>
            </div>
            <div className="  rounded shadow-lg">     
              <div className="grid grid-rows-4 py-4 h-full ">
                <div className="text-gray-50 font-bold text-center text-2xl mb-2">Oportunidades de Negócios</div>
                <div className="grid row-span-2 items-center justify-items-center">
                  <div className=""><img className="size-24 text-center items-center justify-items-center"src='./src/assets/negocios.png' alt="" />
                  </div>
                </div>
                <div>
                <p className=" ml-2 mr-2 font-bold text-white-700 text-base"> 
                 Você também tem a possibilidade de comprar e contratar serviços de outras pessoas.
                </p>
                </div>              
              </div>
            </div>
            <div className=" rounded shadow-lg">     
              <div className="grid grid-rows-4 py-4 h-full ">
                <div className=" font-bold text-center text-2xl mb-2">Sustentabilidade Econômica</div>
                <div className="grid row-span-2 items-center justify-items-center">
                  <div className=""><img className="size-24 text-center items-center justify-items-center"src='./src/assets/sustentabilidade.png' alt="" />
                  </div>
                </div>
                <div>
                <p className="ml-2 mr-2 font-bold text-base"> 
                 Com a sua ajuda, criaremos um mundo mais sustentável!
                </p>
                </div>              
              </div>
            </div>
          </div>
          
        <div id="sobre"><Sobre></Sobre></div>
        
      
      </div>
    </>
  );
}
export default HomeDeslogado;
