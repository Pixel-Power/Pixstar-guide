import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout1 from './Layouts/Layout1';
import Layout3 from './Layouts/Layout3';
import Main from './Pages/Main';
import RestaurantSearchResult from "./Pages/Restaurant-search-result";
import Login from './Pages/Login';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout1/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="restaurantsearchresult" element={<RestaurantSearchResult/>}/>
          </Route>
          <Route path="/" element={<Layout3/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="main" element={<Main/>}/>  
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;