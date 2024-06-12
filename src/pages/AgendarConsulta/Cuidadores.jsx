import { Link } from "react-router-dom"

import styles from "./Cuidadores.module.css"

const Cuidadores = () => {
  return (
    <div>
      Lista de Cuidadores

      <Link to='editarAnuncio'>Editar Anuncio</Link>
    </div>
  )
}

export default Cuidadores
