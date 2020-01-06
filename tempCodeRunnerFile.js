console.log(arr);
    
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