const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.linkedin.com/in/vismaysraj/',
  title: 'VSR',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vismay S Raj',
  role: 'Software Developer',
  description:
    "I'm a Full stack web developer based in Bengaluru, India specializing in building (and occasionally designing) exceptional websites, applications and everything in between.",
  resume: '/resumUp.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/vismaysraj/',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Student Management Desk',
    description:
      'Student Details Management Application ',
    stack: ['SASS', 'TypeScript', 'Angular'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'ToDo App',
    description:
      'An app that generally used to maintain our day-to-day tasks or list everything that we have to do',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'ScamYodha',
    description:
      'Phone Call Scams and Risk Management',
    stack: ['SASS', 'Node', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.scamyodha.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Gatsby.js',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Gitlab',
  'Next.JS',
  'Node.js',
  'Nest.js',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vismaysraj@gmail.com',
}

export { header, about, projects, skills, contact }
