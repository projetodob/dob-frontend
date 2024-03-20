import DOB from "../../assets/DOB.png";
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

function Contato() {

  return (

    <div className="flex flex-col w-full h-screen mx-auto bg-slate-100">

      <div className="mt-20 mb-10 text-center text-3xl font-bold text-orange-800 sm:text-4xl">
        <p>ENTRE EM CONTATO COM OS DESENVOLVEDORES DO DOB</p>
      </div>

      <div id="container" className="w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row">

          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://avatars.githubusercontent.com/u/137649567?v=4"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-700">Eduardo Freitas</h2>
              <span className="block mb-5"></span>
              <div className="flex justify-center">
                <a href="https://github.com/EduFreitas2">
                  <GithubLogo
                    size={45}
                    weight='light'
                  />
                </a>
                <a href="https://www.linkedin.com/in/eduardo-freitas-do-nascimento/">
                  <LinkedinLogo
                    size={45}
                    weight='light'
                  />
                </a>
              </div>
            </div>
          </div>


          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://avatars.githubusercontent.com/u/151969059?v=4"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-700">Gustavo Almeida</h2>
              <span className="block mb-5"></span>
              <div className="flex justify-center">
                <a href="https://github.com/gkalmeida">
                  <GithubLogo
                    size={45}
                    weight='light'
                  />
                </a>
                <a href="https://www.linkedin.com/in/gkalmeida/">
                  <LinkedinLogo
                    size={45}
                    weight='light'
                  />
                </a>
              </div>
            </div>
          </div>


          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://avatars.githubusercontent.com/u/129013545?v=4"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-700">Leticia Rocha</h2>
              <span className="block mb-5"></span>
              <div className="flex justify-center">
                <a href="https://github.com/letssrockit">
                  <GithubLogo
                    size={45}
                    weight='light'
                  />
                </a>
                <a href="http://www.linkedin.com/in/leticiasrocha">
                  <LinkedinLogo
                    size={45}
                    weight='light'
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://avatars.githubusercontent.com/u/113372101?v=4"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-700">Verônica Freitas</h2>
              <span className="block mb-5"></span>
              <div className="flex justify-center">
                <a href="https://github.com/verofreitt">
                  <GithubLogo
                    size={45}
                    weight='light'
                  />
                </a>
                <a href="https://www.linkedin.com/in/verofreitt/">
                  <LinkedinLogo
                    size={45}
                    weight='light'
                  />
                </a>
              </div>
            </div>
          </div>


          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://avatars.githubusercontent.com/u/134935809?v=4"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-700">Vitória Helena</h2>
              <span className="block mb-5"></span>
              <div className="flex justify-center">
                <a href="https://github.com/VitoriaH1611">
                  <GithubLogo
                    size={45}
                    weight='light'
                  />
                </a>
                <a href="https://www.linkedin.com/in/vit%C3%B3ria-helena-webdeveloper55778/">
                  <LinkedinLogo
                    size={45}
                    weight='light'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Contato;

