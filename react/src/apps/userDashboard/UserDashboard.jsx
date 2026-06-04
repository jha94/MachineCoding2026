import { useState, useEffect, useMemo, useCallback } from "react";
import NavBar from "./NavBar";
import UserPanel from "./UserPanel";

const UserDashboard = () => {
  const [userList, setUserList] = useState([]);
  const [activeUserIndex, setActiveUserIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUserList = async () => {
      try {
        const apiResponse = await fetch("https://dummyjson.com/users", {
          signal: controller.signal,
        });
        if (!apiResponse.ok) {
          throw new Error(`HTTP network error: ${apiResponse.status}`);
        }
        const data = await apiResponse.json();
        setUserList(data.users);
      } catch (err) {
        return new Error("Error while fetching the data");
      }
    };
    fetchUserList();

    return () => controller.abort();
  }, []);

  const formattedUserList = useMemo(() => {
    return userList.map((user) => {
      return {
        id: user.id,
        name: user.firstName + " " + user.lastName,
      };
    });
  }, [userList]);

  const handleActiveUser = useCallback((id) => {
    setActiveUserIndex(id);
  }, []);

  const activeUser = useMemo(() => {
    return (
      userList.find((user) => {
        return user.id === activeUserIndex;
      }) || null
    );
  }, [userList, activeUserIndex]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <h2>User Dashboard</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <NavBar users={formattedUserList} setSelectedUser={handleActiveUser} />
        {activeUser ? (
          <UserPanel activeUser={activeUser} />
        ) : (
          <p>Select a staff member from the directory.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
