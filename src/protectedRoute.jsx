import React from "react";
import { useAccess } from "./contexts/AccessContex";
import {Navigate, Outlet} from "react-router-dom"


function ProtectedRoute(){
    const {loading,isAuthenticated} = useAccess();
    if(loading) return <h1> Loading ... </h1>
    if(!loading && !isAuthenticated) return <Navigate to ="/login" replace/>

    return <Outlet />;
}


export default ProtectedRoute