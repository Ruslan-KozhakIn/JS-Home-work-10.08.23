
// Task #1


class Circle {
    

    constructor( x, y , radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

    }
    getLength() {
        return 2 * Math.PI * this.radius;
    }
    static getLengthFromRadius(radius) {
        return 2 * Math.PI * radius;
    }
    getCopy() {
    return new Circle(this.x, this.y, this.radius)
    }
    static createCircle(x, y, radius) {
        return new Circle(x, y, radius);
    }
    checkPointInside(point) {
        const distance = Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));          
        return distance <= this.radius;  
    }   
    toString() {
        return `Center of Circle: ${this.x}, ${this.y}, Radius: ${this.radius}`;

    } 


}

// Task #2



function propsCount(currentObject) {
  if (typeof currentObject === 'object') {
    return Object.keys(currentObject).length;
  }
}

//  Task #3

class Person {
    
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;


     }

    getFullName() {
        return this.surname + " " + this.name;
    }


}
 
class Student extends Person {
    constructor(name, surname, year) {
   
        super(name, surname);
        this.year = year;
    }
    
    getFullName(middleName) {
        super.getFullName()
        return super.getFullName() + " " + middleName;   
    
    }
    getCourse() {
        
        const currentYear = 2023;
        const currentCourse = (currentYear - this.year) + 1;
        if (currentCourse >= 1 && currentCourse <=6) {
            return currentCourse;
        }

     }
            

}

//  Task # 4

class Marker {
    #color;
    #ink;
    constructor(color)  {
        this.#color = color;
        this.#ink = 100;

}
        get color() {
            return this.#color;
        }
        get ink() {
            return this.#ink;    

    }
    set color(newColor) {
        this.#color = newColor;
    }
    set ink(newInk) {
        this.#ink = newInk;
    }
   
        print(text) {
            for (let i = 0; i < text.length; i++) {
                if (this.#ink > 0) {
                    if (text[i] !== ' ') {
                        console.log(text[i]);
                        this.#ink -= 10;
                    }
                    else {
                    console.log(text[i]);
                    } 
                }
                    
                   }
                
             }   
            }
            

    

    

class RefillableMarker extends Marker {
     
    constructor(color) {
        super(color);
        

    }
      refill() {
       this.ink += 100;
  }


}    

 // Task # 5

class Worker {
     
    #fullName;
    #dayRate;
    #workingDays;
    #experience;
    constructor(fullName, dayRate, workingDays, experience) {
        this.#fullName = fullName;
        this.#dayRate = dayRate;
        this.#workingDays = workingDays;
        this.experience = experience;
    }
    getSalary() {
           return this.#workingDays * this.#dayRate
       }
    getSalaryWithExperience() {
        return this.#workingDays * this.#dayRate * this.#experience
    }
    addWorkingDays(n) {
        this.#workingDays += n;
    }
    static sortBySalary(workers) {
        let sorted = [].concat(workers);
        sorted = sorted.sort((a, b) => a.getSalary() > b.getSalary() ? 1 : -1);
        return sorted
    }
    get fullName() {
        return this.#fullName
    }
    get dayRate() {
        return this.#dayRate
    }
    get experience() {
        return this.#experience
    }
    set fullName(value) {
        if (typeof value === 'string')
            this.#fullName = value;
        } 
    set dayRate(value) {
        if (typeof value === 'number')
            this.#dayRate = value;
        }        
    set experience(value) {
        if (typeof value === 'number')
            this.#experience = value;
    }
 }






