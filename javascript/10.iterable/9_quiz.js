/**
 * 중복된 배열 객체를 입력받아, 중복을 제거한 후 출력하는 함수 생성
 */
function filter(array) {
    return new Set(array);
}
let numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
console.log(numbers);
console.log(filter(numbers));
console.log(filter(['홍길동','스미스','이순신','홍길동']));

let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');

let myArray = new Array(mySet);  //[100, '홍길동']
console.log(myArray);
console.log(myArray[0]);



