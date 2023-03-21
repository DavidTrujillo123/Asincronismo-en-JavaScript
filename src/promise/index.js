const promise = new Promise((resolve, reject)=>{
    resolve('Succes');
    //reject('Error');
});

const cows = 9;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10)
        resolve(`We have ${cows} cows on the farm`);
    else
        reject('There are not cows on the farm');
});

countCows.then(result => console.log(result))
.catch(err => console.log(err))
.finally(() => console.log('Finally'));
