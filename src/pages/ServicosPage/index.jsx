import Header from "../components/Header";
import DetalhesServico from "../components/Servicos/DetalhesServico";


export default function ServicosPage() {
  return (
   <div>
    <Header/>
    <div className="space-y-3 flex flex-col items-center">
      <h2 className="text-6xl text-cinza font-bold pt-12">SEGUROS</h2>
      <div className="w-24 h-2 bg-vermelho"></div>
    </div>
    <DetalhesServico/>
    <DetalhesServico style={"bg-zinc-50 order-1"}/>
   </div>
  )
}