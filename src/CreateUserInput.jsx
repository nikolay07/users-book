/* eslint-disable react/prop-types */
import React, { useState } from "react";

const CreateUserInput = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const saveInputName = (event) => {
    setName(event.target.value);
  };
  const saveInputPhone = (event) => {
    setPhone(event.target.value);
  };

  const clearInput = () => {
    setName("");
    setPhone("");
  };

  const handleUserCreate = () => {
    if (name === "") {
      return;
    }
    const user = { name, phone, createdDate: new Date() } || {};
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
    const newUsersList = [user, ...usersList];
    localStorage.setItem("usersList", JSON.stringify(newUsersList));
    // localStorage.clear();
    onCreate(name, phone);
    clearInput();
  };

  return (
    <div className="create-user">
      <span>Name:</span>
      <input className="create-user__input" type="text" value={name} onChange={saveInputName} />
      <span>Phone:</span>
      <input className="create-user__input" type="number" value={phone} onChange={saveInputPhone} />
      <button className="btn create-user__btn" onClick={handleUserCreate} type="button">
        Create
      </button>
    </div>
  );
};

export default CreateUserInput;
