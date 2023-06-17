import Image from "next/image";
import imagemTeste from "../../../images/QuemSomos.jpg";
import Title from "../Utils/Title";

export default function QuemSomos() {
  return (
    <section
      id="QuemSomos"
      className="bg-slate-50 grid md:grid-cols-2 overflow-hidden"
    >
      <div className="py-16 px-4 md:px-0 space-y-8 md:w-96 mx-auto">
        <div className="space-y-3 flex flex-col items-start">
          <Title title={"QUEM SOMOS"} />
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>
        <p className="text-xl font-thin">
          Nós nos espelhamos na Zurich Seguradora, então numa pesquisa no google
          veio o nome Zunic, e foi paixão à primeira vista. O nome evoca
          integridade, otimismo e confiança, grandes valores presentes em nós.
        </p>

        <p className="text-xl font-thin">
          A <strong className="font-bold">NOSSA MISSÃO</strong> é inspirar você que vive no “piloto automático” a
          deixar sua marca de amor na vida das pessoas por meio do seguro. <br />
          O <strong className="font-bold">NOSSO PROPÓSITO</strong>  é te ajudar a focar no que realmente importa, com:
          amor, segurança, transparência, inovação e união das famílias. <br />
          A  <strong className="font-bold">NOSSA VISÃO</strong> é ser referência em soluções de seguros nacionalmente, por meio
          de um crescimento contínuo e sustentável.
        </p>
      </div>
      <Image
        src={imagemTeste}
        alt="Imagem de teste"
        className="h-full object-cover"
      />
    </section>
  );
}
