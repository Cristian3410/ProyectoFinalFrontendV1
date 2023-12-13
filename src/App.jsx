import {HashRouter as Router ,Routes,Route} from "react-router-dom"
import RegisterPage from "./pages/public/RegisterPage"
import LoginPage from "./pages/public/LoginPage"
import AdminPage from "./pages/private/AdminPage"
import { AccessProvider } from "./contexts/AccessContex"
import GetsSchedulePage from "./pages/private/GetsSchedulePage"
import HomePage from "./pages/public/HomePage"
import HelpPage from "./pages/public/HelpPage"
import ContactPage from "./pages/public/ContactPage"
import HistoryPage from "./pages/public/HistoryPage"
import SuggestionsPage from "./pages/public/suggestionsPage"
import ProtectedRoute from "./protectedRoute"
import { TaskProvider } from "./contexts/TasksContext"
import NavBar from "./components/Navbar"


function App ( ){
return(
   <AccessProvider>
      <TaskProvider>
   <Router>
   <NavBar/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/help" element={<HelpPage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/history" element ={<HistoryPage/>}/>
    <Route path="/suggestions" element ={<SuggestionsPage/>}/>

    <Route element={<ProtectedRoute/>}>
    <Route path="/admin" element={<AdminPage/>}/>
    <Route path="/getSchedule" element={<GetsSchedulePage/>}/>
    </Route>
   </Routes>
   </Router>
   </TaskProvider>
   </AccessProvider>
)
}


export default App