/**
 * 배열객체에서 필터링을 진행한 후 Shallow Copy(얕은 복사) 진행 후 리턴
 * - 배열객체.filter(callback)
 */
let strList = ['hong', 'smith', 'lee', 'james'];
let fruits = [
    {name: 'apple', emoji:'🍎'},
    {name: 'orange', emoji:'🍊'},
    {name: 'lemon', emoji:'🍋'},
    {name: 'apple', emoji:'🍎'},
    {name: 'lemon', emoji:'🍋'},
    {name: 'orange', emoji:'🍊'},
    {name: 'lemon', emoji:'🍋'}    
];

//strList에서 4자 이상인 이름만 필터링
let filterObj = strList.filter((str) => str.length >= 4); //['hong', ..]
console.log(filterObj);
console.log(`filterObj = ${filterObj}`);

//fruits 객체에서 lemon 객체를 출력
let lemons = fruits.filter((fruit) => fruit.name === 'lemon');
let lemonsFind = fruits.find((fruit) => fruit.name === 'lemon');
console.log();
console.log(lemons);
console.log(lemonsFind);
console.log(lemons[0].name, lemons[0].emoji);
console.log(lemonsFind.name, lemonsFind.emoji);




