import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout1 from "./Layouts/Layout1";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
