import { internet } from 'faker';
import { writeFile } from 'fs';

const generateUsers = () => {
  const users = [];

  for (let i = 0; i < 20; i++) {
    const user = {
      username: internet.userName(),
      password: internet.password()
    };
    users.push(user);
  }

  return users;
};

const usersData = generateUsers();
const jsonData = JSON.stringify(usersData, null, 2);

writeFile('users.json', jsonData, (err) => {
  if (err) throw err;
  console.log('users.json file has been generated successfully.');
});
