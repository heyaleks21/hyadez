import React from "react";

const Medform = () => {
  return (
    <>
      <div className="form">
        <div className="form-body">
          <h2 className="heading-registration">Patient notes</h2>
          <div className="form-contents">
            <label className="form__label">First Name:</label>
            <input className="form__input" id="csv-firstname" type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">Last Name:</label>
            <input className="form__input" id="csv-lastname" type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">Preferred name:</label>
            <input className="form__input" id="csv-preferredname" type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">Date of birth:</label>
            <input className="form__input" id="csv-dob" type="date" />
          </div>
          <div className="form-contents">
            <label className="form__label">Age:</label>
            <input className="form__input" id="csv-age" type="number" />
          </div>
          <div className="form-contents">
            <label className="form__label">Address:</label>
            <input className="form__input" id="csv-address" type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">City:</label>
            <input className="form__input" id="csv-city" type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">State:</label>
            <input className="form__input" id="csv-state" type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">Postcode:</label>
            <input className="form__input" id="csv-postcode" type="number" />
          </div>
          <div className="form-contents">
            <label className="form__label noinput">Telephone</label>
          </div>
          <div className="form-contents">
            <label className="form__label">Work:</label>
            <input className="form__input" id="csv-workno" type="number" />
          </div>
          <div className="form-contents">
            <label className="form__label">Home:</label>
            <input className="form__input" id="csv-home" type="number" />
          </div>
          <div className="form-contents">
            <label className="form__label">Work:</label>
            <input className="form__input" id="csv-workno" type="number" />
          </div>
          <div className="form-contents">
            <label className="form__label">Employer/School:</label>
            <input className="form__input" id="csv-workstatus" type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label noinput">Sex</label>
          </div>
          <div className="form-contents test1">
            <label className="form__label">Male</label>
            <input
              className="form__input checkboxes"
              id="csv-male"
              type="radio"
              name="check"
            />
            <label className="form__label">Female</label>
            <input
              className="form__input checkboxes"
              id="csv-female"
              type="radio"
              name="check"
            />
            <label className="form__label">Non-binary</label>
            <input
              className="form__input checkboxes"
              id="csv-nb"
              type="radio"
              name="check"
            />
            <label className="form__label">Prefer not to say</label>
            <input
              className="form__input checkboxes"
              id="csv-pnts"
              type="radio"
              name="check"
            />
            <label className="form__label">Other</label>
            <input
              className="form__input checkboxes"
              id="csv-other"
              type="radio"
              name="check"
            />
          </div>
          <div className="form-contents">
            <label className="form__label noinput">Martial status</label>
          </div>
          <div className="form-contents test1">
            <label className="form__label">Married</label>
            <input
              className="form__input"
              id="csv-married"
              type="radio"
              name="check2"
            />
            <label className="form__label">Single</label>
            <input
              className="form__input"
              id="csv-single"
              type="radio"
              name="check2"
            />
            <label className="form__label">Divorced</label>
            <input
              className="form__input"
              id="csv-divorced"
              type="radio"
              name="check2"
            />
            <label className="form__label">Widowed</label>
            <input
              className="form__input"
              id="csv-widowed"
              type="radio"
              name="check2"
            />
          </div>
          <div className="form-contents">
            <label className="form__label">Medicare:</label>
            <input className="form__input" id="csv-medicare" type="number" />
          </div>
          <div className="form-contents">
            <label className="form__label">Private health insurance:</label>
            <input
              className="form__input"
              id="csv-privateinsurance"
              type="checkbox"
            />
          </div>
          <div className="form-contents">
            <label className="form__label">
              If yes, insurance reference number:
            </label>
            <input
              className="form__input"
              id="csv-insurancenumber"
              type="number"
            />
          </div>
          <div className="footer footer2">
            <button className="btn">Submit</button>
            <button className="btn">Download as CSV</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medform;
