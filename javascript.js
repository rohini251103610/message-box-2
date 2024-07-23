
        function decline(){
     alert("Question Declined");
}

let questions = [
    "what is your name",
    "how many members in your family",
    "what is your strength",
    "who is your profession",
    "are you a programming languages",
    "how many languages do you know",
    "are you an engineer",
    "what is your age",
    "who is the cuurent owner of tesla",
    "who is the prime minister of india"
]

function accept(){
    let question = document.querySelector("#in").value;
    question = question.toLowerCase();
    if(questions.includes(question)) window.alert("Your question accepted ");
    else window.alert("Your question is rejected Chief");
}
    