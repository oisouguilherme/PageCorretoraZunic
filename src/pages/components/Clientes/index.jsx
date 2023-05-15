import Image from "next/image";
import imagemTeste from "../../../images/imagemteste.avif";

export function Clientes() {
  return (
    <div className="bg-white px-8 py-16 space-y-10">
      <h2 className="text-center md:text-5xl text-4xl font-bold">CLIENTES</h2>
      <div className="flex gap-8 justify-center flex-wrap">
        <div className="w-96">
          <Image src={imagemTeste} alt="" />
          <div className="p-2 space-y-1">
            <p className="text-2xl">
              "Queria dar os parabéns a toda equipe Trader Brasil .. DEZ !"
            </p>
            <p className="text-xl italic font-thin">-Carlos Arteman</p>
          </div>
        </div>
        <div className="w-96">
          <Image src={imagemTeste} alt="" />
          <div className="p-2 space-y-1">
            <p className="text-2xl">
              "Queria dar os parabéns a toda equipe Trader Brasil .. DEZ !"
            </p>
            <p className="text-xl italic font-thin">-Carlos Arteman</p>
          </div>
        </div>
        <div className="w-96">
          <Image src={imagemTeste} alt="" />
          <div className="p-2 space-y-1">
            <p className="text-2xl">
            “Já era tempo de alguém colocar a sabedoria do Mercado mundial no melhor LIVRO de análise gráfica / técnica em português, e meu amigo Flávio Lemos o fez muito bem!"
            </p>
            <p className="text-xl italic font-thin">-Carlos Arteman</p>
          </div>
        </div>
      </div>
    </div>
  );
}
