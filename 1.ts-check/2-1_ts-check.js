// @ts-check

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10);
  return arr;
}

console.log(compact([1, 2, 3]));

// 2-1. @ts-check로 코드 정적 분석하기
// 타입 오류, 변수 참조 오류, 그리고 잘못된 메서드 호출 같은 일반적인 문제들을 사전에 감지
