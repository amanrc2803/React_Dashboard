import React from 'react';
//import DataChart from './components/DataChart';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

 
function App() {
  return (
    

<div>
<Navbar/>
<div className="container-fluid" id="main">
 <div className="row row-offcanvas row-offcanvas-left">
   <Sidebar/>
  <Dashboard/>

</div>
</div>  
</div>  
  );
}

export default App;

