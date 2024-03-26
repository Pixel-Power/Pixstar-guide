import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout1 from './Layouts/Layout1';
import Layout3 from './Layouts/Layout3';
import Main from './Pages/Main';
import RestaurantSearchResult from "./Pages/Restaurant-search-result";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import MyPage from './Pages/MyPage';
import RestaurantDetail from './Pages/Restaurant-detail';
import ReservationDetail from './Pages/MyPage-reservation-detail';
import Reservation from './Pages/MyPage-reservation';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout1/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="restaurantsearchresult" element={<RestaurantSearchResult/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Route>

          <Route path="/" element={<Layout3/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/restaurantdetail" element={<RestaurantDetail/>}/>
            <Route path='reservationdetail' element={<ReservationDetail/>}/>
            <Route path='/mypage' element={<MyPage/>}/>
            <Route path='reservation' element={<Reservation/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;