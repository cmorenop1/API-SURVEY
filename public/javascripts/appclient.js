/*
    filename: appclients.js
    Student name: Rudy Huayhua
    Student id: 301229804
    Date: Feb 05, 2022
*/
console.log(getTitle);


if (getTitle == "Edit Survey") {
    let deleteButtons = document.querySelectorAll('.btn-danger');

    for (button of deleteButtons) {
        button.addEventListener('click', (event) => {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
            }
        });
    }
}

if (getTitle == "Sign-up Form") {
    console.log('This is Sign-up form.');
    const confirm = document.querySelector('input[name=password_confirm]');
    confirm.addEventListener('change', onChange);
}


function onChange() {
    console.log("Si")

    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');

    if (confirm.value === password.value) {
        confirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}



if (getTitle == "Attend Survey") {

    const submitButton = document.querySelector('#submit-btn');

    const radio = document.querySelectorAll('.form-check-input')


    submitButton.addEventListener('click', (event) => {
        var totalQuestions = 0;

        var names = {};
        $(':radio').each(function() {
            names[$(this).attr('name')] = true;
        });
        var count = 0;
        $.each(names, function() { 
            count++;
        });
        if ($(':radio:checked').length === count) {
            alert("all answered");
        }
        else{
            alert("please answer all the questions,");
            event.preventDefault();
        }
        
    })


}