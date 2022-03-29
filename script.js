console.log('------------- # 4.a')
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(60, 3));

console.log('------------- # 4.b')
function subtraction(num1, num2) {
  return num1 - num2;
}
console.log(subtraction(60, 3));

console.log('------------- # 4.c')
function multipy(num1, num2) {
  return num1 * num2;
}
console.log(multipy(60, 3));

console.log('------------- # 4.d')
function division(num1, num2) {
  return num1 / num2;
}
console.log(division(60, 3));


console.log('------------- # 5')
let mas1 = [];
function numSer(n) {
  for (let i=1; i <= n; i++) {
    mas1.push(i);
  }
  return mas1.join(' ');
}
console.log(numSer(5));

console.log('------------- # 6')
let mas2 = [];
function numSerRet(n1) {
  for (let j = n1; j > 0; j--) {
    mas2.push(j);
  }
  return mas2.join(' ');
}
console.log(numSerRet(5));


console.log('------------- # 7')
function pow(x, m) {
  return x ** m;
}
console.log(pow(2, 3));


console.log('------------- # 8')
function isBigger(y, y1) {
  if (y>y1) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isBigger(5, 1));
console.log(isBigger(2, 6));

console.log('------------- # 9')
function isSmaller(z, z1) {
  if (z<z1) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isSmaller(5, 1));
console.log(isSmaller(2, 6));