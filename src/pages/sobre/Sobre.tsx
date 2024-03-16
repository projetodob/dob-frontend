import pobreza from "../../assets/pobreza.jpg"
import "./Sobre.css";

function Sobre() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-justify max-w-lg bg-gray-100 rounded-lg p-6">
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
    </div>
  );
}

export default Sobre;
