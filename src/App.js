import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout1 from './Layouts/Layout1';
import Main from './Pages/Main';
import RestaurantSearchDetail from "./Pages/Restaurant-search-result";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout1/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="restaurantsearchresult" element={<RestaurantSearchResult/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;