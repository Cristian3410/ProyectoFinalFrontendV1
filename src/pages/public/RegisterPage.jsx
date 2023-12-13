import {useForm} from "react-hook-form"
import { useAccess } from "../../contexts/AccessContex";
import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaIdCard } from "react-icons/fa";
import { FaPagelines } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { AiOutlineDingtalk } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import "../../public/styles/register.css"




function RegisterPage(){

    const { register,handleSubmit,formState:{errors}} = useForm();
    const {signup,isAuthenticated,errors:RegisterErrors} = useAccess();
    const navigate = useNavigate();

 

    useEffect(()=>{
     if(isAuthenticated) navigate("/admin")
    },[isAuthenticated])
    
    const hasFormErrors = Object.keys(errors).length > 0;

     
    const onSubmit = handleSubmit( async (values) => {
      signup(values)

        })

   

    return(
      <body className="body_Register">
        <main className={`wrapper_Register ${hasFormErrors ? "with-errors" : ""}`}>
           <span className="iconClose" onClick={() => navigate("/")}><IoClose />
           </span>
           
        {
          RegisterErrors.map((error,i)=> (
            <div key={i}>{error}</div>
          ))
        }
     <section className="form-Box-Register">
      <form onSubmit={onSubmit}>
      <h2>Registrarse</h2>
      <div className="input_container">
      <FaUser className="icon"/>
        <input type="text" 
        {...register("username",{required:true})}
         placeholder=""
        />
        <label className="labelclassUser">Usuario</label>
        </div>
        {
          errors.username &&(
            <p className="errosReactForm">
              El usuario es requerido
            </p>
          )
        }
         <div className="input_container">
         <RiLockPasswordFill className="icon"/>
        <input type="password"
        {...register("password",{required:true})}
        placeholder=""
        />
        <label className="password">Contraseña</label>
         </div>
        {

          errors.password &&(
            <p className="errosReactForm">
              La contraseña es requerida
            </p>
          )
        }
        <div className="input_container">
        <FaIdCard  className="icon"/>
        <input type="text"
        {...register('nombresApellidos',{required:true})}
        placeholder=""
        />
        <label className="labelclassName">Nombres y apellidos</label>
        </div>
         {
          errors.nombresApellidos &&(
            <p className="errosReactForm">
              los nombres y apellidos son requeridos
            </p>
          )
        }
        <div className="input_container">
        <FaPagelines className="icon" />
        <input type="number"
        {...register('edad',{required:true})}
        placeholder=""
        />
        <label className="labelclassAge">Edad</label>
        </div>
        {
          errors.edad &&(
            <p className="errosReactForm">
              La edad es requerida
            </p>
          )
        }
          
          <div className="input_container">
          <IoIosMail className="icon"/>
        <input type="email" 
         {...register("email",{required:true})}
         placeholder=""
        />
          <label className="labelclassEmail">Correo corporativo</label>
        </div>
         {
          errors.email &&(
            <p className="errosReactForm">
              El correo corporativo es requerido
            </p>
          )
        }
         
         <div className="input_container">
         <MdOutlineWork className="icon" />
        <input type="text"
        {...register("cargo",{required:true})}
        placeholder=""
        />
        <label className="labelclassCargo">Cargo laboral</label>
        </div>
        {
          errors.cargo &&(
            <p className="errosReactForm">
              El cargo es requerido
            </p>
          )
        }
        
        <div className="input_container">
        <AiOutlineDingtalk className="icon" />
        <input type="text"
        {...register("supervisor",{required:true})}
        placeholder=""
        />
        <label className="labelclassSuper">Supervisor de area</label>
        </div>
        {
          errors.supervisor &&(
            <p className="errosReactForm">
              El nombre del supervisor es requerido
            </p>
          )
        }
        <div className="recordar">
          <label><input type="checkbox"></input> Recordar</label> 
        </div>
        <button className="botonRegister" type="submit">
            Registrarse
        </button>
      </form>
      <footer>
        <p className="message">¿ya te encuentras registrado?</p>
    <Link to="/Login" className="enlaceLogin">Iniciar sesion</Link>
      </footer>
         </section>
        </main>
        </body>
      
    )
}



export default RegisterPage