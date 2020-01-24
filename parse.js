const fs = require('fs');
let prefdata = {
    
};
array = '[{"type":"Car","speed":80000},{"type":"Airplane","speed":300},{"type":"Train","speed":1000},{"type":"Starship","speed":10000}]'
prefdata = JSON.parse(array);


for (let data of array){
    data.parsed = true;
}

let postdata = JSON.stringify(array);

fs.writeFile('array_new.json', array, null, (err, result) => { console.log(err, result); });
