function Car(make, model, year, mileage, color) {
    this.make = make
    this.model = model
    this.year = year
    this.mileage = mileage
    this.color = color
    this.driveToWork = function(){
        console.log(`The old mileage before I went to work was ${this.mileage},  after work it is now ${this.mileage + 33}`)
    }
    this.driveAroundTheWorld = function(){
        console.log(`The old mileage before I went to around the world was ${this.mileage + 33},  after my trip it's now ${this.mileage + 33 + 20000}`)
    }
    this.runErrands = function(){
        console.log(`The old mileage before I ran errands was ${this.mileage + 33 + 20000},  after running errands it's now ${this.mileage + 33 + 20000 + 20}`)
    }
}



const Jensy = new Car("Honda", "Accord", "2019", 40000, "black")

Jensy.driveToWork()
Jensy.driveAroundTheWorld()
Jensy.runErrands()