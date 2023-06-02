import Title from "../Utils/Title";
import  CardServico from "./CardServico";
import seguroFamilia from '../../../images/seguros/seguroFamiliar.jpg'
import seguroProfissional from '../../../images/seguros/seguroProf.jpg'
import seguroEmpresarial from '../../../images/seguros/seguroEmpresa.jpg'
import seguroAuto from '../../../images/seguros/seguroAuto.jpg'

export default function Servicos(){
  return (
    <section id="Servicos" className="bg-white md:px-8">
      <div className="flex flex-col items-center py-16 gap-2">
        <div className="space-y-3">
          <Title title={"SERVIÇOS"} />
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>
      </div>
      <div className="flex gap-10 justify-center flex-wrap lg:px-24">
        <CardServico
          images={seguroFamilia}
          title={"Seguro Familiar"}
          paragrafo={`A família é o nosso bem mais precioso que Deus pode nos dar, é o alicerce da vida, da esperança e do amor. Aqui na Zunic nós te ajudamos a planejar para que esse bem esteja sempre sob cuidados.`}
        />
        <CardServico images={seguroProfissional} title={"Seguro Profissional"} paragrafo={`Diversas atividades profissionais envolvem riscos inerentes a profissão. O seguro profissional foi desenvolvido para profissionais de diversas áreas e seu objetivo é protegê-lo de reclamações de terceiros decorrentes de falhas profissionais por erros e omissões.`}/>
        <CardServico images={seguroEmpresarial} title={"Seguro empresarial"} paragrafo={`O seguro empresarial garante a proteção na medida certa para pequenas, médias e grandes empresas que atuam nos setores de comércio, indústria ou serviço.`}/>
        <CardServico images={seguroAuto} title={"Seguro auto"} paragrafo={`O automóvel para muitos não é só um veículo de transporte, é também ferramenta de trabalho. Por isso é um patrimônio que precisa de cuidado. Por isso a importância do seguro auto com ampla cobertura.`}/>
      </div>
    </section>
  );
}