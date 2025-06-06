import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
