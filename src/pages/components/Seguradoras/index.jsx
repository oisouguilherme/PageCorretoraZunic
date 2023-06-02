import Image from "next/image";
import Title from "../Utils/Title";
import logo1 from "../../../images/imgLogos/logo1.png";
import logo2 from "../../../images/imgLogos/logo2.png";
import logo3 from "../../../images/imgLogos/logo3.png";
import logo4 from "../../../images/imgLogos/logo4.png";
import logo5 from "../../../images/imgLogos/logo5.png";
import logo6 from "../../../images/imgLogos/logo6.jpg";
import logo7 from "../../../images/imgLogos/logo7.png";
import logo8 from "../../../images/imgLogos/logo8.png";
import logo9 from "../../../images/imgLogos/logo9.jpeg";
import logo10 from "../../../images/imgLogos/logo10.png";
import logo11 from "../../../images/imgLogos/logo11.jpg";
import logo12 from "../../../images/imgLogos/logo12.jpg";
import logo13 from "../../../images/imgLogos/logo13.png";
import logo14 from "../../../images/imgLogos/logo14.png";
import logo15 from "../../../images/imgLogos/logo15.png";
import logo16 from "../../../images/imgLogos/logo16.png";
import logo17 from "../../../images/imgLogos/logo17.png";

export default function Seguradoras() {
  return (
    <section
      id="Seguradoras"
      className="bg-slate-50 flex flex-col items-center py-16 space-y-16 px-8"
    >
      <div className="space-y-3 flex flex-col items-start">
        <Title title={"SEGURADORAS"} />
        <div className="w-24 h-2 bg-vermelho"></div>
      </div>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo1} width={200}/>
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo2} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo3} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo4} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo5} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo6} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo7} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo8} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo9} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo10} width={200} />
        </div>

      <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo11} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo12} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo13} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo14} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo15} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo16} width={200} />
        </div>

        <div className="w-72 flex items-center justify-center h-44">
          <Image src={logo17} width={200} />
        </div>
      </div>
    </section>
  );
}
