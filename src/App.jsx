import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import User from './pages/User';
import AddUser from './pages/AddUser';
import UserDetails from './pages/UserDetails';

function App() {

  return (
      <Router>
        <div className="app">
          <Header />
          <div className="footer">
            <Footer />
          </div>
          <div className="Route">
            <Routes>
              <Route path="users" element={<User/>} />
              <Route path="users/add" element={<AddUser/>} />
              <Route path="users/:id" element={<UserDetails/>} />
            </Routes>
          </div>
        </div>
      </Router>
  )
}

export default App
