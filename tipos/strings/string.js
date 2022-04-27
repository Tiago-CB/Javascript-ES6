//Retorna o tamanhode uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a stringo por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador:`, splittedText);

//Buscar um valor e substituilo por outro
const replaceText = 'Texto'.replace('Test','txeT');
console.log('\n Substituição de valor:', replaceText);

//Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('Última letra de uma String', lastChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValorr da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da strng da segunda letra até a última:',secondToEnd);

//Retorna N caracteres a partir de uma posiçãp

const twoCharsBeforeLastPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são:',twoCharsBeforeLastPos);