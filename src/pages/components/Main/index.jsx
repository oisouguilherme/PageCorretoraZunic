import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';

export default function Main() {
  
  return (
    <section id="Home" className="body bg-no-repeat bg-cover bg-center ">
      <div className="text-center flex flex-col items-center justify-center gap-12 px-8 pt-44 lg:pt-64 xl:pt-80 bg-black bg-opacity-50 h-[1000px]">
        <h1 className="text-5xl text-white sm:text-7xl xl:w-1/2 font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .pauseFor(1500)
              .typeString('Deixe a sua marca de amor na vida das pessoas que você ama.')
              .pauseFor(500)
              .deleteChars(60)
              .typeString('Foque no que realmente importa.')
              .pauseFor(500)
              .deleteChars(40)
              .typeString('O que realmente importa para você?')
              .pauseFor(1000)
              .start();
            }}
          />
        </h1>
        <Link
          activeClass="active"
          className="cursor-pointer"
          to="Servicos"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className=" w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
