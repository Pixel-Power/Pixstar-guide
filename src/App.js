import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout1 from "./Layouts/Layout1";
import Layout2 from "./Layouts/Layout2";
import Layout3 from "./Layouts/Layout3";
import Login from "./Pages/Login";
import SignUp from './Pages/SignUp';
import MyPage from './Pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout1/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
        </Route>

        <Route path='/login' element={<Layout2/>}>
        </Route>

        <Route path='/layout3' element={<Layout3/>}>
        </Route>

      </Routes>
    </BrowserRouter>
  ); 
}

export default App;