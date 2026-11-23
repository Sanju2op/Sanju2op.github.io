export const site = {
  name: 'Sanjay Lagariya',
  role: 'Full-stack developer',
  title: 'Sanjay Lagariya — Resume | Full-stack developer in Gujarat, India',
  description: 'Resume of Sanjay Lagariya, a full-stack developer working with React, Next.js, Node.js and MongoDB. Experience, projects, skills and education.',
  location: 'Gujarat, India',
  email: 'sanjay.lagariya.dev@gmail.com',
  github: { href: 'https://github.com/sanju2op', text: 'github.com/sanju2op' },
  linkedin: { href: 'https://linkedin.com/in/sanjay-lagariya', text: 'linkedin.com/in/sanjay-lagariya' },
  portfolio: { href: 'https://sanjaylagariya.vercel.app', text: 'sanjaylagariya.vercel.app' },
  summary: 'Full-stack developer who builds web apps from the React screens to the Node and Express code and the database behind them. Works with JavaScript, React, Next.js, Node.js, MongoDB and MySQL.',
  // set at build time, so it is correct after every deploy
  lastUpdated: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }),
};

// DUMMY bullets: replace with real, specific ones (tracked in Docs/NEEDS.md)
export const experience = [
  { when: 'Jun 2026 to now', title: 'Full-stack developer, DI Solutions', bullets: ['Build and maintain React and Next.js interfaces for client web applications.', 'Develop the Node.js APIs and MySQL queries behind those screens.'] },
  { when: 'Dec 2025 to Jun 2026', title: 'Intern, DI Solutions', bullets: [] },
  { when: 'Jun to Jul 2024', title: 'Intern, Wappzo Infotech', bullets: ['Built responsive pages with HTML, CSS, JavaScript and Bootstrap.'] },
];

export const projects = [
  { title: 'Testimonials Creation & Embedding System', note: 'MERN platform to collect, manage and embed customer testimonials on other sites.', link: { href: 'https://github.com/Sanju2op/major-project-mern', text: 'github.com/Sanju2op/major-project-mern' } },
  { title: 'Upwork Clone', note: 'Freelancing platform prototype for clients, freelancers and admins.', link: { href: 'https://github.com/Sanju2op/upwork_clone', text: 'github.com/Sanju2op/upwork_clone' } },
  { title: 'Keyboard Shop', note: 'E-commerce app for mechanical keyboards, with an admin area.', link: { href: 'https://github.com/Sanju2op/Sanju2op.github.io/tree/main/keyboardShopApp', text: 'github.com/Sanju2op/Sanju2op.github.io (keyboardShopApp)' } },
];

export const skills: [string, string][] = [
  ['Front end', 'React, Next.js, Bootstrap, Tailwind CSS'],
  ['Back end', 'Node.js, Express'],
  ['Databases', 'MongoDB, MySQL'],
  ['Languages', 'JavaScript, Java'],
  ['Tools', 'Git, GitHub'],
];

export const education = [
  { when: '2024 to 2026', title: 'MCA, UTU Bardoli' },
  { when: 'Before that', title: 'BCA, V.S. Patel College, Bilimora', note: 'Finished with 89.10%' },
];

export const achievements = [
  { when: '2024', title: 'Top 10, Project Spark Codefest', note: 'Inter-college coding event at UTU' },
];
