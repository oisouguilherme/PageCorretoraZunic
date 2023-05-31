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
          Uma promoção na carreira de Adailton, meu marido nos levou para
          Buritis/MG, perto de Brasília, em 2017. Naquela época eu estava
          concluindo a Susep. E então percebi que em Buritis não tinha Corretora
          de seguros os seguros eram vendidos pelos bancos ou por corretores das
          cidades vizinhas. E foi aí que nasceu a Zunic, no dia 26/06/2017,
          inspirada na Zurich Seguradora, numa pesquisa no google veio Zunic e
          foi paixão à primeira vista. Não conhecíamos ninguém naquele lugar,
          mas aos poucos fomos nos familiarizando e conquistando o público e
          hoje já são quase 6 anos de história. 
        </p>

        <p className="text-xl font-thin">
          No meio da pandemia, 2020
          abrimos a nossa filial em Curvelo. O que poucas pessoas sabem é o que
          nossa equipe fez. Diante daquele desafio, muitos disseram que não
          havia o que fazer. Que restava esperar tudo passar e foi o que muitos
          fizeram e até desistiram e fecharam as portas. Mas nós não nos
          amedrontamos. Fomos a luta. E já somos duas unidades.
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
