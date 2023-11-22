const numberString = prompt(
    "Enter some integers separated by commas.",
    "1,2,3,4,5"
  );
  
  // Split the string of numbers into an array of strings.
  const numberStrings = numberString.split(",");
  
  // Convert the array of strings into an array of numbers.
  const numbers = [];
  for (const str of numberStrings) {
    numbers.push(parseInt(str));
  }
  
  // Peform some calculations on the numbers.
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  
  // Complete the functions below to make the program work!
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the length of the array
   */
  function getLength(numbers) {
    return numbers.length;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the median of the numbers
   */
  function getSum(numbers) {
    let sumArray = 0;
    for (var i=0; i < numbers.length; i++) {
      sumArray += numbers[i];
    }
    return sumArray;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the mean of the numbers
   */
  function getMean(numbers) {
    let sumArray = 0;
    let meanArray = 0;
    for (var i=0; i < numbers.length; i++) {
      sumArray += numbers[i];
      meanArray = sumArray/(numbers.length);
    }
    return meanArray;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the smallest of the numbers
   */
  function getMin(numbers) {
    numbers.sort()
    return min = numbers [0]
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the largest of the numbers
   */
  function getMax(numbers) {
    numbers.sort()
    return max = numbers[numbers.length-1]
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the range of the numbers (max - min)
   */
  function getRange(numbers) {
    return getMax(numbers) - getMin(numbers);
  }