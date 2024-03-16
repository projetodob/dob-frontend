import { Envelope, GithubLogo } from '@phosphor-icons/react';

function Footer() {

  const handleButtonClick = () => {
    window.open('https://github.com/projetodob');
  };

  return (
    <>
      <div className="flex justify-center bg-laranjaEsc text-white">
        <div className="container flex flex-col items-center py-4">
          <div className="p-4 text-center">
            <p className='text-white font-bold'>© 2024 Copyright: Desenvolvendo o Bem</p>
          </div>
          <div className='mb-2 flex justify-center w-full'>
            <div className='mr-3 cursor-pointer'>
              <GithubLogo
                size={48}
                weight='light'
                onClick={handleButtonClick} />
            </div>
            <div className='ml-3'>
              <a href="mailto:projetointegradordob@gmail.com">
                <Envelope
                  size={48}
                  weight='light'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;