class Classroom{

    constructor(students = []){
        this.students = students;
    }

    addStudent(student){
this.students.push(student)
    }

    
        removeStudent(student) {
            const studentIndex = students.indexOf(student);
            students.splice(studentIndex, 1);
            displayClassroom(students1);
        }


 shuffleStudents(){
  shuffle(students)
  return this.students;
    }

    shuffleTheClassroom() {
        shuffle(students)
        displayClassroom(students)
    }

}



