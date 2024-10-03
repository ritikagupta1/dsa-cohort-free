const swap = (i, j) => {
  let num1 = i;
  let num2 = j;
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return [num1, num2];
};

const bubbleSort = (arr) => {
  //to sort all elements
  for (let j = 0; j < arr.length; j++) {
    //to sort 1 element
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = swap(arr[i], arr[i + 1]);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  console.log(arr);
};

let arr = [5, 3, 8, 4, 2];
bubbleSort(arr);
