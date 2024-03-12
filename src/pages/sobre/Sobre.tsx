import pobreza from "../../assets/pobreza.jpg"
import "./Sobre.css";

function Sobre() {
  return (
    <div className="bg-gray-100 container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-justify max-w-lg">
          <h2 className="text-center text-3xl font-extrabold text-orange-700 sm:text-4xl">
            SOBRE NÓS
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Desenvolvendo o Bem é muito mais do que um projeto, é uma iniciativa
            inovadora e impactante dedicada à erradicação da pobreza.
            Comprometidos com o Objetivo de Desenvolvimento Sustentável 1 (ODS
            1): Erradicação da Pobreza, nossa missão central é criar uma
            plataforma de comércio online que visa conectar comunidades carentes
            a oportunidades econômicas sustentáveis, impulsionando a inclusão
            econômica e também a promoção de negócios justos.
            <br></br>
            <br></br>
            Nossa visão vai além de uma simples plataforma. Buscamos construir
            pontes entre empreendedores locais e consumidores conscientes,
            fomentando um ciclo de desenvolvimento. Acreditamos que o acesso a
            oportunidades econômicas é a chave para quebrar o ciclo de pobreza e
            proporcionar um impacto duradouro na vida de pessoas carentes.
            <br></br>
            <br></br>
            Ao unir tecnologia e sustentabilidade, visamos vidas e inspirar
            mudanças significativas em comunidades em situação de
            vulnerabilidade econômica. Junte-se a nós nessa jornada de
            construção de um futuro mais justo, equitativo e sustentável para
            todos!
          </p>
        </div>
        <div className="mt-12 md:mt-0">
          <img
            src={pobreza}
            alt="About Us Image"
            className="object-cover rounded-lg shadow-md"
          ></img>
        </div>
      </div>

      <div className="mt-20 text-center text-3xl font-bold text-orange-800 sm:text-4xl">
        <p>QUEM SÃO NOSSOS DOB's</p>
      </div>

      <div className="justify-center mt-10 flex w-full gap-8">
        <div text-center>
          <img
            className="block mx-auto w-48 h-48 rounded-full object-cover sm:mx-0 sm:shrink-0"
            src="https://media.licdn.com/dms/image/D4D03AQEZdpRj2GLHMQ/profile-displayphoto-shrink_800_800/0/1705975530151?e=1715212800&v=beta&t=hks3lLljE_Ag0yn_Xx57YgezCBvz4xOnCQcs1WoKmnI"
            alt="Woman's Face"
          />
          <div className="space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-center text-lg text-black font-semibold">Eduardo Freitas</p>
              <p className="text-center text-orange-500 font-medium hover:text-orange-700">
          <a href="URL_DO_LINKEDIN" target="_blank" rel="noopener noreferrer">
            Venha me conhecer
          </a>
        </p>
            </div>
          </div>
        </div>

        <div>
          <img
            className="block mx-auto w-48 h-48 rounded-full object-cover sm:mx-0 sm:shrink-0"
            src="https://media.licdn.com/dms/image/D4E03AQEaXldnUbUenA/profile-displayphoto-shrink_800_800/0/1709668063169?e=1715212800&v=beta&t=GRMCIVYQjIiUtraLt9GlURRctzV2Rh2-3egTuYLP15E"
            alt="Woman's Face"
          />
          <div className="space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-center text-lg text-black font-semibold">Gustavo Almeida</p>
              <p className="text-center text-orange-500 font-medium hover:text-orange-700">
          <a href="https://www.linkedin.com/in/gustavokarl/" target="_blank" rel="noopener noreferrer">
            Venha me conhecer
          </a>
        </p>
            </div>
          </div>
        </div>

        <div >
          <img
            className="block mx-auto w-48 h-48 rounded-full object-cover sm:mx-0 sm:shrink-0"
            src="https://avatars.githubusercontent.com/u/129013545?v=4"
            alt="Woman's Face"
          />
          <div className="space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-center text-lg text-black font-semibold">Leticia Rocha</p>
              <p className="text-center text-orange-500 font-medium hover:text-orange-700">
          <a href="http://www.linkedin.com/in/leticiasrocha" target="_blank" rel="noopener noreferrer">
            Venha me conhecer
          </a>
        </p>
            </div>
          </div>
        </div>

        <div>
          <img
            className="block mx-auto w-48 h-48 rounded-full object-cover sm:mx-0 sm:shrink-0"
            src="https://media.licdn.com/dms/image/D4D03AQE9jWY5LHDwsQ/profile-displayphoto-shrink_800_800/0/1709154486816?e=1715212800&v=beta&t=WVtJS0NUBuVkGuuMolAPF972H_XlW3y8KF2LLHFD-4I"
            alt="Woman's Face"
          />
          <div className="space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-center text-lg text-black font-semibold">Verônica Freitas</p>
              <p className="text-center text-orange-500 font-medium hover:text-orange-700">
          <a href="https://www.linkedin.com/in/verofreitt/" target="_blank" rel="noopener noreferrer">
            Venha me conhecer
          </a>
        </p>
            </div>
          </div>
        </div>

        <div>
          <img
            className="block mx-auto w-48 h-48 rounded-full object-cover sm:mx-0 sm:shrink-0"
            src="https://media.licdn.com/dms/image/D4D03AQEYsAqyWpVbJw/profile-displayphoto-shrink_800_800/0/1701131164837?e=1715212800&v=beta&t=fg9RXqTzgHxs86n8ULWArIWIXYJxDPRqZFnphMmc5B4"
            alt="Woman's Face"
          />
          <div className="space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-center text-lg text-black font-semibold">Vitória Helena</p>
              <p className="text-center text-orange-500 font-medium hover:text-orange-700">
          <a href="https://www.linkedin.com/in/vit%C3%B3ria-helena-webdeveloper55778/" target="_blank" rel="noopener noreferrer">
            Venha me conhecer
          </a>
        </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
