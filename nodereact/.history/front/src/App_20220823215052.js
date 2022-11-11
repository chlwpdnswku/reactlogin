import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Register from './components/views/Register/Register';
import Auth from './hoc/auth';

const AuthenticPage = Auth({ LandingPage }, null, false);
const Login = Auth({ LandingPage }, false);
const RegisterPage = Auth({ Register }, false);

// Auth로 컴포넌트를 감싸줌
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={AuthenticPage} />
        <Route path='/login' element={Auth(<LoginPage />, false)} />
        <Route path='/register' element={Auth(<Register />, false)} />
      </Routes>
    </div>
  );
}

export default App;