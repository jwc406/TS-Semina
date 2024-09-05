/* ts 파일 node로 실행하기 
1. npx tsc 로 .ts 파일 .js 로 변환 후 .js 파일 노드로 실행
2. ts-node 설치해서 컴파일 없이 .ts 파일 바로 실행 -> npx ts-node 파일명
*/

// 1. 타입 어노테이션 (Type Annotations)
let username: string = "John";
username = 123; // 컴파일 오류 발생
username = "atto";

function greet(person: string): string {
  // 매개변수, 함수 반환 타입 지정
  return "Hello, " + person;
}

greet(123); //문자열만 가능
greet("jw"); //문자열만 가능

// 2. 주요 타입 (Basic Types)

// Any 타입 (유연하지만 위험)
let randomValue: any = 10;
randomValue = true; // No error
randomValue = "hello"; // No error

// Unknown 타입 (더 안전)
let unknownValue: unknown = "Hello, world!";

console.log(unknownValue.toUpperCase()); // 타입 확인하지 않으면 사용 X

if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // 타입 확인 후 사용 가능
}

// Never 타입 (절대 발생하지 않는 상태)
function throwError(message: string): never {
  throw new Error(message);
}

// 3. 인터페이스(Interfaces)와 타입 별칭(Type Aliases)

// 인터페이스 사용
interface User {
  name: string;
  age: number;
}

const user1: User = { name: "Alice", age: 25 };

// 타입 별칭 사용
type Name = string;
type ID = string | number; // 유니언 타입 -> 둘 중 하나

const myName: Name = "Charlie";
const userID: ID = 123;

// 4. 유니언과 인터섹션 타입 (Union and Intersection Types)

// 유니언 타입 : 여러 값 사용 가능
function printId(id: number | string): void {
  console.log("ID:", id);
}

printId(101); // number 타입 사용
printId("abc123"); // string 타입 사용

// 인터섹션 타입 : 타입 결합하여 새로운 타입 구조 생성
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type Staff = Person & Employee;

const staff: Staff = {
  name: "Alice",
  employeeId: 123,
};

// 5. 제네릭 (Generics) : 호출 시점에 동적으로 타입 지정

// 제네릭을 사용한 함수
function identity<T>(value: T): T {
  return value;
}

const numberIdentity = identity<number>(42); // 제네릭으로 숫자 타입 설정
const stringIdentity = identity<string>("Hello"); // 제네릭으로 문자열 타입 설정

// 제네릭 두 개, 콜백함수 전달
function transform<T, U>(input: T, converter: (value: T) => U): U {
  return converter(input);
}

// 제네릭을 사용하여 숫자를 문자열로 변환한 값
const result = transform<number, string>(42, (value) => value.toString());
console.log(result); // "42"

// 6. 자동 타입 추론 (Type Inference)

// 변수의 타입 추론
let inferredString = "Hello"; // 타입스크립트는 자동으로 inferredString의 타입을 string으로 추론
inferredString = 123; // 오류 발생: 'number' 타입을 'string'에 할당할 수 없음

// 함수의 반환 타입 추론
function inferredIdentity<T>(value: T) {
  return value; // 타입스크립트가 반환 타입을 자동으로 추론
}

const inferredNumber = inferredIdentity(42); // 타입스크립트가 T를 number로 추론
const inferredStringValue = inferredIdentity("Hello"); // 타입스크립트가 T를 string으로 추론

console.log(inferredNumber); // 42
console.log(inferredStringValue); // "Hello"
