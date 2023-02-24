import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import { FindJobs } from './pages/FindJobs';
import MarketPlace from './pages/MarketPlace';
import MarketPlaceDetails from './pages/MarketPlace';
import Market from './pages/Market';

function App() {
  return (
    <div className="App">
        <Router>
       <Routes>
         <Route path="/" exact={true} element={<HomePage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/findjob" element={<FindJobs/>}></Route>
          <Route path="/market/:id" element={<MarketPlaceDetails/>}></Route>
          <Route path="/market" element={<Market/>}></Route>



        
         




         {/* <Auth/> */}
       </Routes>
    </Router>
    </div>
    
  );
}

export default App;
