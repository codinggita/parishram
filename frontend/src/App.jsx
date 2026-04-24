import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import StudentsManagement from './pages/StudentsManagement';
import TeachersManagement from './pages/TeachersManagement';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/signup" element={<AuthPage type="signup" />} />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/students" 
          element={
            <ProtectedRoute>
              <StudentsManagement />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/teachers" 
          element={
            <ProtectedRoute>
              <TeachersManagement />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
