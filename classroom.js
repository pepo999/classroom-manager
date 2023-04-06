class Classroom{

    constructor(students = []){
        this.students = students;
    }

    addStudent(student){
this.students.push(student)
    }

    removeStudent(student){

    }

 shuffleStudents(){
  shuffle(students)
  return this.students;
    }

 
}


