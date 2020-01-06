

/*let ans = prompt ('', ''),
    arr = [];


    arr = ans.split(',');
    console.log(arr);*/

    let arr = [1,2,31,3],
        i = arr.sort(compareNum);

        function compareNum(a,b){
            return a - b ;
        }
        console.log(arr);