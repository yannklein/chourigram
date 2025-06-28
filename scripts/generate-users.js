const fs = require('fs');
const path = require('path');

const avatarDir = path.join(__dirname, '../public/assets/avatars');
const avatarFiles = fs.readdirSync(avatarDir);

const users = avatarFiles.map((fileName, index) => {
  const username = path.basename(fileName, path.extname(fileName));
  return {
    id: (index + 1).toString(),
    username,
    displayName: username.split('_')[0].replace(/\b\w/g, char => char.toUpperCase()),
    avatar: `assets/avatars/${fileName}`,
    isVerified: Math.random() > 0.5,
    followers: Math.floor(Math.random() * 200) + 500,
    following: Math.floor(Math.random() * 1000) + 100,
  };
});

fs.writeFileSync(
  path.join(__dirname, '../lib/generated-users.json'),
  JSON.stringify(users, null, 2)
);
console.log('✅ Mock users generated');