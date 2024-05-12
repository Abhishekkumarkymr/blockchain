import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTransactionPage from './pages/createTransactionPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addTransaction" element={<CreateTransactionPage />} />
      </Routes>
    </div>
  );
}

export default App;//app
