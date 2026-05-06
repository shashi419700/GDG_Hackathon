function entropy(n) {
  if (n <= 1) return 0;
  return Math.log2(n);
}

module.exports = entropy;