import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import Employees from './pages/Employees';
import EmployeeAdd from './pages/EmployeeAdd';
import NotFound from './pages/NotFound';
import EmployeeDetails from './pages/EmployeeDetails';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { AuthProvider } from "./utils/auth";
import RequireAuth from "./components/RequireAuth";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/employee" element={<RequireAuth><Employees /></RequireAuth>} >
            <Route path="add" element={<EmployeeAdd />} />
            <Route path="details" element={<EmployeeDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ul>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/register">register</Link></li>
          <li><Link to="/employee/add">employee add</Link></li>
        </ul>
      </AuthProvider>
    </div>
  );
}

export default App;
