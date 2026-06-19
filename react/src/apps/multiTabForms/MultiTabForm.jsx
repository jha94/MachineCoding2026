import { act, memo, useState } from "react";
import { formConfig } from "./config";

const MultiTabForm = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const tabs = Object.keys(formConfig);

  const renderComponent = ()
  return (
    <div>
      <nav>
        {tabs.map((tab) => {
          return (
            <button
              key={tab}
              disabled={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          );
        })}
      </nav>
      <form>
        {formConfig[activeTab].map((field) => {
         return <div key={field.name}>
            <label>{field.label}</label>
            {
                field.options.map((option, index)=>{

                })
            }
          </div>;
        })}
      </form>
    </div>
  );
};

export default memo(MultiTabForm);
