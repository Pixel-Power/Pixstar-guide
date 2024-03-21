import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Main from './Pages/Main';
import Layout from './Layouts/Layout3';
import Login from './Pages/Login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/login" element={<Login/>}/>
        
        

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
