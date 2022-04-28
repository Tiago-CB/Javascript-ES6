let users = {
   name: 'Tiago'
}
console.log(users);

//Alterando a propriedade de um objeto
users.name = 'Outro nome 1';
console.log(users);

users['name'] = 'Outro nome 2';
console.log(users);

const prop = 'name';
users[prop] = 'Outro nome 3';
console.log(users);

//Criando uma propriedade
users.lastName = 'Cesar Bueno';
console.log(users);

//Deletando uma propriedade
delete users.name;
console.log(users);