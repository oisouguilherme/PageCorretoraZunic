export default function InformacoesContato() {
  return (
    <div className="w-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d804.4040245338871!2d-40.26526921639359!3d-20.19986437748968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81ff8f965b951%3A0x59471c5710963b3f!2sPizzaria%20Papa%20Tudo!5e0!3m2!1spt-BR!2sbr!4v1684256453216!5m2!1spt-BR!2sbr"
        width="100%"
        height="350"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="p-4">
        <div className="text-3xl font-bold text-cinza mb-4">
          <h2>Informações</h2>
          <div className="w-24 h-2 bg-vermelho"></div>
        </div>
        <p className="text-xl font-bold">Telefone:</p>
        <p className="text-lg">(11) 2386-4080</p>
        <p className="text-xl font-bold">Endereço:</p>
        <p className="text-lg">Rua Joaquim Floriano 466/ SL 702</p>
        <p className="text-xl font-bold">E-mail:</p>
        <p className="text-lg">seguros@traderbrasil.com</p>

        <a
          href="#"
          className="flex items-center justify-center bg-green-500 py-3 rounded-xl text-white font-bold text-xl gap-3 mt-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          Whatsapp
        </a>
      </div>
    </div>
  );
}
