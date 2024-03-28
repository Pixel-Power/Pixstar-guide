import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout1 from './Layouts/Layout1';
import Main from './Pages/Main';
import RestaurantSearchResult from "./Pages/Restaurant-search-result";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import MyPage from './Pages/MyPage';
import RestaurantDetail from './Pages/Restaurant-detail';
import ReservationDetail from './Pages/MyPage-reservation-detail';
import ReservationDetailFake from './Pages/MyPage-reservation-detail-fake';
import Reservation from './Pages/MyPage-reservation';
import Layout2 from './Layouts/Layout2';
import Logout from './Pages/Logout';
import Layout3 from './Layouts/Layout3';
import Error from './Pages/Error';
import UseTerms from './Pages/UseTerms';
import Privacy from './Pages/Privacy';
import SiteMap from './Pages/SiteMap';
import Layout4 from './Layouts/Layout4';
import MD from './Pages/Md';
import CompanyInfo from './Pages/Company-info';


function App() {
  return (
    <BrowserRouter>
      <Routes>

      {/* 로그인 x, 사이드바 o */}
        <Route path="/" element={<Layout1 />}>
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="/restaurantsearchresult/:userCode" element={<RestaurantSearchResult />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/restaurantsearchresult" element={<RestaurantSearchResult />} />
          <Route path='/useterms' element={<UseTerms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/sitemap' element={<SiteMap />} />

        </Route>

      {/* 로그인 o, 사이드바 o */}
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Main />} />
          <Route path="main/:userCode" element={<Main />} />
          <Route path="/restaurantsearchresult/:userCode" element={<RestaurantSearchResult />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/mypage/:userCode' element={<MyPage />} />
          <Route path='reservation/:userCode' element={<Reservation />} />
          <Route path='/useterms' element={<UseTerms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/sitemap' element={<SiteMap />} />
          <Route path='/cancelmember' element={<CancelMember/>}/>
        </Route>

      {/* 로그인 x, 사이드바 x */}
        <Route path="/" element={<Layout3 />}>
          <Route path="/login" element={<Login />} />
          <Route path="/restaurantdetail" element={<RestaurantDetail />} />
          <Route path="companyinfo" element={<CompanyInfo/>}/>
        </Route>


      {/* 로그인 o, 사이드바 x */}
        <Route path="/" element={<Layout4/>}>
          <Route path='/mypage/:userCode' element={<MyPage/>}/>
          <Route path='reservation/:userCode' element={<Reservation/>}/>
          <Route path="/restaurantdetail/:userCode" element={<RestaurantDetail/>}/>
          <Route path='/reservationdetail/:userCode' element={<ReservationDetail/>}/>
          <Route path='/reservationdetailfake/:userCode' element={<ReservationDetailFake/>}/>
          <Route path='companyinfo/:userCode' element={<CompanyInfo/>}/>
        </Route>

        <Route path="/popup" element={<Md />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;