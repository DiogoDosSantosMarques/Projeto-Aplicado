import React from "react";
import { Link } from "react-router-dom";
import styles from "./CuidadorId.module.css"; 
import cuidador from '../../img/cuidador.avif'; 
import iconWhatsapp from '../../img/iconWhatsapp.png'; 
const CuidadorId = () => {
  const numeroWhatsApp = "+5548988180759";

  const formatarNumeroWhatsApp = (numero) => {
    // Remover caracteres não numéricos do número
    const numeroLimpo = numero.replace(/[^\d]/g, "");
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
          <p>Arisson Rodrigues é um cuidador dedicado e experiente, apaixonado por ajudar pessoas em suas necessidades diárias. Com formação em enfermagem e mais de 10 anos de prática no cuidado de idosos e pessoas com necessidades especiais, Arisson é conhecido por sua atenção meticulosa e seu carinho incondicional pelos pacientes.</p>
          <h3>Experiência</h3>
          <p>Com vasta experiência em cuidados domiciliares e institucionais, Arisson já trabalhou em diversas unidades de saúde em Florianópolis. Ele é especializado em cuidados paliativos e terapia ocupacional, sempre buscando proporcionar conforto e qualidade de vida aos seus pacientes.</p>
          <a href={formatarNumeroWhatsApp(numeroWhatsApp)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <img src={iconWhatsapp} alt="Ícone do WhatsApp" className="whatsapp-icon" />
              Contato via WhatsApp
            </a>
        </div>
      </div>

    </div>
  );
}
 
export default CuidadorId;
