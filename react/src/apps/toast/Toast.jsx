import { useState, useEffect } from "react";
import "../appStyles.css";
const Toast = (props) => {
  const [visible, setVisible] = useState(true);
  const { content, position, notificationTime } = props;

  useEffect(() => {
    let timer = setTimeout(() => {
      setVisible(false);
    }, notificationTime);
    return () => clearTimeout(timer);
  }, [notificationTime]);

  if (!visible) return null;
  return (
    <div className={`toastWrapper toast-${position}`}>
      <div
        role="status"
        aria-live="polite"
        // role="alert"
        // aria-live="aggressive"
      >
        {" "}
        {content}
      </div>
      <button aria-label="Dismiss notification" onClick={() => setVisible(false)}>
        ❌
      </button>
    </div>
  );
};

export default Toast;
