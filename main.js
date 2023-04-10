///BONUS
// 1) rimozione dello studente
// 2) sito esteticamente gradevole
// 3) disposizione degli studenti non in lista ma affiancati a due a due
// 4) aggiunta della data di nascita dello studente
// 5) se è il compleanno dello studente il suo nome sarà scritto in modo evidenziato

'use strict'

const student1 = new Student('Simone', 'Maccarone', '20/05/2003');
const student2 = new Student('Luis Alberto', 'Castro', '28/07/1993');
const student3 = new Student('Jing', 'Wang', '16/06/1993');
const student4 = new Student('Davide', 'Cresta', '30/05/2002');
const student5 = new Student('Davide', 'Consigliere', '29/09/1989');
const student6 = new Student('Francesco', 'Badile', '05/09/1993');
const student7 = new Student('Valentina', 'Cherubini', '01/06/2001');
const student8 = new Student('Pietro', 'Viglino', '29/12/1988');
const student9 = new Student('Daniele', 'Puggioni', '17/08/1999');
const student10 = new Student('Vlad', 'P\'yatnytskyy', '02/10/1997');

const classroom1 = new Classroom([student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]);

let students1 = classroom1.students;

function displayClassroom(students) {
    document.getElementById('student-list').innerHTML = '';
    for (let i = 0; i < students.length; i++) {
        const element = students[i];
        let studentList = document.getElementById('student-list');
        let newLi = document.createElement('li');
        const studentName = document.createTextNode(element.name + ' ' + element.surname);
        newLi.appendChild(studentName)
        if (element.isBirthday()) {
            newLi.style.color = '#fafafa'
            //    newLi.style.textShadow = '0px 0px 5px #fafafa';
            newLi.style.animationName = 'colorRotate';
        }
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
    let inputDateStr = inputDate.value;
    if (inputDateStr === '') { console.log('no date for ' + inputName.value) }
    if (inputDateStr[2] !== '/' && inputDateStr[5] !== '/' &&
        inputDateStr !== '') {
        inputDate.style.color = 'red';
        inputDate.value = 'inserire formato corretto'
    }
    if ( inputDateStr.length !== 0 &&
        inputDateStr.length !== 10 
        ) {
        inputDate.style.color = 'red';
        inputDate.value = 'inserire formato corretto'
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
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
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

function resetInputDateOnClick() {
    let inputDate = document.getElementById('input-date');
    inputDate.value = '';
    inputDate.style.color = 'black'
}

function removeStudent(student) {
    const studentIndex = students1.indexOf(student);
    students1.splice(studentIndex, 1);
    displayClassroom(students1);
}

