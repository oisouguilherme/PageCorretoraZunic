import Image from "next/image";
import Link from "next/link";

export default function CardServico({title,paragrafo, images}){
  return(
    <div className="bg-slate-50 w-96 mb-16">
      <Image src={images} alt="Tipos de serviços prestados"/>

      <div className="space-y-4 p-8">
        <h3 className="text-2xl font-bold text-cinza">{title}</h3>
        <p className="text-xl font-thin pb-16 h-64">{paragrafo}</p>
        <Link className="bg-vermelho flex justify-center mx-16 py-2 font-bold text-white text-xl duration-300 hover:bg-red-600" 
        href="/servicos">Veja mais</Link>
      </div>
    </div>
  )
}