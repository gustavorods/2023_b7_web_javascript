const defaultUser = {
    name: "", 
    email: "", 
    level: 1, 

}

let user1 = {
    ...defaultUser, //herdando as especificações de "defaultUSer"
    name: "Gustavo", //depois de herdar uma outra função, você pode adicionar mais coisa ou substituir as coisas, como no caso do "name".
    email: "undefield@bla...",
}

let adm1 = {
    ...defaultUser,
    name: "Gustavo adm",
    email: "ADM@bla...",
    level: 2,
}