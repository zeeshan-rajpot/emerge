import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./ScrollToTop";
import './App.css'
// import EmergeProfile from './Pages/Emerge Profile';
import Dashboard from './Pages/Dashboard';
import EmergeProfile from './Pages/Emerge Profile';
import Detail from './Pages/Detail profile/Detail';

function App() {
 

  return (
    <>
    <BrowserRouter  >
    {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/EmergeProfile" element={<EmergeProfile />} />
        <Route path="/Detail" element={<Detail />} />
        
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
