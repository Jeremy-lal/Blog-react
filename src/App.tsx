import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { Redirect } from 'react-router'
import Login from './pages/Login';
import Articles from './pages/Articles';
import Profil from './pages/Profil';
import Admin from './pages/Admin';
import ArticleDetails from './pages/ArticleDetails';
import NavBar from './components/NavBar';
import ArticleNew from './pages/ArticleNew';
import ArticleEdit from './pages/ArticleEdit';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/articles" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:id" element={<ArticleDetails />}></Route>

        {/* peotected routes user*/}
        <Route element={<RequireAuth allowedRoles={['user', 'admin']} />}>
          <Route path="/articles/new" element={<ArticleNew />}></Route>
          <Route path="/articles/:id/edit" element={<ArticleEdit />}></Route>
          <Route path="/profil" element={<Profil />}></Route>
        </Route>

        {/* peotected routes admin*/}
        <Route element={<RequireAuth allowedRoles={['admin']} />}>
          <Route path="/admin" element={<Admin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
