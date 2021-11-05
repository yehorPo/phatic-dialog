let person = {
    name: "",
    surname: "",
    phone: "",
    order: "",
    problem: "",
    descr: ""
}
const button = document.getElementById("start");
const hi = "Hi! My name is SupportBot and i`m ready to help you with you problem! ";
const bye = "Thank you for you answers, manager will call you soon to solve your problems. Have a nice day!"
const questions = [
    "What is your name?",
    "What is your surname?",
    "Can you tell your phone number?",
    "What about order`s id, you can find it in your email?", 
    "Choose your problem: ",
    "Write your problem.",
    "Please describe your problem."

];
const problems = [
    "wrong order", 
    "order is late",
    "wrong address",
    "you want to change your order",
    "something else"
];
const errors = [
    "Sorry, I can`t understand you",
    "Write your phone correctly please"
]
function startDialog(){
    alert(hi);
    person.name = prompt(questions[0]);
    person.surname = prompt(questions[1]);
    person.phone = prompt(questions[2]);
    person.order = prompt(questions[3]);
    person.problem = prompt(questions[4] + problems);
    while(!problems.includes(person.problem)){
        alert(errors[0]);
        person.problem = prompt(questions[4] + problems);
    }
    if(person.problem == problems[4]){
        person.problem = prompt(questions[5]);
    }
    person.descr = prompt(questions[6]);
    alert(bye);
    console.log(person);
}
button.addEventListener('click', startDialog);