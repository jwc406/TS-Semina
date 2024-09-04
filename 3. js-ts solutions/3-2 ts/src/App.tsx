import React, { useState } from "react";
import "./App.css";

// User 인터페이스 정의
interface User {
  name: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<User>({ name: "", age: 0 });
  const [futureAge, setFutureAge] = useState<number>(0);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setUser({ ...user, age: event.target.value });
    setUser({ ...user, age: parseInt(event.target.value) });
    console.log(user);
  };

  const calculateFutureAge = () => {
    const future = user.age + 5;
    setFutureAge(future);
  };

  return (
    <div className="user-card">
      <h2>TypeScript User Info</h2>
      <input
        type="text"
        value={user.name}
        onChange={handleNameChange}
        placeholder="Enter name"
      />
      <input
        type="number"
        value={user.age}
        onChange={handleAgeChange}
        placeholder="Enter age"
      />
      <button onClick={calculateFutureAge}>Calculate Future Age</button>
      <p>
        {user.name
          ? `${user.name} is ${user.age} years old. address is ${user.address}.`
          : "Enter your info above."}
      </p>
      <p>
        5 years later:{" "}
        {futureAge > 0 && user.name !== "" ? `${futureAge} years old.` : ""}
      </p>
    </div>
  );
}

export default App;
