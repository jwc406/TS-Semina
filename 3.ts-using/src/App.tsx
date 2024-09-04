import React, { useEffect, useState } from "react";

// 사용자 타입 정의 (age를 옵셔널 필드로 설정)
interface User {
  id: number;
  name: string;
  username: string;
  age?: number; // age를 선택적 필드로 설정 (API에서 제공되지 않을 수 있음)
  email: string;
}

// 타입 가드 함수
function isUser(data: any): data is User {
  return (
    typeof data === "object" &&
    "id" in data &&
    "name" in data &&
    "username" in data &&
    // age 필드를 옵셔널로 처리 (없어도 유효한 User로 간주)
    (typeof data.age === "number" || data.age === undefined) &&
    "email" in data
  );
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        // 타입 가드를 사용해 안전하게 타입 확인
        if (isUser(data)) {
          setUser(data);
        } else {
          setError("Invalid user data");
        }
      })
      .catch(() => setError("Failed to fetch user data"));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>Username: {user.username}</p>
          <p>Age: {user.age ?? "N/A"}</p> {/* 나이가 없을 경우 "N/A"로 표시 */}
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
