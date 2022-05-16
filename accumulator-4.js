let arr = ['Djabrail', 'Emin', 'Magomed', 'Amirhan', 'Ashab', 'Imran', 'Halid', 'Ramzan', 'Deni', 'Vishan'];
let accumulator = '';
for (let i = 0; i < arr.length; i++) {
  if(arr[i][0] === 'A'){
    accumulator += arr[i] + ' '
  }
}
console.log(accumulator)