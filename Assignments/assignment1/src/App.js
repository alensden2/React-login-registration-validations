import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import InventoryPage from "./pages/admin/inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
