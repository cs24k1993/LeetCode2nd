// 先创建一个一维数组，再对该数组中每一个元素赋值，两次调用 map
// fill()不传参数时，数组元素undefined
function generate(numRows) {
  return Array(numRows).fill().map( (_, i, r) => r[i] = Array(i + 1).fill(1).map( (v, j) => 
    j > 0 && j < i ? r[i - 1][j - 1] + r[i - 1][j] : v))
}

console.log(generate(5));