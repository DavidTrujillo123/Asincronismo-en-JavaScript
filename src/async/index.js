const fnAsync = () =>{
    return new Promise((resolve, reject)=>{
    (true)?
        setTimeout(()=>{
            resolve('Async')
        }, 2000)
    :
        reject(new Error('Error!'))
    });
};

const anotherFn = async () =>{
    console.log('Ya la llamamos, ahora llamaremos fnAsync y esperaremos a que se resuelva')
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}
console.log('Before');
anotherFn();
console.log('After');

//**Output**
//Before
//After
//**Wait 2 seconds**
//Async
//Hello


const movies = [
    { id: 1, name:'example1', year: 2001 },
    { id: 2, name:'example2', year: 2002 },
    {id: 3, name:'example3',year: 2003}
];

const getMovies = (movies) => {
    return new Promise((resolve, reject)=>{
        if(movies.length !=0){
            setTimeout(() => {
                resolve(movies)    
            }, 2000);
        }
        else {
            reject(new Error('Error!'))
        }
    });
}

//sin async ni await
getMovies(movies)
    .then(response => console.log(response))
    .catch(err => console.log(err.message));

//async await
const showData = async (movies) =>{
    const data = await getMovies(movies);
    console.log(data);
}
showData(movies);