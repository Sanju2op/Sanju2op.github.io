import upwork from '../../images/upwork_thumbnail.png';
import keyboard from '../../images/stackskb_thumbnail.png';
import music from '../../images/MusicApp_thumbnail.png';

export const site = {
  name: 'Sanjay Lagariya',
  role: 'Full-stack developer',
  title: 'Sanjay Lagariya — Full-stack developer in Gujarat, India',
  description: 'Sanjay Lagariya is a full-stack developer working with React, Next.js, Node.js and MongoDB. Projects, background and contact details.',
  ogDescription: 'Web apps from the React screens to the Node code and database behind them. Projects and contact details.',
  email: 'sanjay.lagariya.dev@gmail.com',
  github: 'https://github.com/sanju2op',
  linkedin: 'https://linkedin.com/in/sanjay-lagariya',
  portfolio: 'https://my-portfolio-sanjay-lagariyas-projects.vercel.app',
  // set at build time, so it is correct after every deploy
  lastUpdated: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }),
};

const repo = 'https://github.com/Sanju2op/Sanju2op.github.io/tree/main';

export const projects = [
  { title: 'Upwork Clone', thumb: upwork, blurb: 'A freelance marketplace modelled on Upwork, with the screen layouts documented.',
    links: [['Code', 'https://github.com/Sanju2op/upwork_clone'], ['Screen layouts', 'https://drive.google.com/file/d/1TXvxBGBqiFaQ7xn6c8C6GbkT7RHeOd-b/view']] },
  { title: 'Keyboard Shop', thumb: keyboard, blurb: 'A keyboard store app with an admin panel.',
    links: [['Code', `${repo}/keyboardShopApp`], ['Screen layouts', 'https://drive.google.com/file/d/1MvEnqVj4-dVnU73Bq6bjzC-4pDJH-k9l/view']] },
  { title: 'Music App', thumb: music, blurb: 'A music player that runs in the browser.',
    links: [['Open it', 'https://sanju2op.github.io/MusicApp/'], ['Code', `${repo}/MusicApp`]] },
  { title: 'Template replicas', blurb: 'Four front-end replicas of existing site templates, built as static pages.',
    links: [1, 2, 3, 4].map((n) => [`Replica ${n}`, `https://sanju2op.github.io/project_${n}`]) },
] as { title: string; thumb?: ImageMetadata; blurb: string; links: string[][] }[];

export const skills: [string, string][] = [
  ['Front end', 'React, Next.js, Bootstrap, Tailwind CSS'],
  ['Back end', 'Node.js, Express'],
  ['Databases', 'MongoDB, MySQL'],
  ['Languages', 'JavaScript, Java'],
  ['Tools', 'Git, GitHub'],
];

// todo: true marks content still waiting on the real thing (shown with a dashed outline)
export const timeline = [
  { when: 'Dates', what: 'Your current role, Company', note: 'One line about what you do there.', todo: true },
  { when: '2024 to 2026', what: 'MCA, UTU Bardoli' },
  { when: '2024', what: 'Top 10, Project Spark Codefest', note: 'Inter-college coding event at UTU' },
  { when: 'Jun to Jul 2024', what: 'Intern, Wappzo Infotech', note: 'HTML, CSS, JavaScript and Bootstrap' },
  { when: 'Before that', what: 'BCA, V.S. Patel College, Bilimora', note: 'Finished with 89.10%' },
];

export const quotes = [
  { text: 'A short quote from a teammate, teacher or client goes here.', who: 'Name, role, where you worked together', todo: true },
  { text: 'A second quote goes here, ideally about how you work.', who: 'Name, role, where you worked together', todo: true },
];

export const scrapbook = [
  { caption: 'Caption', todo: true },
  { caption: 'Caption', todo: true },
  { caption: 'Caption', todo: true },
];

export const themes: [string, string, string][] = [
  ['bookcloth', 'Book cloth', '#A94E32'], ['sky', 'Sky', '#9CC9FF'], ['blue', 'Blue', '#1E40D8'],
  ['marigold', 'Marigold', '#F7B92B'], ['mint', 'Mint', '#8FDDB0'], ['coral', 'Coral', '#FF8A73'],
];
