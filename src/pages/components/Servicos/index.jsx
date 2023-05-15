import { CardServico } from "./CardServico";

export function Servicos(){
  return(
    <section id="Servicos" className="bg-white md:px-8">
      <h2 className="text-center text-5xl font-bold py-16">SERVIÇOS</h2>
      <div className="flex gap-10 justify-center flex-wrap">
        <CardServico/>
        <CardServico/>
        <CardServico/>
      </div>
    </section>
  )
}