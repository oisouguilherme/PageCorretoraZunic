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
        <InformacoesContato/>
        <InformacoesContato/>
      </div>
    </div>
  );
}