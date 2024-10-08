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
      <h1>2. 자바스크립트 - 타입스크립트 전환</h1>
      <h2>User Information</h2>
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

/* 
1. 타입스크립트 설치
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
2. tsconfig.json 파일 생성
  npx tsc --init
3. 파일 확장자 변경.js / .jsx -> .ts / .tsx 
*/
