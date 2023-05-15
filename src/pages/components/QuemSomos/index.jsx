import Image from "next/image";
import imagemTeste from "../../../images/QuemSomos.jpg";

export function QuemSomos() {
  return (
    <section id="QuemSomos" className="bg-slate-50 grid md:grid-cols-2 md:max-h-[800px] overflow-hidden">
      <div className="py-16 px-4 md:px-0 space-y-8 md:w-96 mx-auto">
        <div className="space-y-3 flex flex-col items-start">
          <h2 className="text-center text-cinza text-5xl font-bold ">
            QUEM SOMOS
          </h2>
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>
        <p className="text-xl font-thin">
          Há 21 anos, no Rio de Janeiro, surgia a Trader Brasil Escola de
          Finanças & Negócios com a missão de promover a democratização da
          Educação Financeira. Ao longo dos últimos anos, tornou-se referência
          em educação para investidores, operadores, traders,operadores,
          gestores, financeiros, bancários enfim o setor financeiro em geral
          tendo sua equipe participado de programas televisivos, comissões de
          educação financeira, palestras para CVM, Governo Federal, lançado
          livros e participado das bancas de provas para certificação do mercado
          financeiro.
        </p>

        <p className="text-xl font-thin">
          Esta foi a origem da Trader Brasil SEGUROS que hoje que atua
          exclusivamente como agente autônomo de investimentos devidamente
          registrado na SUSEP.
        </p>
      </div>
        <Image src={imagemTeste} alt="Imagem de teste" className="h-full object-cover" />
    </section>
  );
}
