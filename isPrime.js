var countPrimes = function (n) {
  let count = n > 2 ? 1 : 0;
  for (let i = 3; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};

function isPrime(n) {
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}
