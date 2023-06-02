import Title from "../Utils/Title";
import InformacoesContato from "./InformacoesContato";

export default function Contato(){
  return (
    <section id="Contatos" className="pb-16">
      <div className="flex flex-col items-center py-16 gap-2">
        <div className="space-y-3">
          <Title title={"CONTATO"} />
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-24 flex-wrap">
        <InformacoesContato 
          endereço={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.1454978593736!2d-46.42395071300888!3d-15.627514462509748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9356b3fc1acf80e9%3A0xc3fe80c8e64de81f!2sZunic%20Corretora%20de%20Seguros!5e0!3m2!1spt-BR!2sbr!4v1685707604893!5m2!1spt-BR!2sbr"}
          title={"Buritis - MG"}
          telefone1={"(38) 99260-9781"}
          telefone2={"-"}
          rua={"Rua Rio Grande do Sul Nº 81 - Centro"}
          email={"zunic.corretora@gmail.com"}
          linkzap={"https://wa.me/5538992609781"}
        />
        <InformacoesContato 
          endereço={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.12198898130933!2d-44.42760079121099!3d-18.755688829984063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9356b369ba75e4e9%3A0x79ecaf3df5de9bd7!2sZunic%20Corretora%20de%20Seguros!5e0!3m2!1spt-BR!2sbr!4v1685707492973!5m2!1spt-BR!2sbr"}
          title={"Curvelo - MG"}
          telefone1={"(38) 99808-7277"}
          telefone2={"(38) 99921-4750"}
          rua={"Rua Benjamin Constant Nº 164 - Centro"}
          email={"zunic.corretora@gmail.com"}
          linkzap={"https://wa.me/5538998087277"}
        />
      </div>
    </section>
  );
}