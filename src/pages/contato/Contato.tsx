import DOB from "../../assets/DOB.png";

function Contato() {

  const handleButtonClick = () => {
    window.open('https://github.com/projetodob');
  };

  return (
    <div>

      <div className="flex min-h-[30rem] items-center justify-center">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative ml-5 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={DOB}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-6">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              SEJA PARCEIRO DESSA CAUSA
            </h4>
            <p className="mt-5 mb-5 block font-sans text-base text-justify font-normal leading-relaxed text-gray-700 antialiased">
              Se você deseja saber mais detalhes sobre o projeto ou contribuir, convidamos você a explorar nosso repositório no Github,
              onde compartilhamos informações detalhadas e o código-fonte. Caso prefira um contato direto, sinta-se à vontade para nos enviar uma mensagem por email.
            </p>
            <div className="flex">
              <a
                href="mailto:projetointegradordob@gmail.com"
                className="text-lg mb-2 font-bold bg-orange-500 text-white py-2 px-4 rounded transform hover:scale-110 motion-reduce:transform-none mr-5"
                type="button">
                Email
              </a>
              <button
                onClick={handleButtonClick}
                className="text-lg mb-2 font-bold bg-orange-500 text-white py-2 px-4 rounded transform hover:scale-110 motion-reduce:transform-none"
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contato;