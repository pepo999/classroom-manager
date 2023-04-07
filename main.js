///BONUS
// 1) rimozione dello studente
// 2) sito esteticamente gradevole
// 3) disposizione degli studenti non in lista ma affiancati a due a due
// 4) aggiunta della data di nascita dello studente
// 5) se è il compleanno dello studente il suo nome sarà scritto in modo evidenziato

'use strict'

const student1 = new Student('Simone', 'Maccarone', '20/05/2003');
const student2 = new Student('Luis Alberto', 'Castro', '28/07/1993');
const student3 = new Student('Davide', 'Consigliere', '29/09/1989');
const student4 = new Student('Francesco', 'Badile', '05/09/1993');

const classroom1 = new Classroom([student1, student2, student3, student4]);

let students1 = classroom1.students;

function displayClassroom(students) {

    document.getElementById('student-list').innerHTML = '';

    for (let i = 0; i < students.length; i++) {
        const element = students[i];
        let studentList = document.getElementById('student-list');
        let newLi = document.createElement('li');
        const studentName = document.createTextNode(element.name + ' ' + element.surname);
        newLi.appendChild(studentName)
        const removeButton = document.createElement('button');
        const buttonText = document.createTextNode('Rimuovi');
        const br = document.createElement('br')
        removeButton.appendChild(buttonText);
        removeButton.addEventListener('click', (event) => removeStudent(element));
        studentList.appendChild(newLi);
        newLi.appendChild(br);
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
    let inputDate = document.getElementById('input-date')
    const newStudent = new Student(inputName.value, inputSurname.value, inputDate.value);

    if (inputName.value === '') {
        inputName.style.color = 'red'
        inputName.value = 'inserire un nome'
    }
    if (inputSurname.value === '') {
        inputSurname.style.color = 'red'
        inputSurname.value = 'inserire un cognome'
    }

    else if ((inputName.value !== '' && inputSurname.value !== '') && (inputName.value !== 'inserire un nome' && inputSurname.value !== 'inserire un cognome')) {
        students.push(newStudent);
        displayClassroom(classroom1.students)
        inputName.value = '';
        inputSurname.value = '';
        inputDate.value = '';
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

function resetInputNameOnClick() {
    let inputName = document.getElementById('input-name');
    inputName.value = '';
    inputName.style.color = 'black'
}

function resetInputSurnameOnClick() {
    let inputSurname = document.getElementById('input-surname');
    inputSurname.value = '';
    inputSurname.style.color = 'black'
}

function removeStudent(student) {
    const studentIndex = students1.indexOf(student);
    students1.splice(studentIndex, 1);
    displayClassroom(students1);
}

function birthday(){
    const students = classroom1.students;
    for (let i = 0; i < students.length; i++) {
        const element = students[i];
        
    }
}

