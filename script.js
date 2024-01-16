class Person {
    constructor(name, age) {
        person.name = name;
        person.age = age;
    }

    get personName() {
        return person.name;
    }

    set PersonAge(value) {
        person.age = value;
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
