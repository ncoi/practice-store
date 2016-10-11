class Main {
 
    private weightKg = (weight: number): number => {
        return (weight / 2.2);  
    }

    constructor() {
        this.addPerson("Jon");
        this.addPerson("Brad", 6);
        this.addPerson("David", 4.11, 200);
        this.addPerson("Robert");
        this.addPersonOptional("Melissa", 6);
    }
 
    addPerson(name: string, height: number = 5.10, weight: number = 180): void {
        console.log(name + " is " + height + " tall and weighs " + weight + " pounds.");
    }

    addPersonOptional(name: string, height: number = 5.10, weight?: number): void {
        if(weight) {
            console.log(name + " is " + height + " tall and weighs " + weight + " pounds.");    
        }
        else {
            console.log(name + " is " + height + " tall and weighs " + this.weightKg(200) + " kg.");
        }
    }
} 

new Main();
