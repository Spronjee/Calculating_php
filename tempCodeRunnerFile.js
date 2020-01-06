let arr = ['first',2,3,'four'];
console.log(arr.length);


//for(let i =0; i < arr.length; i++){
//    console.log(arr[i]);
//}

arr.forEach(function(item, i,arr, mass){
    console.log(i + ': ' + item + '(массив: ' + mass + ')')
});

console.log(arr);