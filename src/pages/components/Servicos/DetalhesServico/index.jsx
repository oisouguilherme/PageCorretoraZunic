import Image from "next/image";
import Title from "../../Utils/Title";
import imagemTeste from '../../../../images/imagemteste.avif'

export default function DetalhesServico({style, title, paragrafo}){
  return (
    <div className={`grid gap-8 grid-cols-1 sm:grid-cols-2 lg:px-52 py-16 ${style}`} >
      <div className={`space-y-8 px-8 ${style}`}>
        <div className="flex flex-col items-start space-y-2">
          <Title title={title} />
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>

        <p className="font- text-2xl pb-12">
          {paragrafo}
        </p>
        
        <a className="bg-vermelho hover:bg-red-600 px-8 py-4 rounded-md font-bold text-white" href="#">ENTRE EM CONTATO</a>

      </div>
      <div>
        <Image src={imagemTeste} alt="Testando Imagem" className="h-full object-cover" />
      </div>
    </div>
  );
}