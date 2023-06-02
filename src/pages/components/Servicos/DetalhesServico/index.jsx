import Image from "next/image";
import Title from "../../Utils/Title";

export default function DetalhesServico({style, title, paragrafo, image}){
  return (
    <div className={`grid gap-8 grid-cols-1 md:grid-cols-2 xl:px-52 py-16 ${style}`} >
      <div className={`space-y-8 px-8 ${style}`}>
        <div className="flex flex-col items-start space-y-2">
          <Title title={title} />
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>

        <p className="font- text-2xl pb-12">
          {paragrafo}
        </p>
        
        <a className="bg-vermelho hover:bg-red-600 px-8 py-4 rounded-md font-bold text-white" target="_blank" href="https://wa.me/5538992609781">ENTRE EM CONTATO</a>

      </div>
      <div>
        <Image src={image} alt="Testando Imagem" className="h-full object-cover" />
      </div>
    </div>
  );
}