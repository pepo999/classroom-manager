class Student {

    constructor(name, surname, dob) {
        this.name = name;
        this.surname = surname;
        this.dob = dob;
    }

    isBirthday() {
        const dob = this.dob;
        const dateArray = dob.split('/')
        const correctFormat = dateArray.map(n => n).reverse();
        const newString = correctFormat.join();
        const dateUtc = new Date(newString);
        const today = new Date()
        const twoDates = (dateUtc + today);
        let todayStr = '';
        let birthdayStr = '';
       for (let i = 4; i < 10; i++) {
        const element = twoDates[i];
         todayStr += element;
       }
        for (let i = 71; i < 77; i++) {
            const element = twoDates[i];
            birthdayStr += element;
        }
        if (birthdayStr === todayStr) {
            return true
        } else {
            return false
        }
    }
}