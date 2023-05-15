import ButtonCima from "../components/ButtonCima";
import Clientes from "../components/Clientes";
import Fita from "../components/Fita";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main  from "../components/Main";
import QuemSomos from "../components/QuemSomos";
import Seguradoras from "../components/Seguradoras";
import Servicos from "../components/Servicos";

export default function LandingPage(){
  return(
    <div>
      <Header/>
      <Main/>
      <Servicos/>
      <QuemSomos/>
      <Fita/>
      <Seguradoras/>
      <Clientes/>
      <ButtonCima/>
      <Footer/>
    </div>
  )
}