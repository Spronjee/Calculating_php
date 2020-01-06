

/*let ans = prompt ('', ''),
    arr = [];


    arr = ans.split(',');
    console.log(arr);*/

    /*let arr = [1,2,31,3],
        i = arr.sort(compareNum);

        function compareNum(a,b){
            return a - b ;
        }
        console.log(arr);*/
    
        let soldier = {
            healh: 400,
            armor: 100
        }
        let john = {
            healh:100
        }
        john.__proto__ = soldier;

        console.log(john);
        console.log(jonh.armor);