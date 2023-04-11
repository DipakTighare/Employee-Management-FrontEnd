
import './App.css';
import Employee from './Component/Employee';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter ,Route, Routes} from "react-router-dom"
import Register_Form from './Component/Register_Form';
import Welcome from './Component/Welcome';
import Navbar from './Component/Navbar';
import EditEmployee from './Component/EditEmployee';
function App() {
  return (
  
<BrowserRouter>
<Navbar/>

< Routes>
                <Route exact path="/" element={<Welcome/>}></Route>
               <Route exact path="/show" element={<Employee/>}></Route>
               <Route exact path="/register" element={<Register_Form/>}></Route> 
               <Route exact path="/EditEmployee/:id" element={<EditEmployee/>}></Route> 

</Routes>
</BrowserRouter>
   
  );
}
export default App;
