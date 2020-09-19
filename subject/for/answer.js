/*問題1
  for文を使って、 5の倍数を20個小さい順に表示させてみよう
  （最初が5、最後が100になるよ！）
*/

for (var step = 1; step < 21; step++) {
  var result = step * 5;
  console.log(result);
}

/*問題2
  for文を使って、 1~10までを合計するプログラムを作ってみよう
*/

var sum = 0; //合計の値を出す変数

for (var step = 1; step <= 10; step++) {
  sum = sum + step;
}

console.log(sum);

/*問題3
  for文を使って、 1~好きな数字までを合計するプログラムを作ってみよう
*/

var sum = 0; //合計の値を出す変数
var max = 30; //どこまで計算するか

for (var step = 1; step <= max; step++) {
  sum = sum + step;
}

console.log(sum);

/*問題4
  for文とif文を使って、偶数だけを console.logで表示させよう
  数字は 1 ~ 50 までで
  剰余計算式（%）覚えてるかな？
*/

for (var step = 1; step <= 50; step++) {
  if (step % 2 === 0) {
    console.log(step);
    console.log("偶数です");
  }
}
