import { memo } from "react";

const NavBar = (props) => {
  const { users, setSelectedUser } = props;
  return (
    <div
      style={{
        width: "150px",
        height: "90vh",
        overflowY: "scroll",
      }}
    >
      {users.map((user) => {
        return (
          <nav
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px",
              backgroundColor: "lightcyan",
              height: "20px",
              cursor: "pointer",
            }}
            key={user.id}
            onClick={() => setSelectedUser(user.id)}
          >
            {user.name}
          </nav>
        );
      })}
    </div>
  );
};

export default memo(NavBar);
