function createUser() {
  const user = "arezoo";
  return function () {
    console.log(user, "test");
  };
}

const create = createUser();
console.log(create());
