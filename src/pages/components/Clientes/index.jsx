import Image from "next/image";
import imagemTeste from "../../../images/imagemteste.avif";

export function Clientes() {
  return (
    <div className="bg-white px-8 py-16 space-y-10 flex flex-col items-center">
      <div className="space-y-3 flex flex-col items-start">
          <h2 className="text-center text-cinza text-5xl font-bold ">
            CLIENTES
          </h2>
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>
      <div className="flex gap-8 justify-center flex-wrap">
        <div className="md:w-96">
          <Image src={imagemTeste} alt="Teste"/>
          <div className="p-2 space-y-1">
            <p className="text-2xl">
            &quot;Queria dar os parabéns a toda equipe Trader Brasil .. DEZ !&quot;
            </p>
            <p className="text-xl italic font-thin">-Carlos Arteman</p>
          </div>
        </div>
        <div className="md:w-96">
          <Image src={imagemTeste} alt="Teste" />
          <div className="p-2 space-y-1">
            <p className="text-2xl">
            &quot;Queria dar os parabéns a toda equipe Trader Brasil .. DEZ !&quot;
            </p>
            <p className="text-xl italic font-thin">-Carlos Arteman</p>
          </div>
        </div>
        <div className="md:w-96">
          <Image src={imagemTeste} alt="Teste" />
          <div className="p-2 space-y-1">
            <p className="text-2xl">
            &quot;Já era tempo de alguém colocar a sabedoria do Mercado mundial no melhor LIVRO de análise gráfica / técnica em português, e meu amigo Flávio Lemos o fez muito bem!&quot;
            </p>
            <p className="text-xl italic font-thin">-Carlos Arteman</p>
          </div>
        </div>
      </div>
    </div>
  );
}
