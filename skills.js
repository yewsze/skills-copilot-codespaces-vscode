function calculateNumbers(var1, var2) {
  const sum = var1 + var2;
  const difference = Math.abs(var1 - var2);
  return sum * difference + (var1 % 3) + (var2 % 5);
}