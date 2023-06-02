import Title from "../Utils/Title";

export default function Clientes() {
  return (
    <div className="bg-white px-8 py-16 space-y-10 flex flex-col items-center">
      <div className="space-y-3 flex flex-col items-start">
        <Title title={"CLIENTES"} />
        <div className="w-24 h-2 bg-vermelho"></div>
        </div>
      <div className="flex gap-8 justify-center flex-wrap">
          <div className="p-4 space-y-1 md:w-96 w-full bg-zinc-50 flex flex-col justify-center shadow-xl">
            <p className="text-2xl">
            &quot;Estou muito satisfeito com o atendimento. Três anos com a mesma qualidade de atendimento.&quot;
            </p>
            <p className="text-xl italic font-thin">-Luiz Claudio</p>
          </div>
          <div className="p-4 space-y-1 md:w-96 w-full bg-zinc-50 flex flex-col justify-center shadow-xl">
            <p className="text-2xl">
            &quot;Profissionalismo, qualidade e valor&quot;
            </p>
            <p className="text-xl italic font-thin">-Warley Fernandes</p>
          </div>
          <div className="p-4 space-y-1 md:w-96 w-full bg-zinc-50 flex flex-col justify-center shadow-xl">
            <p className="text-2xl">
            &quot;Espetáculo o atendimento. Show de bola Aline.&quot;
            </p>
            <p className="text-xl italic font-thin">-Luiz Mario</p>
          </div>
      </div>
    </div>
  );
}
