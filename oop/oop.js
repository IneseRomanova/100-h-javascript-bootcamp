class Animal{
    constructor(age, color, weight){
        this.age = age
        this.color = color
        this.weight = weight
    }

    talk(){
        return 'The animal makes some sounds.....'
    }
}


class AnimalWithBreed extends Animal{
    constructor(age, color, weight, breed){
       super (age, color, weight)
       this.breed = breed
}
}

class Dog extends AnimalWithBreed{

    constructor(age, color, weight, breed){
        super(age, color, weight, breed)
 

    }
    talk(){
        return 'woof!'
    }


rideHippo(hippo){
    let hippoSound = hipo.talk()
    if (!hipo.isPeaceful){
        hippo.isPeaceful = true
    }
    console.log('Hipo makes sound '+ HippoSound)
    console.log('The dog makes sound ' + this.talk())
    console.log('Everyone is happy everafter!')
}

}

class Hippo extends Animal{
    constructor(age, color, weight, isPeaceful){
        super(age, color, weight)
        this.isPeaceful = isPeaceful
}
    talk(){
    return 'GROWOWWOOWWW !!!'
}
}
class Cat extends AnimationPlaybackEvent{

    constructor(age, color, weight, breed,  hasClaws){
        super(age, color, weight, breed)
        this.hasClaws = hasClaws
     
    }

    talk(){
        return 'Meow'
    }
}
 class Direction{
     constructor(dir){
         this.dir = dir
     }
 }

 new Direction 
 class CareGiver{
     constructor(name, age, yearsOfExperience){
         this.name = name
         this.age = age
         this.yearsOfExperience = yearsOfExperience
     }

     introduce(){
         return `Hello! My name is ${this.name}, I am ${this.age} years old.\n
         I have ${this.yearsOfExperience} years of this.yearsOfExperience. `
     }
 }

class CaregiverInfo {
    constructor (personName,personAge, personYearsOfExperience){
        this.personName = personName
        this.personAge = personAge
        this.personYearsOfExperience = personYearsOfExperience
    }
}

class NationalPark {

    constructor(name){

        this.name = name

        this.southHabitat = []
        this.westHabitat  = []
        this.northHabitat = []
        this.eastHabitat  = []
        this.unassigmenedAnimals = []

        this.availableCaregivers   = []
        this. busyCaregivers = []
    }

    assignCaregiverToPark(careGiverInfo){
        let caregiver = new CareGiver(careGiverInfo.personName, careGiverInfo.personAge, careGiverInfo.personYearsOfExperience)
        this.availableCaregivers.push(caregiver)

    }

    putAnimalToHabitat(dirObject, animal){
        let dir = dirObject.dir
        let caregiver = this.availableCaregivers.pop()

        if (!caregiver){
            console.log ('No available caregiver found')
            return
        }
        this.busyCaregivers.push(caregiver)

        switch(dir){
            case 'North':
                this.northHabitat.push(animal)
                break
                case 'South':
                    this.southhHabitat.push(animal)
                break
                case 'West':
                this.westhHabitat.push(animal)
                break
                case 'SEast':
                    this.easthHabitat.push(animal)
                break
                default:
                    this.unassigmenedAnimals.push(animal)
        }
        console.log (`Animal of color ${animal.color} is put into the ${dir} habitat `)
        
    }
}


let np = new NationalPark()

let caregiverInfoOne = new CaregiverInfo ('Albert', 70, 33)
let caregiverInfoTwo = new CaregiverInfo ('Tom', 40, 13)
np.assignCaregiverToPark(caregiverInfoOne)
np.assignCaregiverToPark(caregiverInfoTwo)



let dog = new dog (10, 'brown', 20, 'bloodhound')
let cat = new Cat (5, 'white', 10, 'Siam', true)
let hippo = new Hippo (40, 'grey', 15, true)
np.putAnimalToHabitat(new Direction('north'), dog)
np.putAnimalToHabitat(new Direction('north'), cat)
np.putAnimalToHabitat(new Direction('south'), hippo)

let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')

const CENTER_POINT = {
    X: canvas.width/2,
    Y: canvas.height/2

} 

let currentPos = CENTER_POINT
ctx.beginPath()

ctx.arx (CENTER_POINT.X, CENTER_POINT.Y, 100, 0, 2 * Math.PI, false)

ctx.stroke()

class Circle {
    constructor(middleX, MiddleY, radius,){
    this.middleX = middleX
    this.MiddleY = MiddleY
    this.radius = radius
}

setColor(color){
    this.color = color
}

draw(){
    ctx.beginPath()
   
    if (this.color){
        ctx.fillStyle = 'red'
    } 
    ctx.arc(this.middleX, this.MiddleY, this.radius, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
}
   }

for (let i = 0; i < 100; i++){
    let randomX = Math.floor(Math.random() * canvas.width)
    let randomY = Math.floor(Math.random() * canvas.height)
    let randomRadius = Math.floor(Math.random() * 100)
    new Circle(randomX, randomY, randomRadius)
    circle.draw()
}

//let step = 20
//for (let i = 0; i <500; i++){
//    let firstStep = step
//   ctx.moveTo(currentPos.X, currentPos.Y)
//   ctx.lineTo(currentPos.X, currentPos.Y - step)
//    ctx.lineTo(currentPos.X + step, currentPos.y - step)
//    step += 10
//    ctx.lineTo(currentPos.X + firstStep, currentPos.Y  - step + step)
//    ctx.lineTo(currentPos.X + firstStep - step, currentPos.Y )
//    step += 10
//    currentPos = {X:currentPos.X + firstStep, Y: currentPos.Y + step}
//   ctx.stroke()

//}

let myMap = new Map()

myMap.set('john.wick@gmail.com', 'John Wick')
myMap.set('ulfrice.zerender@yandex.ru', 'Ulfrice Zerender')

let johnWick = myMap.get('john.wick@gmail.com')
console.log(johnWick)

class Person{
    constructor(firstName, lastName,age){
           this.firstName = firstName
           this.lastName = lastName
           this.age = age
    }
 
}



