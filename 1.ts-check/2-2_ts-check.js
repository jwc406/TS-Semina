// @ts-check

/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}

const result = add(5, "10");
console.log(result);

// 2-2. @ts-check로 타입 검사하기
// JSDoc으로 자바스크립트 코드에 문서화를 추가하는 주석
// @ts-check 와 결합하면 타입스크립트처럼 활용 가능
