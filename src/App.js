import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import Dashboard from "./pages/Dashboard";
import PersonaPage from "./pages/PersonaPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/Persona" element={<PersonaPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
