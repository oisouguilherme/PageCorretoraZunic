import  CardServico from "./CardServico";

export default function Servicos(){
  return(
    <section id="Servicos" className="bg-white md:px-8">
      <div  className="flex flex-col items-center py-16 gap-2">
        <div className="space-y-3">
          <h2 className="text-center text-cinza text-5xl font-bold ">SERVIÇOS</h2>
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        <CardServico/>
        <CardServico/>
        <CardServico/>
      </div>
    </section>
  )
}