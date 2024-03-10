import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./ScrollToTop";
import './App.css'
// import EmergeProfile from './Pages/Emerge Profile';
import Dashboard from './Pages/Dashboard';

function App() {
 

  return (
    <>
    <BrowserRouter  >
    {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
       
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
