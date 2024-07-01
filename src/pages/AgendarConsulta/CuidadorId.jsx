import React from "react";
import { Link } from "react-router-dom";
import styles from "./CuidadorId.module.css"; // Estilos específicos para a página do cuidador
import cuidador from '../../img/cuidador.avif'; // Importe a imagem correta do cuidador
import iconWhatsapp from '../../img/iconWhatsapp.png'; // Importe a imagem do icone do WhatsApp
const CuidadorId = () => {
  // Número de telefone do cuidador no formato internacional com código do país
  const numeroWhatsApp = "+5548988180759";

  // Função para formatar o número do WhatsApp para a URL correta
  const formatarNumeroWhatsApp = (numero) => {
    // Remover caracteres não numéricos do número
    const numeroLimpo = numero.replace(/[^\d]/g, "");
    // Montar a URL do WhatsApp com o número formatado
    return `https://wa.me/${numeroLimpo}`;
  };

  return (
    <div className={styles.container}>

      <div className={styles.cuidadorPerfil}>
        <img src={cuidador} alt="Foto do Cuidador" />
        <div className={styles.conteudo}>
          <h3>Arisson Rodrigues</h3>
          <p>Idade: 35 anos</p>
          <p>Bairro: Centro</p>
          <h3>Biografia</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet neque nec ex scelerisque, eu condimentum velit tincidunt.</p>
          <h3>Experiência</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit eros. Proin sodales nunc ac ultricies interdum.</p>
          <a href={formatarNumeroWhatsApp(numeroWhatsApp)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <img src={iconWhatsapp} alt="Ícone do WhatsApp" className="whatsapp-icon" />
              Contato via WhatsApp
            </a>
          <Link to='/editarAnuncio' className="btn">Editar Anúncio</Link>
        </div>
      </div>

    </div>
  );
}

export default CuidadorId;
