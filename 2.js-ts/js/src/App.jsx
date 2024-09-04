import React, { useState } from "react";

function UserCard({ name, age }) {
  const [newName, setNewName] = useState(name);
  const [newAge, setNewAge] = useState(age);

  const updateName = (e) => {
    setNewName(e.target.value);
  };

  const updateAge = (e) => {
    setNewAge(e.target.value);
  };

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {newName}</p>
      <p>Age: {newAge}</p>
      <input
        type="text"
        value={newName}
        onChange={updateName}
        placeholder="Enter name"
      />
      <input
        type="number"
        value={newAge}
        onChange={updateAge}
        placeholder="Enter age"
      />
    </div>
  );
}

export default UserCard;
