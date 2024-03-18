import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./ScrollToTop";
import './App.css'
// import EmergeProfile from './Pages/Emerge Profile';
import Dashboard from './Pages/Dashboard';
import EmergeProfile from './Pages/Emerge Profile';
import Detail from './Pages/Detail profile/Detail';
import Creatoprofile from './Pages/Creator profile';
import Feedback from './Pages/Feedback/Feedback';
import DetailPageFeedback from './Pages/Feedback/Detailpage/DetailPage';
import Notification from './Pages/Notification/Notification';
import Live from './Pages/Live/Live';
import ProductListing from './Pages/Product Listing/ProductListing';
import ListingApproval from './Pages/Listing Approvals/ListingApproval';
import Order from './Pages/order/Order';
import Chat from './Pages/Private Chat/Chat';
import ChatMain from './Pages/Private Chat/ChatMain';


function App() {
 

  return (
    <>
    <BrowserRouter  >
    {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/EmergeProfile" element={<EmergeProfile />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Creatoprofile" element={<Creatoprofile />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/DetailPageFeedback" element={<DetailPageFeedback/>} />
        <Route path="/Notification" element={<Notification/>} />
        <Route path="/Live" element={<Live/>} />
        <Route path="/ProductListing" element={<ProductListing/>} />
        <Route path="/ListingApproval" element={<ListingApproval/>} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/Chat" element={<ChatMain />} />
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
