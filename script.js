class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get personName() {
        return this._name;
    }

    set age(value) {
        this._age = value;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.personName} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.personName} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
