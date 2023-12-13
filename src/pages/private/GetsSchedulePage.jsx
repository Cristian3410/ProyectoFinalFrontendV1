import { useTasks } from "../../contexts/TasksContext"

function GetsSchedulePage(){

    const {getschedulesData, horarios,errors } = useTasks();

  const onsubmit = async () => {
      await getschedulesData();
  };

  
    return(
        <div>
          {
            errors.map((error,i)=>(
              <div key={i}>
                 {error}
              </div>
            ))
          }
        <button onClick={onsubmit}>validar horarios</button>
        <div>
            <div>
             {horarios ?(
              <div>
              {
                horarios.map((horario,index) => {
                return (
                  <ul key={index}>
                    <li>index:{index}</li>
                    <li>Dia:{horario.diaSemana}</li>
                    <li>Hora de entrada Asignada:{horario.horaEntradaAsignada}</li>
                    <li>Hora de salida Asignada:{horario.horaSalidAsignada}</li>
                    <li>Fecha:{horario.fecha}</li>
                  </ul>
                )  
                })
              }
              </div>
             ):(
              <p></p>
             )}
              </div>
         
        </div>
        </div>
    );
}


export default  GetsSchedulePage