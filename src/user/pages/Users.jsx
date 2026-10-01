import React from "react";
import { useState } from "react";
import UserList from "../components/UserList";

const Users = () => {
  const [users, setUserList] = useState([
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
    {
      id: "u2",
      name: "User 2",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 2,
    },
    {
      id: "u3",
      name: "User 3",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 1,
    },
  ]);

  return (
    <div>
      <h1>Users</h1>
      <UserList items={users} />
    </div>
  );
};

export default Users;
