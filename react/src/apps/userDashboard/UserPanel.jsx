import { memo } from "react";

const UserPanel = (props) => {
  const { activeUser } = props;
  return (
    <div>
      <h2>UserPanel</h2>
    </div>
  );
};

export default memo(UserPanel);
