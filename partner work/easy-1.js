function findOddAndEven(numbers) {
    
    const odd = numbers.filter((number) => number % 2 === 1);
  
    
    const even = numbers.filter((number) => number % 2 === 0);
  
    
    const returnObject = {
      odd,
      even,
    }
  
    return returnObject

  }

  console.log(findOddAndEven([1, 2, 9, 24, 90]))