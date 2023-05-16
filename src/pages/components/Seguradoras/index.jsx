import Title from "../Utils/Title";

export default function Seguradoras(){
  return(
    <section id="Seguradoras" className="bg-slate-50 flex flex-col items-center py-16 space-y-16 px-8">
      <div className="space-y-3 flex flex-col items-start">
        <Title title={"SEGURADORAS"} />
        <div className="w-24 h-2 bg-vermelho"></div>
        </div>
      <div className="flex items-end justify-center gap-8 flex-wrap">
        <div className="w-72 sm:w-96 h-44 bg-black">
        </div>
        <div className="w-72 sm:w-96 h-44 bg-black">
        </div>
        <div className="w-72 sm:w-96 h-44 bg-black">
        </div>
        <div className="w-72 sm:w-96 h-44 bg-black">
        </div>
        <div className="w-72 sm:w-96 h-44 bg-black">
        </div>
        <div className="w-72 sm:w-96 h-44 bg-black">
        </div>
      </div>
    </section>
  )
}