const apiURL = "http://localhost:3000/api"


export const getsSchedule = async () => {
   try{
    const response = await fetch(`${apiURL}/getsSchedule`,{    
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(),
        credentials:"include",
    
    });
     const data = await response.json();
     return {status:response.status,data:data}


   } catch(error){
    console.log("Error en la solicitud", error)
    return{status:500, data: null ,error:error.message}
   }
}



export const markEntry = () => {
    const url = `${apiURL}/markEntry`;
   return fetch(url,{
    method:"POST",
    credentials:"include",
    headers:{
        "content-Type":"application/json",

    },
   })
   .then(response =>{
    if (!response.ok){
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
   })
   .catch(error =>{
    console.error("error en la solicitud",error)
    throw error;
   })
}


export const markExit = () =>{
const url = `${apiURL}/markExit`
return fetch(url,{
    method:"POST",
    credentials:"include",
    headers:{
        "content-Type":"application/json",
    },
})
  .then(response =>{
  
    if(!response.ok){
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json()
  })
  .catch(error =>{
    console.error("error en la solicitud", error)
    throw error
  })
}