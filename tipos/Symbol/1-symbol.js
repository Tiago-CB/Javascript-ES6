const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);

//Prevenir conflitos entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Tiago',
    [nameSymbol2]: 'Cesar',
    lastName: 'Bueno'
}

console.log(user);

//Symbols criam propriedades que não são enumerable
for (const key in user) {
    if (user.hasOwnProperty(key)){
        console.log(`\nValor de chave ${key}: ${user[key]}`);    
    }
}

console.log('\nPropriedades do objeto use:', Object.keys(user));
console.log('\Valores das propriedades do objeto user:', Object.values(user));

//Exibir símbolos de um objeto
console.log('\nSymbols registrado no objeto user:', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user:', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    up    : Symbol('up'),
    down  : Symbol('down'),
    left  : Symbol('left'),
    right : Symbol('right'),
}