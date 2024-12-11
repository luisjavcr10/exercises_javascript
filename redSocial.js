const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
];
  
const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mas el cafe que el te",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
];

const logIn=(username,password) =>{
    for(user of usersDatabase){
        if(user.username==username){
            if(user.password==password){
                return true;
            }else{
                return false;
            }
        }
    }
    return false;
}

const signIn = (username,password) =>{
    if(logIn(username,password)){
        for(user of usersTimeline){
            if(user.username.toLowerCase()==username){
                return user.timeline;
            }
        }
    }
}

console.log(logIn('mariana','789'));

console.log(signIn('mariana','789'));
