// const let の変数宣言

var val1 = "var変数名";

console.log(val1);

// var変数は再宣言されてしまう

val1 = "変数の上書き";
console.log(val1);

var val1 = "変数の際宣言";
console.log(val1);

// varは再宣言できてしまう。プログラムには意味のない文字列はないので、
// コードを書けば書くほど、意図しない再宣言のリスクは高まる

let val2 = "let変数";
console.log(val2);

val2 = "上書き2";
console.log(val2);

// 再宣言はできない
// let val2 = "再宣言が不可能";

// console.log(val2);
// const val3 = "val3の変数の中身"
// // console.log(val3);

// const val3 = "再宣言します";

const val4 = {
  name: "ono",
  age: 25
};
console.log(val4);
// constで定義していてもオブジェクトの場合は中身を更新することができる
val4.adress = "FUKUOKA";
val4.name = "ONO";
console.log(val4);

// constで定義したオブジェクト{}のプロパティは変更可能

const val5 = ["dog", "cat"];

// 配列の場合は番号を指定して呼び出し、オブジェクトの場合はプロパティを呼び出し
val5[0] = "bird";
val5.push("monkey");

console.log(val5);
