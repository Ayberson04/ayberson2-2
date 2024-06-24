class Transport {
    constructor(brand, type, year, registration, shade) {
      this.brand = brand;
      this.type = type;
      this.year = year;
      this.registration = registration;
      this.shade = shade;
    }
  
    displayDetails() {
      console.log(`Brand: ${this.brand}, Type: ${this.type}, Year: ${this.year}`);
    }
  
    turnOn() {
      console.log(`${this.brand} ${this.type} is turned on.`);
    }
  
    turnOff() {
      console.log(`${this.brand} ${this.type} is turned off.`);
    }
  
    move() {
      console.log(`${this.brand} ${this.type} is moving.`);
    }
  }
  
  class Automobile extends Transport {
    constructor(brand, type, year, registration, shade, doors) {
      super(brand, type, year, registration, shade);
      this.doors = doors;
    }
  
    switchHeadlights() {
      console.log(`The headlights of ${this.brand} ${this.type} are switched on.`);
    }
  }
  
  class Bike extends Transport {
    constructor(brand, type, year, registration, shade, category) {
      super(brand, type, year, registration, shade);
      this.category = category;
    }
  
    performStunt() {
      console.log(`${this.brand} ${this.type} is performing a stunt.`);
    }
  }
  
  const myCar = new Automobile('Tesla', 'Model S', 2021, 'GHI789', 'White', 4);
  myCar.displayDetails();
  myCar.turnOn();
  
  const myCar2 = new Automobile('Chevrolet', 'Impala', 2022, 'JKL012', 'Black', 4);
  myCar2.displayDetails();
  myCar2.turnOn();
  myCar2.switchHeadlights();
  
  const myBike = new Bike('Honda', 'CBR600RR', 2022, 'XYZ345', 'Red', 'Sport');
  myBike.displayDetails();
  myBike.turnOn();
  myBike.move();
  myBike.performStunt();
  
  const myBike2 = new Bike('Kawasaki', 'Ninja ZX-10R', 2023, 'LMN678', 'Green', 'Sport');
  myBike2.displayDetails();
  myBike2.turnOn();
  myBike2.turnOff();
  