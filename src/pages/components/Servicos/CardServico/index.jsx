import Image from "next/image";
import imagemTeste from '../../../../images/imagemteste.avif'

export function CardServico(){
  return(
    <div className="bg-cyan-50 w-96 mb-16">
      <Image src={imagemTeste} alt=""/>

      <div className="space-y-4 p-8">
        <h3 className="text-2xl font-bold">Seguro Auto, Residencial, Condomínio</h3>
        <p className="text-xl font-thin pb-16">Nós sabemos que, no carro e na casa, o mais importante é a segurança e tranquilidade, por isso, apresentaremos para nossos clientes, o seguro feito para facilitar o seu dia a dia e as melhores condições.</p>
        <a className="bg-red-500 flex justify-center mx-16 py-1 font-bold text-white duration-300 hover:bg-red-600" 
        href="#">Veja mais</a>
      </div>
    </div>
  )
}