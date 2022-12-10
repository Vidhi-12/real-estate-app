// import "./App.css";
// import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import BasicInfo from "./addNewProperty/BasicInfo";
import PropertyDetail from "./addNewProperty/PropertyDetails";
import GeneralInfo from "./addNewProperty/GeneralInfo";
import LocationInfo from "./addNewProperty/LocationInfo";
import PropertyListingPage from "./PropertyListingPage";
import PropertyNav from "./addNewProperty/PropertyNav";
import CommonPage from './CommonPage';

function Form() {

  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    "property" : "",
    "length" : "",
    "breadth" : "",
    "area" : "",
    "mobile" : ""
  })

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const navStep = (navValue) => {
    
    setstep(navValue);
  }

  const handleInputData = input => e => {
    
    const {value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  // console.log(formData);

  switch (step) {
       case 1:
      return (
        <>
        <CommonPage>
        <PropertyNav step={step} navStep={navStep}/>
        <div className="form-elements">
          
                <BasicInfo nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              
        </div>
        </CommonPage>
        </>
      );
        case 2:
      return (
        <>
        <CommonPage>
        <PropertyNav step={step} navStep={navStep}/>
        <div className="form-elements">
          
                <PropertyDetail nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              
        </div>
        </CommonPage>
        </>
      );
         case 3:
        return (
          <>
          <CommonPage>
          <PropertyNav step={step} navStep={navStep}/>
            <div className="form-elements">
              
                    <GeneralInfo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                  
            </div>
            </CommonPage>
            </>
        );
           case 4:
        return (
          <>
          <CommonPage>
          <PropertyNav step={step} navStep={navStep}/>
            <div className="form-elements">
              
                    <LocationInfo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                  
            </div>
            </CommonPage>
            </>
        );
        case 5:
            return (
              <div className="form-elements">
                
                      <PropertyListingPage values={formData} />
                    
              </div>
            );
        
        default: 
        return (
          <div className="form-elements">
            
                  <PropertyListingPage values={formData} />
                
          </div>
        );
  
  }
}

export default Form;