let user = {
    id:1,
    name: 'Pepe Grillo',
    age: 25,
};

for(let prop in user){
    console.log(prop, user[prop]);
}