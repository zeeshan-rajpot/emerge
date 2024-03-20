import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ScrollToTop from "./ScrollToTop";
import './App.css';
// import EmergeProfile from './Pages/Emerge Profile';
import Login from './Pages/LoginPage';
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
import Chatopen from './Pages/Private Chat/Chat.jsx';
import ChatMain from './Pages/Private Chat/ChatMain';
import Magzine from './Pages/Magzine/Magzine.jsx';
import Support from './Pages/Support/index.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop/> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/EmergeProfile' element={<EmergeProfile />} />
          <Route path='/Detail' element={<Detail />} />
          <Route path='/Creatoprofile' element={<Creatoprofile />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/DetailPageFeedback' element={<DetailPageFeedback />} />
          <Route path='/Notification' element={<Notification />} />
          <Route path='/Live' element={<Live />} />
          <Route path='/ProductListing' element={<ProductListing />} />
          <Route path='/ListingApproval' element={<ListingApproval />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/Magzine' element={<Magzine />} />
          <Route path='/ChatMain' element={<ChatMain />} />
          <Route path='/Chatopen' element={<Chatopen />} />
          <Route path='/Support' element={<Support />} />
          eeeeee
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
