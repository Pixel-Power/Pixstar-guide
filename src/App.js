import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layouts/Layout1';
import Main from './Pages/Main';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;