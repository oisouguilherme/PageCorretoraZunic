import Header from "../components/Header";
import DetalhesServico from "../components/Servicos/DetalhesServico";
import seguroFamilia from '../../images/seguros/seguroFamiliar.jpg'
import seguroProfissional from '../../images/seguros/seguroProf.jpg'
import seguroEmpresarial from '../../images/seguros/seguroEmpresa.jpg'
import seguroAuto from '../../images/seguros/seguroAuto.jpg'

export default function ServicosPage() {
  return (
    <div>
      <Header />
      <div className="space-y-3 flex flex-col items-center">
        <h2 className="text-6xl text-cinza font-bold pt-12">SEGUROS</h2>
        <div className="w-24 h-2 bg-vermelho"></div>
      </div>
      <DetalhesServico
        image={seguroFamilia}
        title={"Seguro Familiar"}
        paragrafo={`
          A família é o nosso bem mais precioso que Deus pode nos dar, é o alicerce da vida, da esperança e do amor. Aqui na Zunic nós te ajudamos a planejar para que esse bem esteja sempre sob cuidados.
          Para isso, oferecemos Previdência Privada, Plano de Saúde, Seguro de Vida com Planejamento Sucessório dentre outros que estejam dentro do seu planejamento financeiro.
          A segurança completa que sua família precisa.
          Faça já o seu contato para iniciar o seu planejamento.
        `}
      />
      <DetalhesServico
        image={seguroProfissional}
        style={"bg-zinc-50 md:order-1"}
        title={"Seguro Profissional"}
        paragrafo={`
          Diversas atividades profissionais envolvem riscos inerentes a profissão. O seguro profissional foi desenvolvido para profissionais de diversas áreas e seu objetivo é protegê-lo de reclamações de terceiros decorrentes de falhas profissionais por erros e omissões.
          As coberturas garantem as perdas associadas à responsabilidade atribuída ao profissional em consequência da sua prestação de serviços, como custos de defesa, indenizações estipuladas em ações judiciais ou arbitrais contra o segurado, bem como valores decorrentes de acordos celebrados com a anuência prévia e por escrito da seguradora. Há também cobertura para danos morais e custos com restituição de imagem, dentre outros.
          Liberdade para dar o seu melhor no seu trabalho sem se sentir pressionado!
          Faça já o seu contato para a proteção da sua profissão.
        `}
      />
      <DetalhesServico
        image={seguroEmpresarial}
        title={"Seguro Empresarial"}
        paragrafo={`
        O seguro empresarial garante a proteção na medida certa para pequenas, médias e grandes empresas que atuam nos setores de comércio, indústria ou serviço.
        Esse seguro te dá tranquilidade para trabalhar sem se preocupar com imprevistos que possam parar o seu negócio. Essa é a melhor forma de você cuidar da sua maior fonte de receitas.        
        `}
      />
      <DetalhesServico
        image={seguroAuto}
        style={"bg-zinc-50 md:order-1"}
        title={"Seguro auto"}
        paragrafo={`
        O automóvel para muitos não é só um veículo de transporte, é também ferramenta de trabalho. Por isso é um patrimônio que precisa de cuidado. Por isso a importância do seguro auto com ampla cobertura.
        Nós oferecemos diversas opções de seguros que combinam com o seu estilo de vida e suas necessidades. Cuidamos do seu patrimônio. Temos as melhores soluções em seguros de carro, moto, caminhão ou táxi.         
        `}
      />
    </div>
  );
}