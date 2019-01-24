// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(personAttributes){
        super(personAttributes);
        this.previousBackground = personAttributes.previousBackground;
        this.className = personAttributes.className;
        this.favSubjects = personAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => console.log(element));
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const josh = new Instructor({
    name: 'Josh',
    age: 25,
    location: "Utah",
    gender: 'M',
    specialty: 'Web Development',
    favLanguage: 'JavaScript',
    catchPhrase: 'Syntactical Sugahh'
});



const joe = new Student({
    name: 'Joe',
    age: 23,
    location: 'NYC',
    gender: 'M',
    previousBackground: 'Product Manager',
    className: 'Web17',
    favSubjects: ['JavaScript', 'Python', 'Machine Learning', 'Responsive Design']
});



const ryan = new ProjectManager({
    name: 'Ryan',
    age: 24,
    location: 'SF',
    gender: 'M',
    gradClassName: 'Web14',
    favInstructor: 'Josh'
});



// =====  Tests ===== //

// ===== General
// console.log(josh);
// console.log(joe);
// console.log(ryan);

// ===== Person Class Method Tests
// josh.speak() // Hello my name is Josh, I am from Utah​​​​​
// joe.speak() //​​​​​ Hello my name is Joe, I am from NYC​​​​​
// ryan.speak() // Hello my name is Ryan, I am from SF​​​​​

// ===== Instructor Class Method Tests
// josh.demo('Unforgivable Curses') // Today we are learning about Unforgiveable Curses​​​​​
// josh.grade(joe, 'Unforgivable Curses') // ​​​​​Joe receives a perfect score on Unforgivable Curses​​​​​

// ===== Student Class Method Tests
// joe.listsSubjects(); // JavaScript​​​​​ ​​// Python​​​​​ ​​​​​// Machine Learning​​​​​​ ​​​​// Responsive Design​​​​​
// joe.PRAssignment('Unforgiveable Curses') // Joe has submitted a PR for Unforgiveable Curses​​​​​
// joe.sprintChallenge('Unforgiveable Curses') // ​​​​​Joe has begun sprint challenge on Unforgiveable Curses​​​​​

// ===== Project Manager Class Method Tests
// ryan.standUp('web17_ryan') //​​​​​ Ryan announces to web17_ryan, @channel standy times!​​​​​​​​​​
// ryan.debugsCode(joe, 'Unforgiveable Curses') //​​​​​ Ryan debugs Joe's code on Unforgiveable Curses​​​​​