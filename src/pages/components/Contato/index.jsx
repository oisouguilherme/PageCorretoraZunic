import Title from "../Utils/Title";
import InformacoesContato from "./InformacoesContato";

export default function Contato(){
  return (
    <div className="pb-16">
      <div className="flex flex-col items-center py-16 gap-2">
        <div className="space-y-3">
          <Title title={"CONTATO"} />
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-24 flex-wrap">
        <InformacoesContato 
          title={"Buritis - MG"}
          telefone1={"(38) 99260-9781"}
          telefone2={"-"}
          rua={"Rua Rio Grande do Sul Nº 81 - Centro"}
          email={"teste@gmail.com"}
        />
        <InformacoesContato 
          title={"Curvelo - MG"}
          telefone1={"(38) 99808-7277"}
          telefone2={"(38) 99921-4750"}
          rua={"Rua Benjamin Constant Nº 164 - Centro"}
          email={"teste@gmail.com"}
        />
      </div>
    </div>
  );
}