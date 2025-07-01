const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const avatarDir = path.join(__dirname, '../public/assets/avatars');
const avatarFiles = fs.readdirSync(avatarDir);

const users = avatarFiles.map((fileName, index) => {
  const username = path.basename(fileName, path.extname(fileName));
  const videoName = `${fileName.split('_')[0]}_video.mp4`;
  const thumbnailName = `${fileName.split('_')[0]}_thumbnail.jpg`;
  const videoPath = path.join(__dirname, '../public/assets/videos', videoName);
  const videoExists = fs.existsSync(videoPath);

  if (videoExists) {
    const thumbnailPath = path.join(
      __dirname,
      '../public/assets/thumbnails',
      thumbnailName,
    );

    // Generate thumbnail using ffmpeg
    const ffmpegCommand = `ffmpeg -y -i "${videoPath}" -ss 00:00:01.000 -vframes 1 -q:v 2 "${thumbnailPath}"`;
    execSync(ffmpegCommand);
  }

  return {
    id: (index + 1).toString(),
    username,
    displayName: username
      .split('_')[0]
      .replace(/\b\w/g, (char) => char.toUpperCase()),
    avatar: `assets/avatars/${fileName}`,
    videoThumbnail: videoExists ? `assets/thumbnails/${thumbnailName}` : null,
    video: videoExists ? `assets/videos/${videoName}` : null,

    isVerified: typeof window !== 'undefined' ? Math.random() > 0.5 : false,
    followers: typeof window !== 'undefined' ? Math.floor(Math.random() * 200) + 500 : 0,
    following: typeof window !== 'undefined' ? Math.floor(Math.random() * 1000) + 100 : 0,
  };
});

fs.writeFileSync(
  path.join(__dirname, '../lib/generated-users.json'),
  JSON.stringify(users, null, 2),
);
console.log('✅ Mock users generated');
