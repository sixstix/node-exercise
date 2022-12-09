fetch("http://localhost:5000/api/users")
  .then((res) => res.json())
  .then((data) => {
    let ul = document.querySelector("#userList");
    for (let user of data) {
      let li = document.createElement("li");
      li.textContent = `${user.firstName} ${user.lastName}`;
      ul.appendChild(li);
    }
  });
