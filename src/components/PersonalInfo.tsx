const PersonalInfo = ({ register, errors }) => {
  return (
    <div className="form-content">
      <div className="personal-info">
        <h2 className="form-title">Personal info</h2>
        <p className="form-description">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div className="personal-info-form">
        <div className="form-group">
          <label>
            Name
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </label>
          <input
            type="text"
            name="email"
            placeholder="e.g., Stephen King"
            {...register("name", {
              required: "This field is required",
            })}
            className={errors.name ? "form-control invalid" : "form-control"}
          />
        </div>

        <div className="form-group">
          <label>
            Email Address
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </label>
          <input
            type="email"
            placeholder="e.g., stephenking@lorem.com"
            {...register("email", {
              required: "This field is required",
            })}
            className={errors.email ? "form-control invalid" : "form-control"}
          />
        </div>

        <div className="form-group">
          <label>
            Phone Number
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </label>
          <input
            type="text"
            placeholder="e.g., +1 234 567 890"
            {...register("phone", {
              required: "This is field is required",
            })}
            className={errors.phone ? "form-control invalid" : "form-control"}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
