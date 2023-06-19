import { Children } from "react";

export default function InformacoesContato({title,telefone1, telefone2, rua, email, endereço, children}) {
  return (
    <div className="w-96">
      <iframe
        src={endereço}
        width="100%"
        height="350"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="p-4">
        <div className="text-3xl font-bold text-cinza mb-4">
          <h2>{title}</h2>
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>
        <p className="text-xl font-bold">Telefone:</p>
        <p className="text-lg">{telefone1}</p>
        <p className="text-lg">{telefone2}</p>
        <p className="text-xl font-bold">Endereço:</p>
        <p className="text-lg">{rua}</p>
        <p className="text-xl font-bold">E-mail:</p>
        <p className="text-lg">{email}</p>

        {children}
      </div>
    </div>
  );
}
