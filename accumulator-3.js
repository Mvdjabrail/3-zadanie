let arr = ['JavaScript', 'Pyton', 'C++', '1c', 'Swift', 'Pascal', 'Java', 'Ruby', 'Go', 'Rust'];
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
  if(arr[i].length > 3){
    accumulator.push(arr[i])
  }
  
}console.log(accumulator)