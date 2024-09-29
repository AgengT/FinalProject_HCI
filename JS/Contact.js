
function validateForm() {
    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;
    var check = document.getElementById("checkbox").checked;
    var isValid = true;

    function validateMessage(message) {
        var word = message.split(" ");
        var count = word.filter(function(word) {
            return word.length > 0;
        }).length;
    
        if (count < 5) {
            return false;
        }
    
        return true;
    }    

    if (fullName.length < 5) {
        var displayError = document.createElement("div");
        displayError.textContent = "Please enter your full name (minimum 5 letters)";
        displayError.classList.add("error");
        document.getElementById("errorContainer").appendChild(displayError);
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        var displayError = document.createElement("div");
        displayError.textContent = "Please enter a valid email";
        displayError.classList.add("error");
        document.getElementById("errorContainer").appendChild(displayError);
        isValid = false;
    } else if (country.length < 2) {
        var displayError = document.createElement("div");
        displayError.textContent = "Please enter a valid country";
        displayError.classList.add("error");
        document.getElementById("errorContainer").appendChild(displayError);
        isValid = false;
    } else if (!validateMessage(message)) {
        var displayError = document.createElement("div");
        displayError.textContent = "Please enter your message (Minimum 5 words)";
        displayError.classList.add("error");
        document.getElementById("errorContainer").appendChild(displayError);
        isValid = false;
    }

    if (!check) {
        var displayError = document.createElement("div");
        displayError.textContent = "Please check the box";
        displayError.classList.add("error");
        document.getElementById("errorContainer").appendChild(displayError);
        isValid = false;
    }

    return isValid;
}


