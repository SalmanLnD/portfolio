const d = (file) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${file}`

const si = (file) => `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${file}.svg`

export const techLogos = {
  JavaScript: d('javascript/javascript-original.svg'),
  Python: d('python/python-original.svg'),
  Java: d('java/java-original.svg'),
  HTML: d('html5/html5-original.svg'),
  CSS: d('css3/css3-original.svg'),
  'React.js': d('react/react-original.svg'),
  Vite: d('vitejs/vitejs-original.svg'),
  'Responsive Web Development': '/tech/responsive.svg',
  'Monaco Editor': d('vscode/vscode-original.svg'),
  'Node.js': d('nodejs/nodejs-original.svg'),
  'Express.js': d('express/express-original.svg'),
  'REST APIs': si('openapiinitiative'),
  MongoDB: d('mongodb/mongodb-original.svg'),
  'MongoDB Atlas': d('mongodb/mongodb-original.svg'),
  MySQL: d('mysql/mysql-original.svg'),
  'AWS RDS': si('amazonrds'),
  'AWS EC2': si('amazonec2'),
  S3: si('amazons3'),
  CloudFront: '/tech/cloudfront.svg',
  'Route 53': si('amazonroute53'),
  SSL: 'https://cdn.simpleicons.org/letsencrypt/003A70',
  PM2: 'https://cdn.simpleicons.org/pm2/2B037A',
  Vercel: 'https://cdn.simpleicons.org/vercel/000000',
  'Google OAuth': d('google/google-original.svg'),
  'GitHub OAuth': d('github/github-original.svg'),
  Webhooks: '/tech/webhook.svg',
  Git: d('git/git-original.svg'),
  GitHub: d('github/github-original.svg'),
  Cursor: 'https://cdn.simpleicons.org/cursor/000000',
  'VS Code': d('vscode/vscode-original.svg'),
  Postman: d('postman/postman-original.svg'),
}

export const dsaIcons = {
  Arrays: 'grid',
  'Linked Lists': 'link',
  Stacks: 'stack',
  Queues: 'queue',
  Trees: 'tree',
  BST: 'tree',
  Graphs: 'graph',
  Searching: 'search',
  Sorting: 'sort',
  'Priority Queues': 'queue',
  Hashing: 'hash',
  Recursion: 'loop',
}
