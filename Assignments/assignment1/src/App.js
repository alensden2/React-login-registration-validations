import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import InventoryPage from "./pages/admin/inventory";
import Home from './pages/admin/home';
import Dashboard from './pages/admin/dashboard';
import Statistics from './pages/admin/statistics';
import Sales from './pages/admin/sales';
import Employees from './pages/admin/employees';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/" element={< Home />} />
      <Route path="/dashboard" element={< Dashboard />} />
      <Route path="/statistics" element={< Statistics />} />
      <Route path="/sales" element={< Sales />} />
      <Route path="/Employees" element={< Employees />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
