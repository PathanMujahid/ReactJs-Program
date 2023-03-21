class Car {
    constructor(brand, model, engine, fuel) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.fuel = fuel;
    }

    getDetails() {
        return (`The car brand is ${this.Brand}`)
    }

}


let car1 = new Car("Maruti Suzuki", "Swift", "1499cc", "Petrol");
let car2 = new Car("Hyundai", "Verna", "1100cc", "petrol");
let car3 = new Car("Mahindra", "Thar", "1899cc", "diesel");
let car4 = new Car("Tata", "Nexon", "1200cc", "Electric");
console.log(car4);