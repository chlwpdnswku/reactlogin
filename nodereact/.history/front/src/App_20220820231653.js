import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='expenses' element={<Expenses />} />
          <Route path='invoices' element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
