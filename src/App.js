import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Comparison from './pages/Comparison';
import AllVehicles from './pages/AllVehicles';
import Form from './pages/Form';
import ReportPage from './pages/Reportpage';
import GovtSchemes from './pages/Schemes';
import Services from './components/Services';
import OtherServices from './pages/OtherServices';
import DisplayEV from './pages/DisplayEV';
import RatedTrending from './components/RatedTrending';
import PhoneSignUp from './MobileAuth/PhoneSignUp';
import { UserAuthContextProvider } from './MobileAuth/UserAuthContext';
function App() {
  return (
<UserAuthContextProvider>
<BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<PhoneSignUp />} />
      <Route path="/compare-chart" element={<Comparison />} />
      <Route path="/all-vehicle-list" element={<AllVehicles />} />
      <Route path="/form" element={<Form />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/schemes" element={<GovtSchemes />} />
      <Route path="/services" element={<Services />} />
      <Route path="/other-services" element={<OtherServices />} />
      <Route path="/view-vehicle" element={<DisplayEV />} />
      <Route path="/trending" element={<RatedTrending />} />

    </Routes>
  </BrowserRouter>
  </UserAuthContextProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
