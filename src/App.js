
import {Routes,Route} from 'react-router-dom'

import Loginpage from "./Components/Loginpage";
import PersonalDashboard from "./Components/PersonalDashboard";
import BusinessDashboard from "./Components/BusinessDashboard";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/personalDashboard" element={<PersonalDashboard/>}/>
        <Route path="/businessDashboard" element={<BusinessDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
