let user = localStorage.getItem("nameUser");

if (!user) {
    user = prompt("Digite seu nome:");
    if (user) localStorage.setItem("nameUser", user);
}

document.getElementById("user").innerText = user;