import { Link } from "react-scroll";

export function Main() {
  return (
    <section
      id="Home"
      className="bg-[url('https://plus.unsplash.com/premium_photo-1671210388369-bdd351c5e221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-cover h-screen text-center flex flex-col items-center justify-center gap-12 px-8 pt-44 lg:pt-64 xl:pt-80"
    >
      <h1 className="text-5xl sm:text-7xl xl:w-1/2 font-bold">
        Proteja quem você ama de imprevistos e realize seus sonhos!
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
          stroke="currentColor"
          className=" w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
    </section>
  );
}
