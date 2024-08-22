// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import Exam from './components/Exam';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/login" element={<Login />} />
        <Route path="/result" element={<div>Your results will be displayed here.</div>} />
      </Routes>
    </Router>
  );
}

export default App;
