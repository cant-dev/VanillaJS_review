// // const let の変数宣言

// var val1 = "var変数名";

// console.log(val1);

// // var変数は再宣言されてしまう

// val1 = "変数の上書き";
// console.log(val1);

// var val1 = "変数の際宣言";
// console.log(val1);

// // varは再宣言できてしまう。プログラムには意味のない文字列はないので、
// // コードを書けば書くほど、意図しない再宣言のリスクは高まる

// let val2 = "let変数";
// console.log(val2);

// val2 = "上書き2";
// console.log(val2);

// // 再宣言はできない
// // let val2 = "再宣言が不可能";

// // console.log(val2);
// // const val3 = "val3の変数の中身"
// // // console.log(val3);

// // const val3 = "再宣言します";

// const val4 = {
//   name: "ono",
//   age: 25
// };
// console.log(val4);
// // constで定義していてもオブジェクトの場合は中身を更新することができる
// val4.adress = "FUKUOKA";
// val4.name = "ONO";
// console.log(val4);

// // constで定義したオブジェクト{}のプロパティは変更可能

// const val5 = ["dog", "cat"];

// // 配列の場合は番号を指定して呼び出し、オブジェクトの場合はプロパティを呼び出し
// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);

// // const name = "ono";
// // const age = 25;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// テンプレート文字列を用いる
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// アロー関数 ES6で追加
// 従来
// 関数に渡す引数
// function func1(str) {
// return str;
// }

// 変数の中に、関数の処理を書くことができる
// const func1 = function (str) {
//   return str;
// };

// // letだと関数の上書きができる
// // func1 = function(str){
// //   return "TEST"
// // }

// console.log(func1("func1です"));

// // アロー関数
// // const func2 = (str) => {
// //   return str;
// // };

// const func2 = (str) => str;
//   // 単一式の場合、returnを省略できる
// console.log(func2("func2です"));

// // const func3 = (num1,num2) => {
// // return num1 + num2;
// // };

// const func3 = (num1,num2) => num1+num2;
// console.log(func3(1,2));

// 変数の宣言 + 関数の宣言という部分を簡潔に記述することができる。

// 分割代入
// const myProfile = {
//   name:"ono",
//   age:20
// };
// 分割代入は予め値を取り出して置く処理？
// プロパティから値を取り出そうとしているので、constの宣言をプロパティにしている？
// const { name, age } = myProfile;

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message3);

// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

const myProfile = ["ono", 25];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);
