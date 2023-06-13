import { useState } from "react";
import { useForm } from "react-hook-form";
import { CSVLink } from "react-csv";

const Mediform = () => {
  const { register, handleSubmit } = useForm();
  const [csvData, setCsvData] = useState([]);
  const [buttonText, setButtonText] = useState("Load data to CSV");
  const changeText = (text) => {
    const chks = document.getElementsByName("ischecked");
    var results = [];
    for (let i = 0; i < chks.length; i++) {
      chks[i].checked ? setButtonText(text) : setButtonText("Load data to CSV");
    }
    return results;
  };

  const headers = [
    { label: "First Name", key: "fn" },
    { label: "Last Name", key: "ln" },
    { label: "Last Name", key: "mn" },
    { label: "Preferred name", key: "pn" },
    { label: "DOB", key: "dob" },
    { label: "Age", key: "age" },
    { label: "Address", key: "add" },
    { label: "City", key: "city" },
    { label: "State", key: "state" },
    { label: "Postcode", key: "zip" },
    { label: "Home", key: "home" },
    { label: "Work", key: "work" },
    { label: "Mobile", key: "mobile" },
    { label: "Employer/School", key: "status" },
    { label: "Sex", key: "sex" },
    { label: "Martital Status", key: "marital" },
    { label: "Medicare Number", key: "medi" },
    { label: "Private Health Insurance", key: "phi" },
    { label: "Insurance Number", key: "phinum" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    setCsvData((prev) => [...prev, data]);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-body">
          <h2 className="heading-registration">Patient Notes</h2>
          <div className="form-contents">
            <label className="form__label">Given Name:</label>
            <input className="form__input" {...register("fn")} type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">Last Name:</label>
            <input className="form__input" {...register("ln")} type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">Middle Name:</label>
            <input className="form__input" {...register("mn")} type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">Preferred name:</label>
            <input className="form__input" {...register("pn")} type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">Date of Birth:</label>
            <input className="form__input" {...register("dob")} type="date" />
          </div>
          <div className="form-contents">
            <label className="form__label">Age:</label>
            <input className="form__input" {...register("age")} type="number" />
          </div>
          <div className="form-contents">
            <label className="form__label" type="text">
              Address
            </label>
            <input className="form__input" {...register("add")} />
          </div>
          <div className="form-contents">
            <label className="form__label" type="text">
              City
            </label>
            <input className="form__input" {...register("city")} />
          </div>

          <div className="form-contents">
            <label className="form__label">State:</label>
            <input className="form__input" {...register("state")} type="text" />
          </div>
          <div className="form-contents">
            <label className="form__label">Postcode:</label>
            <input className="form__input" {...register("zip")} type="number" />
          </div>
          <div className="form-contents">
            <label className="form__label noinput">Telephone</label>
          </div>
          <div className="form-contents">
            <label className="form__label">Work:</label>
            <input
              className="form__input"
              {...register("work")}
              type="number"
            />
          </div>
          <div className="form-contents">
            <label className="form__label">Home:</label>
            <input
              className="form__input"
              {...register("home")}
              type="number"
            />
          </div>
          <div className="form-contents">
            <label className="form__label">Mobile:</label>
            <input
              className="form__input"
              {...register("mobile")}
              type="number"
            />
          </div>
          <div className="form-contents">
            <label className="form__label">Employer/School:</label>
            <input
              className="form__input"
              {...register("status")}
              type="text"
            />
          </div>
          <div className="form-contents">
            <label className="form__label">Sex</label>
            <select className="form__label" {...register("sex")}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-contents">
            <label className="form__label">Marital Status</label>
            <select className="form__label" {...register("marital")}>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="form-contents">
            <label className="form__label">Medicare:</label>
            <input
              className="form__input"
              {...register("medi")}
              type="number"
            />
          </div>
          <div className="form-contents">
            <label className="form__label">Private health insurance:</label>
            <input
              className="form__input"
              {...register("phi")}
              type="checkbox"
            />
          </div>
          <div className="form-contents">
            <label className="form__label">
              If yes, insurance reference number:
            </label>
            <input
              className="form__input"
              {...register("phinum")}
              type="number"
            />
          </div>
          <div className="footer footer2">
            <label className="form__label">
              <input type="checkbox" required name="ischecked" />
              Agreement to the Data Privacy Policy
            </label>
          </div>
          <div className="footer footer2">
            <button
              type="submit"
              className="btn"
              onClick={() => changeText("Loaded")}
            >
              {buttonText}
            </button>
            <CSVLink className="btn" data={csvData} headers={headers}>
              Download
            </CSVLink>
          </div>
        </div>
      </form>
    </>
  );
};

export default Mediform;
