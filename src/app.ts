interface User {
  name: string;
  email: string;
  roll?: number;
  secretCode: number;
  status: boolean;
}

let users: User = {
  name: "Abdul Majid",
  email: "abdulmajid@gmail.com",
  // roll: 1,
  secretCode: 230,
  status: true,
};
console.log(users);
