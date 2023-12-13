import "../public/styles/Nav.css"
import {Link,useNavigate} from "react-router-dom"
import {useAccess} from "../contexts/AccessContex.jsx"
import logo from "../public/images/Logo.png"

function NavBar(){

    const {isAuthenticated,logout,user} = useAccess();
    const navigate = useNavigate();
  

    return(
        <header>
          <img src={logo} alt="logo" className="logo"/>
          <nav>
         <ul>
        {isAuthenticated ?(
        <>
        <ul className="container">
       <li className="Usuarios">
        Bienvenido:{user.username}
         </li>
         <li className="Horarios">
            <Link to="/getSchedule">Consultar Horarios</Link>
         </li>
         <li className="logout">
            <button  to="/" onClick={()=>{
                logout();
            }}>Logout</button>
         </li>
         </ul>
          </>

        ):(
    
       <ul className="listaNavegacionPublica">
         <li>
            <Link to="/">Inicio</Link>
         </li>
         <li>
            <Link to="/help">Ayuda</Link>
         </li>
         <li>
            <Link to="/contact">Contactanos</Link>
         </li>
         <li>
            <Link to="/history">Nuestra historia</Link>
         </li>
         <li>
            <Link to="/Suggestions">Sugerencias</Link>
         </li>
         <button className="BotonAccesso" onClick={()=>{navigate("/login")}}>Acceder</button>
       </ul>
        )}
         </ul>
        </nav>
        </header>
    )
}



export default NavBar
