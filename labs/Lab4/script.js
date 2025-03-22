//All the constants grabbed from the DOM to use later on
const mInfo = document.getElementById("moreInfo");
const charCount = document.getElementById("charCount");
const maxLength = 30;
const hForm = document.getElementById("hiringForm")
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");


// Creating and enforcing the character limit on the more info textbox
mInfo.addEventListener("input", () => {
    let text = mInfo.value;

    // Enforce max length manually
    if (text.length > maxLength) {
        text = text.substring(0, maxLength);
        mInfo.value = text;
    }

    // Update character counter to count down to 0. Starts at 0 on webpage refresh though lol
    charCount.textContent = `${30 - text.length} / ${maxLength}`;

    // Optional visual feedback
    if (text.length >= maxLength) {
        charCount.classList.add("limit-reached");
    } else {
        charCount.classList.remove("limit-reached");
    }
});

ageInput.required = true;

// Event listener to make sure that the age is in the correct range and is actually a number
ageInput.addEventListener("input", function () {
    const value = ageInput.value.trim();
    const age = Number(value);

    if (value === "") {
        ageInput.setCustomValidity("Please enter your age");
    } else if (!Number.isInteger(age)) {
        ageInput.setCustomValidity("Age must be a whole number.");
    } else if (age < 21 || age > 99) {
        ageInput.setCustomValidity("Age must be between 21 and 99.");
    } else {
        ageInput.setCustomValidity(""); // Clear the error
    }

    // Trigger built-in browser error UI if needed
    ageInput.reportValidity();
});


//Making it required for testing purposes
phoneInput.required = true;

phoneInput.addEventListener("input", function () {
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (phoneInput.value.trim() === "") {
        phoneInput.setCustomValidity("Phone number is required.");
    } else if (!phonePattern.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Format must be XXX-XXX-XXXX.");
    } else {
        phoneInput.setCustomValidity(""); // Valid input
    }
    phoneInput.reportValidity(); // Optional: show the error right away
});


// Creating an event listener to store data when the submit button is pressed
hForm.addEventListener("submit", function (event){
    event.preventDefault()

    let fName = document.getElementById("fName").value
    let lName = document.getElementById("lName").value
    let add1 = document.getElementById("Add1").value
    let add2 = document.getElementById("Add2").value
    let city = document.getElementById("City").value
    let State= document.getElementById("state").value
    let phone = document.getElementById("phone").value
    let age  = document.getElementById("age").value
    let email = document.getElementById("email").value
    let pw = document.getElementById("password").value
    let marital = document.querySelector("input[name='maritalStatus']:checked").value
    let checkedC = document.querySelectorAll("input[name='color']:checked")
    let colors = Array.from(checkedC).map(box => box.value)
    let info = document.getElementById("moreInfo").value
    let applicant = {
        fName,
        lName,
        add1,
        add2,
        city,
        State,
        phone,
        age,
        email,
        pw,
        marital,
        colors,
        info
    }

    let str = JSON.stringify(applicant)
    console.log(str)
})














