import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Form from './pages/Form';
import Login from './pages/Login';
// import ProtectedRoute from './components/Protectedroute';
import AdminDashboard from './pages/AdminDashboard';

function App() {

  return (
    <Router>
      <Routes>
        {/* Add more routes for other pages */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path='/form' element={<Form />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
    
  );
}

export default App;
