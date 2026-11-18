const users = [
  {
    id: 1,
    name: "Manoj",
    email: "manoj@example.com",
    role: "developer",
    active: true,
    address: {
      city: "Hyderabad",
    },
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@example.com",
    role: "admin",
    active: false,
    address: {
      city: "Pune",
    },
  },
];

const email = new Set();
email.add("manoj@example.com").add("rahul@example.com");

async function findUserById(id) {
  let result;
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) {
      result = users[i];
      break;
    }
  }
  if (!result || result === "") {
    console.log("no User Found");
    return;
  }
  return result;
}
async function updateUserRoles(id, role) {
   let result;
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) {
      users[i].role = role;
      result = users[i];
      break;
    }
  }
  if (!result || result === "") {
    console.log("No User Found");
    return;
  }
  return result;
}
