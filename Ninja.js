class Ninja{
    constructor(name, health)
    {
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }

    SayName(){
        console.log(this.name)
    }
    ShowStats(){
        console.log("****************************")
        console.log(`Name of the ninja is: ${this.name}`)
        console.log(`Health of the ninja is: ${this.health}`)
        console.log(`Speed of the ninja is: ${this.speed}`)
        console.log(`Strength of the ninja is: ${this.strength}`)
        console.log(`Wisdom is: ${this.wisdom}`)
        console.log("****************************")
    }
    DrinkSakee(){
        this.health+=10;
    }
}
const Wolf= new Ninja("Wolf", 100)
// Wolf.SayName();
// Wolf.ShowStats();
// Wolf.DrinkSakee();
// Wolf.ShowStats();


class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10)
        this.wisdom=10;
    }
    speakWisdom(){
        this.DrinkSakee();
        console.log("What one programmer can do  in one month, two prgrammers can do it in two moths,")
    }
}


const Agara= new Sensei("Agara")


Agara.ShowStats();
Agara.speakWisdom();
Agara.ShowStats();

