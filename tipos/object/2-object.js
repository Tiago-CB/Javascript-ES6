const user = {
    name: 'Tiago',
    lastName: 'Cesar Bueno'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

//Atribuir propriedades de objetos
Object.assign(user, {fullName: 'Tiago Cesar Bueno'});

//Altera o objeto - Não recomendado
console.log('\nAdiciona a propriedade fullName no objeto user: ', user);
console.log(user);

// Cria um novo objeto utilizando o principal
console.log('\nRetorna um novo objeto atribuindo dois ou mais objetos: ', Object.assign({},user,{age:26}));
console.log(user);

//Previne todas as alterações de um objeto(congela o objeto)
const newObj = {foo:'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após alterações; ', newObj);

//Permite apenas alterações nas propriedades existentes em um objeto
const person = {name: 'Tiago'};
Object.seal(person);

person.name = 'Tiago Cesar Bueno';//alteração permitida
delete person.name;//Não consegue nem deletar
person.age = 26;//não consegue nem criar

console.log('\nVarável person após alterações: ', person);