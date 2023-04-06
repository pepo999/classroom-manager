///BONUS
// 1) rimozione dello studente
// 2) sito esteticamente gradevole
// 3) disposizione degli studenti non in lista ma affiancati a due a due
// 4) aggiunta della data di nascita dello studente
// 5) se è il compleanno dello studente il suo nome sarà scritto in modo evidenziato

'use strict'

const student1 = new Student('Simone', 'Maccarone');
const student2 = new Student('Luis Alberto', 'Castro');
const student3 = new Student('Davide', 'Consigliere');
const student4 = new Student('Francesco', 'Badile');

const classroom1 = new Classroom([student1, student2, student3, student4]);

let students1 = classroom1.students;

function displayClassroom(students) {

    document.getElementById('student-list').innerHTML = '';

    for (let i = 0; i < students.length; i++) {
        const element = students[i];
        let studentList = document.getElementById('student-list');
        let newLi = document.createElement('li');
        studentList.appendChild(newLi);
        const studentName = document.createTextNode(element.name + ' ' + element.surname);
        newLi.appendChild(studentName)
        const removeButton = document.createElement('button');

        const buttonText = document.createTextNode('Rimuovi');

        removeButton.appendChild(buttonText);

        removeButton.addEventListener('click', (event) => removeStudent(element));

        newLi.appendChild(removeButton);
       studentList.appendChild(newLi);
    }
}

function shuffleTheClassroom() {
    shuffle(students1)
    displayClassroom(students1)
}

function addStudentToClassroom() {
    const students = classroom1.students;
    let inputName = document.getElementById('input-name');
    let inputSurname = document.getElementById('input-surname');
    const newStudent = new Student(inputName.value, inputSurname.value);
    
    if (inputName.value === '') {
        inputName.value = 'inserire un nome'
    }
    if (inputSurname.value === '') {
        inputSurname.value = 'inserire un cognome'
    }

    else if ((inputName.value !== '' && inputSurname.value !== '') && (inputName.value !== 'inserire un nome' && inputSurname.value !== 'inserire un cognome')) {
        students.push(newStudent);
        displayClassroom(classroom1.students)
        inputName.value = '';
        inputSurname.value = '';
    }

}



displayClassroom(students1)

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function resetInputNameOnClick(){
    let inputName = document.getElementById('input-name');
    inputName.value = '';
}

function resetInputSurnameOnClick(){
    let inputSurname = document.getElementById('input-surname');
    inputSurname.value = '';
}

function removeStudent(student){
    const studentIndex = students1.indexOf(student);
    students1.splice(studentIndex, 1);
    displayClassroom(students1);
}

