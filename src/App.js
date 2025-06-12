import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
// import Dashboard from "./pages/Dashboard";
import PersonaPage from "./pages/PersonaPage";
import DashboardPage from "./pages/DashboardPage";
import CreateAccount from "./pages/CreateAccount";
import CreateAccountPageTwo from "./pages/CreateAccountPageTwo";
import SignUpCompletedPage from "./pages/SignUpCompletedPage";
import MarketPage from "./pages/MarketPage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/completeSignUp" element={<CreateAccountPageTwo />} />
         <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/Persona" element={<PersonaPage />}/>
        {/* <Route path="/Dashboard" element={<DashboardPage />} /> */}
        <Route path="/signUpcompleted" element={<SignUpCompletedPage />} />
        <Route path="/market" element={<MarketPage />}/>
        <Route path="/Portfolio" element={<PortfolioPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
