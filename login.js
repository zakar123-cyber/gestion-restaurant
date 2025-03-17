//  signup data storage
const users = JSON.parse(localStorage.getItem("users")) || [];

// Login form 
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check  user exists
    const user = users.find(user => user.email === email);

    if (!user) {
        alert("User not found. Please sign up first.");
    } else if (user.password !== password) {
        alert("Incorrect password. Please try again.");
    } else {
        alert("Login successful!");
    
        let countdown = 5;
    
        
        const messageElement = document.createElement("div");
        messageElement.style.position = "fixed";
        messageElement.style.top = "50%";
        messageElement.style.left = "50%";
        messageElement.style.transform = "translate(-50%, -50%)";
        messageElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        messageElement.style.color = "white";
        messageElement.style.padding = "20px";
        messageElement.style.borderRadius = "5px";
        messageElement.style.fontSize = "20px";
        messageElement.style.textAlign = "center";
        messageElement.textContent = `Redirecting in ${countdown} seconds...`;
        document.body.appendChild(messageElement);
    
        
        const countdownInterval = setInterval(() => {
            countdown--; 
            messageElement.textContent = `Redirecting in ${countdown} seconds...`;
    
            if (countdown === 0) {
                clearInterval(countdownInterval); 
                window.location.href = "mainpage.html"; 
            }
        }, 1000); 
    }
    
});

