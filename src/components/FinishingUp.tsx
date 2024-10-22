const FinishingUp = ({
  selectedPlan,
  isYearly,
  selectedAddOns,
  goToSection,
  isConfirmed,
}) => {
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

  const addOnsTotal = addOnsList.reduce((total, addOn) => {
    if (selectedAddOns[addOn.key]) {
      return isYearly ? total + addOn.yearlyPrice : total + addOn.monthlyPrice;
    }
    return total;
  }, 0);

  const totalPrice = (selectedPlan?.price || 0) + addOnsTotal;
  return (
    /*
    <div className="summary-page">
      <div className="thank-you-icon">
        <img src="../assets/images/icon-thank-you.svg" alt="Thank You Icon" />
      </div>

      <h2 className="summary-title">Thank you!</h2>
      <p className="summary-description">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
    */

    <div className="form-content">
      {isConfirmed ? (
        <div className="summary-page">
          <div className="thank-you-icon">
            <img
              src="../assets/images/icon-thank-you.svg"
              alt="Thank You Icon"
            />
          </div>

          <h2 className="summary-title">Thank you!</h2>
          <p className="summary-description">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      ) : (
        <>
          <h2 className="form-title">Finishing up</h2>
          <p className="form-description">
            Double-check everything looks OK before confirming.
          </p>

          {/* Plan Summary Box */}
          <div className="summary-box">
            <div className="summary-plan">
              <div>
                <h3 className="plan-name">
                  {" "}
                  {selectedPlan.name} (
                  {selectedPlan.billingType === "yearly" ? "Yearly" : "Monthly"}
                  )
                </h3>
                <a
                  href="#"
                  className="change-link"
                  onClick={() => goToSection(1)}
                >
                  Change
                </a>
              </div>
              <p className="final-price">
                ${selectedPlan.price}/
                {selectedPlan.billingType === "yearly" ? "yr" : "mo"}
              </p>
            </div>

            {/* Add-Ons List */}
            <div className="add-ons">
              {addOnsList.map(
                (addOn) =>
                  selectedAddOns[addOn.key] && (
                    <div key={addOn.key} className="add-on">
                      <span>{addOn.name}</span>
                      <span className="add-on-price">
                        +${isYearly ? addOn.yearlyPrice : addOn.monthlyPrice}/
                        {isYearly ? "yr" : "mo"}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Total Cost */}
          <div className="total-summary">
            <span>Total ({isYearly ? "per year" : "per month"})</span>
            <span className="total-price">
              +${totalPrice}/{isYearly ? "yr" : "mo"}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default FinishingUp;
