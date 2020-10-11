/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import User from "./User";
import CreateUserInput from "./CreateUserInput";

import { createUser, fetchUsersList, deleteUser, upgradeUser } from "./usersGateway";

const UsersList = () => {
  const [state, setState] = useState({ users: [] });

  const fetchUser = () => {
    fetchUsersList().then((userList) => setState({ users: userList }));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const onCreate = (name, phone) => {
    const newUser = {
      name,
      phone,
      createdDate: new Date(),
      updated: "",
    };
    createUser(newUser).then(() => fetchUser());
  };

  const handleUserDelete = (id) => {
    deleteUser(id).then(() => fetchUser());
  };

  const handleUserUpgrade = (id, changed) => {
    const { name } = state.users.find((user) => user.id === id);

    const upgadedUser = {
      name: changed,
      updated: new Date(),
    };

    if (name !== changed) {
      upgradeUser(id, upgadedUser).then(() => fetchUser());
    }
  };
  const handlePhoneUpgrade = (id, changed) => {
    const { phone } = state.users.find((user) => user.id === id);
    const upgadePhone = {
      phone: changed,
      updated: new Date(),
    };
    if (phone !== changed) {
      upgradeUser(id, upgadePhone).then(() => fetchUser());
    }
  };

  return (
    <div className="user-list">
      <CreateUserInput onCreate={onCreate} />
      <ul className="list">
        {state.users.map((user) => {
          return (
            <User
              key={user.id}
              {...user}
              onDelete={handleUserDelete}
              onUpgrade={handleUserUpgrade}
              onUpgradePhone={handlePhoneUpgrade}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
