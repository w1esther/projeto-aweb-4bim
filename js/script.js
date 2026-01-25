let user = localStorage.getItem("nameUser");

if (!user) {
  user = prompt("Digite seu nome:");

  if (user) {
    user = user.trim();
    if (user.length > 0) {
      localStorage.setItem("nameUser", user);
    }
  }
}

if (user) {
  let displayName = user.trim().split(" ")[0];

  if (displayName.length < 2) {
    displayName = user.substring(0, 10);
  }

  const userElement = document.getElementById("user");
  if (userElement) {
    userElement.innerText = displayName;
  }
}
