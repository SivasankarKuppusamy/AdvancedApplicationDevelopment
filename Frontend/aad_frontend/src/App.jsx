import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import UserDashboard from './Components/UserDashboard';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Loans from './Components/Loans';
import NewApplication from './Components/NewApplication';
import Documents from './Components/Documents';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const { pathname } = useLocation();
  const excludedPaths = ['/login', '/register','/','/user']; // Add paths you want to exclude here

  const shouldRenderSidebar = !excludedPaths.includes(pathname);

  return (
    <>
      <Navbar />
      {/* {shouldRenderSidebar && <Sidebar />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/new-application" element={<NewApplication />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </>
  );
}

export default App;
