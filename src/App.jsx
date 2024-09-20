import MainScreen from './components/MainScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ResetPage from './components/ResetPage';
import EnterOTP from './components/EnterOTP';

import './index.css';
import './LoginPage.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path='/ResetPage' element={<ResetPage />} />
        <Route path='/EnterOTP' element={<EnterOTP />} />
      </Routes>
    </Router>
  );
}

export default App
