import { useEffect } from "react";
import ButtonCima from "../components/ButtonCima";
import Clientes from "../components/Clientes";
import Contato from "../components/Contato";
import Fita from "../components/Fita";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main  from "../components/Main";
import QuemSomos from "../components/QuemSomos";
import Seguradoras from "../components/Seguradoras";
import Servicos from "../components/Servicos";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LandingPage(){
  useEffect(() => {
    AOS.init();
  }, [])
  return(
    <div>
      <Header/>
      <Main/>
      <Servicos/>
      <QuemSomos/>
      <Fita/>
      <Seguradoras/>
      <Clientes/>
      <Contato/>
      <ButtonCima/>
      <Footer/>
    </div>
  )
}