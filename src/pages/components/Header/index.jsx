import { useState } from 'react';
import { Link} from 'react-scroll'

export function Header (){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='Nav' className="w-full flex justify-between z-50 bg-gray-200 py-8 lg:px-32 md:px-12 px-8">
      <div className="text-xl font-bold">Logo</div>
      <div className="lg:hidden">
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed top-0 right-0 bottom-0 bg-white w-64 transform transition-transform ease-in-out duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="p-4 space-y-4">
            <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="Servicos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Serviços
              </Link>
            </li>
            <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="QuemSomos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Quem Somos
              </Link>
            </li>
            <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="Seguradoras"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Seguradoras
              </Link>
            </li>
            <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="Contatos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contatos
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-6 text-black font-medium text-xl">
          <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="Servicos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Serviços
              </Link>
            </li>
            <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="QuemSomos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Quem Somos
              </Link>
            </li>
            <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="Seguradoras"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Seguradoras
              </Link>
            </li>
            <li className='cursor-pointer hover:text-red-500 duration-300'>
              <Link
                activeClass="active"
                to="Contatos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contatos
              </Link>
            </li>
        </ul>
      </div>
      <div className="hamburger md:hidden" onClick={toggleMenu}>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </div>
    </section>
  );
};

