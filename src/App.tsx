import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Articles from './pages/Articles';
import Profil from './pages/Profil';
import Admin from './pages/Admin';
import ArticleDetails from './pages/ArticleDetails';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:id" element={<ArticleDetails />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
