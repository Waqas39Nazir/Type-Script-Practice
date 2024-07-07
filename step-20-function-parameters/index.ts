//function with optional parameters
const functionA = (a: number, b: number, c?: number): number => {
  if (c) {
    return a * b * c;
  }

  return a * b;
};

console.log("Multiplication of Two Numbers:", functionA(3, 3));

console.log("Multiplication of Three Numbers:", functionA(3, 3, 3));

//function with default parameters
const functionB = (a: number, discount: number = 0.25) => {
  return a * (1 - discount);
};

console.log("Default Function Parameter:", functionB(100));

//function with rest parameters
const calculateAverage = (...rest: number[]) => {
  const sum = rest.reduce((a, b) => {
    return a + b;
  });

  return sum;
};

console.log("Function with Rest Parameters:", calculateAverage(2, 2, 3, 3));
