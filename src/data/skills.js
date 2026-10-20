/** Levels: 'used' | 'learning' — no percentage bars. */
export const skillCategories = [
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'used' },
      { name: 'Express.js', level: 'used' },
      { name: 'REST API development', level: 'used' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    skills: [{ name: 'MongoDB', level: 'used' }],
  },
  {
    id: 'concepts',
    title: 'Backend Concepts',
    skills: [
      { name: 'CRUD operations', level: 'learning' },
      { name: 'HTTP methods & JSON', level: 'learning' },
      { name: 'Middleware', level: 'learning' },
      { name: 'Request validation', level: 'learning' },
      { name: 'Error handling', level: 'learning' },
      { name: 'Authentication & authorization', level: 'learning' },
    ],
  },
  {
    id: 'languages-tools',
    title: 'Languages & Tools',
    skills: [
      { name: 'JavaScript', level: 'used' },
      { name: 'Git & GitHub', level: 'learning' },
      { name: 'NestJS', level: 'learning' },
    ],
  },
]

export const levelLabels = {
  used: 'Used in projects',
  learning: 'Currently learning',
}
