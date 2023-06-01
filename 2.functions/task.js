function getArrayParams(...arr) {
  let min = Infinity,
      max = -Infinity,
      sum = 0;

      max = Math.max.apply(null,arr);
      min = Math.min.apply(null,arr);
      sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  
  let avg = +((sum / arr.length).toFixed(2));
    
  return { min: min, max: max, avg: avg };
}

getArrayParams(1, 2, 3, -100, 10);


function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  }
  sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return +(sum.toFixed(2));
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity,
      max = -Infinity;
  if (arr.length === 0) {
        return 0;
  }
  max = Math.max.apply(null,arr);
  min = Math.min.apply(null,arr);
  return +(max - min).toFixed(2);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for(let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0) {
      sumEvenElement += arr[i];
    }else{
      sumOddElement += arr[i];
    }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0,
      countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for(let i = 0; i < arr.length; i++) {
     if(arr[i]%2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}


function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0 ; i < arrOfArr.length ; i++) {
    const result = func(...arrOfArr[i]);
    if(maxWorkerResult < result) {
      maxWorkerResult = result
    }
  }
  return maxWorkerResult;
}

