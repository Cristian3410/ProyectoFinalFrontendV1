import React from "react";
import { useTasks } from "../../contexts/TasksContext";
import "../../public/styles/admin.css"



function AdminPage(){
    
 const {postExit,postEntry,markstart,markEnd} = useTasks();

    const handleEntry = () =>{
      postEntry()
    }
    const handleExit = () =>{
        postExit()
    }

    return(
       
    <div className="containerAdmin">
        <button onClick={handleEntry}className="BotonEntrada">Registar hora de entrada</button>
        <div>
          {markstart ?(
            <div className="RespuestaEntrada">
                <p>Su hora de entrada es a las {markstart}</p>
            </div>
          ):(
            <p>registre su hora de entrada</p>  
           )}
        </div>
        <button onClick={handleExit} className="BotonSalida">Registrar hora de salida</button>
        <div>
          {markEnd ?(
            <div className="RespuestaSalida">
                <p>Su hora de entrada es a las {markEnd}</p>
            </div>
          ):(
            <p>registre su hora de entrada</p>  
           )}
        </div>
    </div>
    )
}

export default AdminPage