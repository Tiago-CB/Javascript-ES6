//Retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador:`, splittedText);

//Buscar um valor e substitui por outro
const replaceText = 'Texto'.replace('Test','txeT');
console.log('\n Substituição de valor:', replaceText);

//Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('Última letra de uma String', lastChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:',secondToEnd);

//Retorna N caracteres a partir de uma posição

const twoCharsBeforeLastPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são:',twoCharsBeforeLastPos);