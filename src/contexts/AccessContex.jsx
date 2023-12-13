import {createContext,useState,useContext, useEffect} from "react"
import Cookies from "js-cookie"
import {RegisterPost,LoginPost,verityTokenRequest} from "../api/fetch.js"



export const AccessContext = createContext();

   

export const useAccess = () =>{
const context = useContext(AccessContext)
if(!context){
    throw new Error("el useAccess deberia estar dentro de un AccessProvider")
}
return context;
}


export const AccessProvider = ({children}) => {
    
    
    
    const[user,setUser] = useState(null)
    const[isAuthenticated,setIsAuthenticated] = useState(false)
    const [errors,setErrors] = useState([]);
    const [loading,setLoading] = useState(true)
    const [hasErrors,setHasErrors]  = useState(false)

 useEffect(()=>{
    if(errors.length>0){
        const timer = setTimeout(()=>{
            setErrors([]);
        },5000)
        return () => clearTimeout(timer)
    }
 },[errors])


  


    const signup = async (user) =>{

        try{
        const res = await RegisterPost(user)

        if(res.status === 200){
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)


        }else{
            console.log(res.data);
            setErrors(res.data)
        }
        
    }catch(error){
        console.log(error)
        

    }
    }


    const signin = async (user) => {
        try{
            const res = await LoginPost(user)
    
            if(res.status === 200){
                console.log(res.data)
                setUser(res.data)
                setIsAuthenticated(true)
    
            }else{
                console.log(res.data);
                setErrors(res.data)
            }
            
        }catch(error){
            console.log(error)
            
    
        }
        }

    
    

    const logout = () => {
        Cookies.remove("token")
        setUser(null)
        setIsAuthenticated(false)
    }


    useEffect(() => {
        const checkLogin = async () => {

        try{
            const {token} = Cookies.get();
            if(token){
                const res = await verityTokenRequest(token)
                setIsAuthenticated(true)
                setUser(res.data)

            }else{
                setIsAuthenticated(false)
            }
        }catch (error){
            console.error("error en la verificacion del token", error)
        }finally{
            setLoading(false)
        }

        };
        checkLogin();
      }, []);

      
   
   

    return(
         <AccessContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors,
            signin,
            loading,
            logout
         }}>
            {children}
         </AccessContext.Provider>
    )
}