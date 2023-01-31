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
    property : "",
    area : "",
    mobile : "",
    property_image : "",
    imgName : "",
    property_description : ""
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
    
    const {value, name } = e.target;
  //   (e) => setData(data => ({
  //     ...data, postImage: e.target.files[0], imgName: e.target.files[0].name
  // }))
  //   image: e.target.files[0], imgName: e.target.files[0].name
  // console.log(input);
  if(name === "file-name"){
    setFormData(prevState => ({
      ...prevState,
      property_image: e.target.files[0], imgName: e.target.files[0].name
  }));
  }else{
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }
  }

  // console.log(formData)

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
              
                    <LocationInfo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} setValues={setFormData}/>
                  
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