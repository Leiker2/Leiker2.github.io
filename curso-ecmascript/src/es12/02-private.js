class user{
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodo
    #speak(){
        return 'hello';
    }
    #greeting(){ //clases privadas
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age
    }
    set #uAge(n){
        this.age = n;
    }
}

const bebeloper = new user ('Leiker', 27);

console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20)