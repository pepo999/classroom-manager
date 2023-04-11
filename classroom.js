class Classroom {

    constructor(students = []) {
        this.students = students;
    }

    removeStudent(student) {
        const studentIndex = students.indexOf(student);
        students.splice(studentIndex, 1);
        displayClassroom(students1);
    }

    addStudent(student) {

    }

    shuffleStudents() {
        const tempArray = [];
        while(this.students.length > 0) {
const randomNumber = Math.random() * this.students.length;
const randomIndex = Math.floor(randomNumber);
const arrayOfDeleted = this.students.splice(randomIndex, 1);
const randomStudent = arrayOfDeleted[0];
tempArray.push(randomStudent)
        }
    }

    shuffleTheClassroom() {
        shuffle(students)
        displayClassroom(students)
    }

}



