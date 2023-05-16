import Title from "../Utils/Title";
import  CardServico from "./CardServico";

export default function Servicos(){
  return(
    <section id="Servicos" className="bg-white md:px-8">
      <div  className="flex flex-col items-center py-16 gap-2">
        <div className="space-y-3">
          <Title title={"SERVIÇOS"} />
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