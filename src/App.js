import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import LoginPage1 from './pages/auth/LoginPage';
import LoginPage2 from './pages/auth/LoginPage';
import { FindJobs } from './pages/FindJobs';
import MarketPlace from './pages/MarketPlace';
import MarketPlaceDetails from './pages/MarketPlace';
import Market from './pages/Market';
import Split from './pages/split'
import Courses from './pages/Courses'
import InfoFrom from './components/InfoFrom';
import Dashboard from './components/admin/Dashboard';
import CareerResources from './pages/testDyo';
import { userContext } from './context/EmployerPrvoider';


function App() {
  const [employer, setEmployer] = useState(false)
  return (
    <div className="App">
        <Router>
        <userContext.Provider value={{employer: employer, setEmployer: setEmployer}}>
       <Routes>
        
         <Route path="/" exact={true} element={<HomePage/>}></Route>
          <Route path="/loginSeeker" element={<LoginPage1/>}></Route>
          <Route path="/loginEmployee" element={<LoginPage2/>}></Route>
          <Route path="/admin" element={<Dashboard/>}></Route>
          <Route path="/addinfo" element={<InfoFrom/>}></Route>

          <Route path="/findjob" element={<FindJobs/>}></Route>
          <Route path="/split" element={<Split/>}></Route>
          <Route path="/course" element={<Courses/>}></Route>
          <Route path="/addskill" element={<Market/>}></Route>
          <Route path="/marketplace" element={<MarketPlaceDetails/>}></Route>

          <Route path="/resource" element={<CareerResources/>}></Route>
        
         




         {/* <Auth/> */}
       </Routes>
          </userContext.Provider>
    </Router>
    </div>
    
  );
}

export default App;
