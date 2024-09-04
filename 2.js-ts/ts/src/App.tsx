import React, { useState } from "react";

// 인터페이스로 props 타입 정의
interface UserProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserProps) {
  const [newName, setNewName] = useState<string>(name);
  const [newAge, setNewAge] = useState<number>(age);

  // 자동완성
  // console.log(name.toUpperCase());
  // console.log(age.toFixed());

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const updateAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAge(parseInt(e.target.value));
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
