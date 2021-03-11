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

// const myProfile = ["ono", 25];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// デフォルト値、引数など
// const sayHello = (name = "guest") => console.log(`こんにちは${name}さん！`);
// // JSだと関数の呼び出しで引数がないと"定義なし:undefined"が表示される
// console.log(sayHello("ONO"));

// // スプレット構文 ...
// // スプレット構文 ⇨ 展開ができるので、要素を結合した変数を使えることができる
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// // 配列の結合
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// MapやFilter
// const nameArr = ["tanaka", "yamada", "ono"];
// // for (let index = 0; index < nameArr.length; index++){
// // console.log(`${index}番目は${nameArr[index]}`);
// // };

// // // mapは配列に対して使える関数
// // // 配列の入った変数に対して、map関数を利用することで、map関数の引数に配列の内容を順番に処理する
// // const nameArr2 = nameArr.map((name)=>{
// //   return name;
// // })
// // console.log(nameArr2);

// nameArr.map((name, index, test) => console.log(`${index + 1}番目は${name}`));

// // // ！！新しい配列を生成する | 順番に処理をする という使い方が違う

// // const numArr = [1,2,3,4,5];
// // const newNumArr = numArr.filter((num) => {
// // return num % 2 === 1;
// // })
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ono") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// mapは配列に対して繰り返し処理を行う関数、第二引数にはindexをとる、

// 三項演算子
// if分を簡略化する

// 条件の時 ? true : false ;
// const sanko =  1>0 ? "trueです" : "falseです" ;
// console.log (sanko);

// const num = 1000000;
// 変数numに対して Javascriptの組み込み関数を使っている
// console.log(num.toLocaleString());

// デフォルトの引数を設定することができる
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください' ;
// console.log(formattedNum);

// 関数は変数に対して行う

// const checkNum = (num1, num2) =>
//   num1 + num2 < 100 ? (num1+num2) : "許容値を超えています";
// console.log(checkNum(30, 49));

const flag1 = true;
const flag2 = false;
