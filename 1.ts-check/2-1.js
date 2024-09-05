// ts-check

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10);
  return arr;
}

console.log(compact([1, 2, 3]));

// @ts-check는 .js 파일에서도 타입 검사 기능과 기본적인 코드 오류를 감지할 수 있게 하는 방법
// 체크 없이는 실행 후 런타임에서 오류를 감지할 수 있지만
// 체크를 활성화 하면 변수 오류 미리 감지할 수 있음
