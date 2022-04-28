const myNumber = 12.4038;

//Transformar número para string
const numAsStr = myNumber.toString();
console.log('Número transformado para string: ', myNumber, typeof numAsStr);

//Retorna a variável Number com determinado número de casas decimais
const twoDecim = myNumber.toFixed(2);
console.log('Número com duas casas decimais: ', twoDecim);

//Transforma uma string em float
console.log('String parceada para float: ', parseFloat(myNumber));

//Transforma uma string em int
console.log('String parceada para int: ', parseInt(myNumber));
