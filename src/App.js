import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import LoginPage1 from './pages/auth/LoginPage';
import LoginPage2 from './pages/auth/LoginPage';

import { FindJobs } from './pages/FindJobs';
import MarketPlace from './pages/MarketPlace';
import MarketPlaceDetails from './pages/MarketPlace';
import Market from './pages/Market';
import Split from './pages/split'
import Courses from './pages/Courses'

function App() {
  return (
    <div className="App">
        <Router>
       <Routes>
         <Route path="/" exact={true} element={<HomePage/>}></Route>
          <Route path="/loginSeeker" element={<LoginPage1/>}></Route>
          <Route path="/loginEmployee" element={<LoginPage2/>}></Route>

          <Route path="/findjob" element={<FindJobs/>}></Route>
          <Route path="/split" element={<Split/>}></Route>
          <Route path="/course" element={<Courses/>}></Route>
          <Route path="/market/:id" element={<Market/>}></Route>
          <Route path="/marketplace" element={<MarketPlaceDetails/>}></Route>



        
         




         {/* <Auth/> */}
       </Routes>
    </Router>
    </div>
    
  );
}

export default App;
