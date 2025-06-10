import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import Dashboard from "./pages/Dashboard";
import PersonaPage from "./pages/PersonaPage";
import DashboardPage from "./pages/DashboardPage";
import CreateAccount from "./pages/CreateAccount";
import CreateAccountPageTwo from "./pages/CreateAccountPageTwo";
import SignUpCompletedPage from "./pages/SignUpCompletedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/completeSignUp" element={<CreateAccountPageTwo />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Persona" element={<PersonaPage />}/>
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/signUpcompleted" element={<SignUpCompletedPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
