import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import Dashboard from "./pages/Dashboard";
import PersonaPage from "./pages/PersonaPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/Persona" element={<PersonaPage />}/>
        <Route path="/Dashboard" element={<DashboardPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
