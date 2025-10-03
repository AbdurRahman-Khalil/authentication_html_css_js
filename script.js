let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let logoutBtn = document.getElementById("logoutBtn");
let loginForm = document.getElementById("login-form");

// Signup redirect
if (signupBtn) {
    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "./login.html";
    });
}

// Login form submit
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Form submitted, event type:", e.type);
        // window.location.href = "https://portfolio-teal-three-22.vercel.app";
        window.location.href = "./home.html";
    });
}

// Logout redirect
if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "./index.html";
    });
}
