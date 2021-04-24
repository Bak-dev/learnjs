function ageGroup(){

}
let birth =(`input year of birth`);
console.log(birth);

let currentDate = newDate ()

let currentYear = currentDate.getFullyear();
console.log(currentYear);

let age= currentYear - birth;

if (age>36){
 console.log   (`elder`)
}

else if (age>= 18 && age < =36){
    console.log (`youth`)
}
else if (age<18){
    console.log (`minor`)

}
ageGroup();