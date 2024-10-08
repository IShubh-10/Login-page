showLogin();

function showLogin() {
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("welcomeMessage").innerText = "Welcome! Please login.";
}

function showRegister() {
    document.getElementById("registerForm").style.display = "flex";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("welcomeMessage").innerText = "Create an account.";
}

document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = localStorage.getItem(username);
    if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
            localStorage.setItem("user", JSON.stringify(parsedUser));
            alert("Login successful!");
            window.location.href = "index.html"; // Redirect to the home page
        } else {
            document.getElementById("loginAlert").innerText = "Incorrect password";
        }
    } else {
        document.getElementById("loginAlert").innerText = "User not found";
    }
});

document.getElementById("registerButton").addEventListener("click", function() {
    const name = document.getElementById("registerName").value;
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const countryCode = document.getElementById("registerCountryCode").value;
    const contact = document.getElementById("registerContact").value;
    const email = document.getElementById("registerEmail").value;
    const remark = document.getElementById("registerRemark").value;

    if (password !== confirmPassword) {
        document.getElementById("registerAlert").innerText = "Passwords do not match";
        return;
    }

    // Validate contact number
    if (!/^\d{10}$/.test(contact)) {
        document.getElementById("registerAlert").innerText = "Contact must be 10 digits";
        return;
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("registerAlert").innerText = "Invalid email format";
        return;
    }

    const user = {
        name: name,
        username: username,
        password: password,
        contact: countryCode + contact,
        email: email,
        remark: remark
    };

    console.table(user);
    console.log(user);

    localStorage.setItem(username, JSON.stringify(user));
    alert("Registration successful! Please login.");
    showLogin();
});

// Validate contact number on input change
function validateContact() {
    const contactInput = document.getElementById("registerContact");
    if (!/^\d{10}$/.test(contactInput.value)) {
        document.getElementById("registerAlert").innerText = "Contact must be 10 digits";
    } else {
        document.getElementById("registerAlert").innerText = "";
    }
}

// Validate email on input change
function validateEmail() {
    const emailInput = document.getElementById("registerEmail");
    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        document.getElementById("registerAlert").innerText = "Invalid email format";
    } else {
        document.getElementById("registerAlert").innerText = "";
    }
}
