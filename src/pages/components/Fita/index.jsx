export default function Fita(){
  return(
    <div className="bg-vermelho flex justify-center items-center py-12 flex-wrap gap-12 text-white">
      <div className="font-bold text-center space-y-3 w-52"  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
        <p className="text-6xl">06</p>
        <p className="text-2xl">Anos de <br /> mercado</p>
      </div>
      <div className="border-2 h-24 hidden sm:flex" ></div>
      <div className="font-bold text-center space-y-3 w-52" data-aos="fade-down" data-aos-duration="2000" data-aos-delay="100">
        <p className="text-6xl ">+206</p>
        <p className="text-2xl">Opções de Seguros</p>
      </div>
      <div className="border-2 h-24 hidden sm:flex"></div>
      <div className="font-bold text-center space-y-3 w-52"  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
        <p className="text-6xl ">+ 2 mil</p>
        <p className="text-2xl">Dores de cabeça evitadas</p>
      </div>
    </div>
  )
}