import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>

        <NavLink to='/'>

         To Care

        </NavLink>

        <ul>

        <li>

        <NavLink to='/'>

        Home

        </NavLink>


        </li>


        <li>

        <NavLink to='/cuidadores'>

        Agendar Consulta

        </NavLink>


       </li>


        <li>

    <NavLink to='/anuncio'>

    Anuncio

    </NavLink>


    </li>


        <li>

        <NavLink to='/login'>

        Login

        </NavLink>


        </li>


            <li>

            <NavLink to='/cadastro'>

            Cadastro

            </NavLink>


            </li>

        </ul>
      
    </nav>
  )
}

export default NavBar
