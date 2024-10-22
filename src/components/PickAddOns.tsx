import { useState } from "react";

const addOnsList = [
  {
    key: "onlineService",
    name: "Online service",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    key: "largerStorage",
    name: "Larger storage",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    key: "customizableProfile",
    name: "Customizable profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

const PickAddOns = ({ selectedAddOns, onToggleAddOn, isYearly }) => {
  return (
    <div className="form-content">
      <h2 className="form-title">Pick add-ons</h2>
      <p className="form-description">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="addons-list">
        {addOnsList.map((addOn) => (
          <div
            key={addOn.key}
            className={`addon-item ${
              selectedAddOns[addOn.key] ? "selected" : ""
            }`}
            onClick={() => onToggleAddOn(addOn.key)}
          >
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={selectedAddOns[addOn.key]}
            />
            <span className="checkmark"></span>
            <div className="addon-details">
              <h3>{addOn.name}</h3>
              <p>Access to {addOn.name.toLowerCase()}</p>
            </div>
            <span className="addon-price">
              {/* +${addOn.monthlyPrice}/mo or +${addOn.yearlyPrice}/yr */}
              {isYearly
                ? `$+${addOn.yearlyPrice}/yr`
                : `$+${addOn.monthlyPrice}/mo`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickAddOns;
