import React, { useState } from "react";

const plans = [
  {
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    image: "../assets/images/icon-arcade.svg",
  },
  {
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    image: "../assets/images/icon-advanced.svg",
  },
  {
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    image: "../assets/images/icon-pro.svg",
  },
];
const SelectPlan = ({ onPlanSelect, isYearly, setIsYearly }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleToggle = () => {
    setIsYearly((prev) => !prev); // Toggle between monthly and yearly
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const getPlanPrice = (plan) =>
    isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  React.useEffect(() => {
    if (selectedPlan) {
      onPlanSelect({
        name: selectedPlan?.name,
        price: getPlanPrice(selectedPlan),
        billingType: isYearly ? "yearly" : "monthly",
      });
    }
  }, [selectedPlan, isYearly]);
  return (
    <div className="form-content">
      <h2 className="form-title">Select your plan</h2>
      <p className="form-description">
        You have the option of monthly or yearly billing.
      </p>
      {/* Plan Options */}
      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan-card ${selectedPlan === plan ? "active" : ""}`} // Highlight the selected card
            onClick={() => handleSelectPlan(plan)} // Set the selected plan
          >
            <img src={plan.image} alt="Arcade Icon" />
            <div className="plan-details">
              <h3 className="plan-title">{plan.name}</h3>
              <p className="plan-price">
                {isYearly
                  ? `$${plan.yearlyPrice}/yr`
                  : `$${plan.monthlyPrice}/mo`}
                <br />
                {isYearly && <span className="free-months">2 months free</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="plans-grid">
        <div className="plan-card">
          <img src="../assets/images/icon-arcade.svg" alt="Arcade Icon" />
          <h3 className="plan-title">Arcade</h3>
          <p className="plan-price">
            {isYearly ? "$90/yr" : "$9/mo"}
            <br />
            {isYearly && <span className="free-months">2 months free</span>}
          </p>
        </div>
        <div className="plan-card">
          <img src="../assets/images/icon-advanced.svg" alt="Arcade Icon" />
          <h3 className="plan-title">Advanced</h3>
          <p className="plan-price">
            {isYearly ? "$120/yr" : "$12/mo"}
            <br />
            {isYearly && <span className="free-months">2 months free</span>}
          </p>
        </div>
        <div className="plan-card">
          <img src="../assets/images/icon-pro.svg" alt="Arcade Icon" />
          <h3 className="plan-title">Pro</h3>
          <p className="plan-price">
            {isYearly ? "$150/yr" : "$15/mo"}
            <br />
            {isYearly && <span className="free-months">2 months free</span>}
          </p>
        </div>
      </div> */}
      {/* Billing Toggle */}
      <div className="billing-toggle">
        <span className={isYearly ? "inactive" : "active"}>Monthly</span>
        <label className="switch">
          <input type="checkbox" onChange={handleToggle} />
          <span className="slider"></span>
        </label>
        <span className={isYearly ? "active" : "inactive"}>Yearly</span>
      </div>
      {/* Navigation Buttons */}
    </div>
  );
};

export default SelectPlan;
