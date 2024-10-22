import { useState } from "react";
import "./App.css";
import FinishingUp from "./components/FinishingUp";
import PersonalInfo from "./components/PersonalInfo";
import PickAddOns from "./components/PickAddOns";
import SelectPlan from "./components/SelectPlan";
import useMultiForm from "./hooks/useMultiForm";
import { useForm } from "react-hook-form";

const sideBar = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

function App() {
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleToggle = (key: any) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePlanSelect = (planDetails: any) => {
    setSelectedPlanDetails(planDetails); // Save selected plan details
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    mode: "onChange",
  });
  const {
    currentIndex,
    goBackwards,
    goForwards,
    isFirstStep,
    isLastStep,
    goToSection,
  } = useMultiForm(sideBar.length);

  const onSubmit = async () => {
    const isValid = await trigger(); // Validate the form
    console.log(isValid); // Log validation result

    // Validation check (this should be flipped)
    if (isValid) {
      if (isLastStep) {
        setIsConfirmed(true);
      } else {
        goForwards(); // Move to the next step only if the form is valid
      }
    }
    // If not valid, the form will not move forward
  };

  return (
    <div className="container">
      {/* Sidebar Section */}
      <div className="sidebar">
        {sideBar.map((item, index) => (
          <div key={index} className="step">
            <div
              className={`step-number ${
                currentIndex === index ? "active" : ""
              }`}
            >
              {index + 1}
            </div>
            <div className="step-content">
              <p className="step-info">Step {index + 1}</p>
              <p className="step-title">{item}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Form Section */}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {currentIndex === 0 && (
          <PersonalInfo register={register} errors={errors} />
        )}
        {currentIndex === 1 && (
          <SelectPlan
            onPlanSelect={handlePlanSelect}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
          />
        )}
        {currentIndex === 2 && (
          <PickAddOns
            selectedAddOns={selectedAddOns}
            onToggleAddOn={handleToggle}
            isYearly={isYearly}
          />
        )}
        {currentIndex === 3 && (
          <FinishingUp
            selectedPlan={selectedPlanDetails}
            selectedAddOns={selectedAddOns}
            isYearly={isYearly}
            goToSection={goToSection}
            isConfirmed={isConfirmed}
          />
        )}
        <div className="form-buttons">
          {!isFirstStep && !isConfirmed && (
            <button className="back-button" type="submit" onClick={goBackwards}>
              Go Back
            </button>
          )}
          {!isConfirmed && (
            <button className="next-button" type="submit">
              {isLastStep ? "Confirm" : "Next Step"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
