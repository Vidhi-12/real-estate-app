import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Protected from './components/Protected';
import Signin from './components/Signin';
import Signup from './components/Signup';
import PropertyListingPage from './components/PropertyListingPage';
// import BasicInfo from './components/AddNewProperty/BasicInfo';
// import PropertyDetail from './components/AddNewProperty/PropertyDetails';
// import GeneralInfo from './components/AddNewProperty/GeneralInfo';
// import LocationInfo from './components/AddNewProperty/LocationInfo';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
      <Route path='/' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/propertyListingPage' element={
         <Protected>
          <PropertyListingPage/>
         </Protected>
      }/>
      <Route path="/form" element={
        <Protected>
          <Form/>
        </Protected>
      }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/property"
          element={
            <Protected>
              <PropertyListingPage />
            </Protected>
          }
        />
        <Route
          path="/property"
          element={
            <Protected>
              <PropertyListingPage />
            </Protected>
          }
        />
      </Routes> */}
