import Image from 'next/image';
import { useState } from 'react';
import { Link as LinkScroll} from 'react-scroll'
import Link  from 'next/link'
import logo from '../../../images/logo.png'
export default function Header (){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <section
      id="Nav"
      className="w-full flex justify-between items-center z-50 bg-gray-200 py-8 lg:px-24 sm:px-12 px-2"
    >
      <div className="cursor-pointer w-52 md:w-72 xl:w-80">
        <Link href="/">
          <Image src={logo} alt="Logo Zunic Corretora de seguros" />
        </Link>
      </div>
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
            <li className="cursor-pointer hover:text-vermelho duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-vermelho duration-300">
              <LinkScroll
                activeClass="active"
                to="Servicos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Serviços
              </LinkScroll>
            </li>
            <li className="cursor-pointer hover:text-vermelho duration-300">
              <LinkScroll
                activeClass="active"
                to="QuemSomos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Quem Somos
              </LinkScroll>
            </li>
            <li className="cursor-pointer hover:text-vermelho duration-300">
              <LinkScroll
                activeClass="active"
                to="Seguradoras"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Seguradoras
              </LinkScroll>
            </li>
            <li className="cursor-pointer hover:text-vermelho duration-300">
              <LinkScroll
                activeClass="active"
                to="Contatos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Contatos
              </LinkScroll>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block">
        <ul className="flex space-x-8 text-center items-center text-black font-bold text-xl xl:text-2xl">
          <li className="cursor-pointer hover:text-vermelho duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-vermelho duration-300">
            <LinkScroll
              activeClass="active"
              to="Servicos"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Serviços
            </LinkScroll>
          </li>
          <li className="cursor-pointer hover:text-vermelho duration-300">
            <LinkScroll
              activeClass="active"
              to="QuemSomos"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Quem Somos
            </LinkScroll>
          </li>
          <li className="cursor-pointer hover:text-vermelho duration-300">
            <LinkScroll
              activeClass="active"
              to="Seguradoras"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Seguradoras
            </LinkScroll>
          </li>
          <li className="cursor-pointer hover:text-vermelho duration-300">
            <LinkScroll
              activeClass="active"
              to="Contatos"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contatos
            </LinkScroll>
          </li>
        </ul>
      </div>
      <div className="hamburger lg:hidden" onClick={toggleMenu}>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </div>
    </section>
  );
};

