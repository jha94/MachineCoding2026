import "../appStyles.css";
const Accordian = (props) => {
  const { accordianItems, activeAccordian, setActiveAccordian } = props;
  return (
    <>
      {accordianItems.map((accordian, index) => {
        const { title, desc } = accordian;
        return (
          <div className="accordianWrap" key={title}>
            <button
              aria-expanded={activeAccordian === index}
              aria-controls={`accordion-panel-${index}`}
              id={`accordion-header-${index}`}
              onClick={() =>
                setActiveAccordian(activeAccordian === index ? null : index)
              }
            >
              {title}
            </button>
            <div
              hidden={activeAccordian !== index}
              aria-labelledby={`accordion-header-${index}`}
              id={`accordion-panel-${index}`}
            >
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Accordian;
