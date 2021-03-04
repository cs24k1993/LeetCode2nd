// 1. 暴力求解
function maxProfit(prices) {
  max_profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j ++) {
      max_profit = Math.max(max_profit, prices[j]-prices[i]);
    }
  }
  return max_profit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4]));


// 2. 如果第i天卖出利润最大，那一定是在[0,i-1]买入的，用一个变量min_price记录最小值。
// 所以遍历数组，依次求每个卖出时机的的最大差值，再从中取最大值
function maxProfit2(prices) {
  let min_price = Infinity;
  let max_profit = 0;
  prices.forEach((price) => {
    max_profit = Math.max(price - min_price, max_profit);
    min_price = Math.min(price, min_price);
  })
  return max_profit;
}

console.log(maxProfit2([7,1,5,3,6,4]));
console.log(maxProfit2([7,6,4]));