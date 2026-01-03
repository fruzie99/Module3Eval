import {Routes,Route} from "react-router-dom";
import { BrowserRouter
 } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import UpdateRestaurant from "./pages/UpdateRestaurant";
 

export default function App(){
  // console.log("hello");
  return(
    
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />



      <Route path="/customer/dashboard" element={<ProtectedRoute role="customer"><CustomerDashboard /></ProtectedRoute>} />



      <Route path="/update/:id" element={<ProtectedRoute role="admin"><UpdateRestaurant /></ProtectedRoute>} />



    </Routes>
    </BrowserRouter>
  )
}