import { memo, useState } from "react";
import { formConfig } from "./config";

const MultiTabForm = () => {
  const tabs = Object.keys(formConfig);
  const [activeTab, setActiveTab] = useState("Profile");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e, form) => {
    setFormData((formData) => {
      return {
        ...formData,
        [form.name]: e.target.value,
      };
    });
  };

  const SelectCheck = (props) => {
    const { form } = props;
    if (form.type === "dropdown") {
      return (
        <div>
          <label>{form.label}</label>
          <select
            value={formData[form.name]}
            onChange={(e) => handleChange(e, form)}
          >
            {form.options.map((option) => {
              return <option>{option}</option>;
            })}
          </select>
          <Error name={form.name} />
        </div>
      );
    } else {
      return (
        <div>
          <label>{form.label}</label>
          {form.options.map((option) => {
            return (
              <div>
                <input
                  onChange={(e) => handleChange(e, form)}
                  checked={formData[form.name]?.includes(option)}
                  value={option}
                  type={form.type}
                />
                <label>{option}</label>
              </div>
            );
          })}
          <Error name={form.name} />
        </div>
      );
    }
  };

  const validateFormdata = () => {
    let errObj = {};
    formConfig[activeTab].forEach((form) => {
      if (
        !formData[form.name] ||
        (form.validation.pattern &&
          !form.validation.pattern.test(formData[form.name]))
      ) {
        errObj[form.name] = form.validation.errorMsg;
      }
    });
    setErrors(errObj);
    return Object.keys(errObj).length === 0;
  };

  const Error = (props) => {
    const { name } = props;
    return (
      <p
        style={{
          color: "red",
        }}
      >
        {errors[name]}
      </p>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormdata()) {
      if (activeTab === "Settings") {
        alert("Data saved and authenticated. Open console to check");
        console.log(formData);
      } else {
        alert("Data saved and authenticated. Move to next tab");
      }
    }
  };

  return (
    <div>
      <h2>MultiTabForm</h2>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab}
            disabled={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {formConfig[activeTab].map((form) => {
          if (form.type === "number" || form.type === "email") {
            return (
              <div key={form.name}>
                <label>{form.label}</label>
                <input
                  type={form.type}
                  value={formData[form.name]}
                  onChange={(e) => handleChange(e, form)}
                />
                <Error name={form.name} />
              </div>
            );
          } else {
            return <SelectCheck form={form} />;
          }
        })}
        <button type="submit">
          {activeTab === "Settings" ? "Submit" : "Next"}
        </button>
      </form>
    </div>
  );
};

export default memo(MultiTabForm);
