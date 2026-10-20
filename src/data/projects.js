/**
 * Simple practice projects for the portfolio.
 * Status "practice" = learning projects with clear feature scope.
 * Add github/live URLs when repositories are ready.
 */
export const projects = [
  {
    id: 'task-api',
    status: 'practice',
    name: 'Task Management API',
    purpose:
      'A simple REST API to create, read, update, and delete personal tasks.',
    problem:
      'Practice full CRUD so recruiters can see clear routes, validation, and MongoDB usage.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    features: [
      'Create a new task with title and status',
      'Get all tasks or one task by ID',
      'Update task title or mark completed',
      'Delete a task',
      'Filter tasks by completed status',
      'Consistent JSON success and error responses',
    ],
    endpoints: [
      'GET /api/v1/tasks',
      'GET /api/v1/tasks/:id',
      'POST /api/v1/tasks',
      'PATCH /api/v1/tasks/:id',
      'DELETE /api/v1/tasks/:id',
    ],
    database:
      'MongoDB tasks collection — fields: title, completed, createdAt, updatedAt.',
    validation:
      'Require title on create; return 400 for invalid body and 404 when task is missing.',
    learned:
      'How Express routes, controllers, and MongoDB CRUD work together in a small API.',
    github: '',
    live: '',
  },
  {
    id: 'auth-api',
    status: 'practice',
    name: 'User Authentication API',
    purpose:
      'A beginner-friendly auth API for register, login, and a protected profile route.',
    problem:
      'Learn how to store users safely and separate public routes from protected ones.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    features: [
      'Register with name, email, and password',
      'Login and return a simple auth token response',
      'Hash passwords before saving to MongoDB',
      'Protected /me route using auth middleware',
      'Reject duplicate emails on register',
      'Clear error messages for invalid credentials',
    ],
    endpoints: [
      'POST /api/v1/auth/register',
      'POST /api/v1/auth/login',
      'GET /api/v1/auth/me',
    ],
    database:
      'MongoDB users collection — fields: name, email, passwordHash, createdAt.',
    validation:
      'Validate email/password length; never return password hashes in responses.',
    learned:
      'Difference between authentication and authorization, plus safer secret handling.',
    github: '',
    live: '',
  },
  {
    id: 'blog-api',
    status: 'practice',
    name: 'Blog REST API',
    purpose:
      'A simple blog backend to manage posts with create, read, update, and delete.',
    problem:
      'Practice REST design and connecting posts to an author in MongoDB.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    features: [
      'Create a blog post with title and content',
      'List all posts and get a single post',
      'Update or delete a post by ID',
      'Store author reference with each post',
      'Basic search by title query',
      'Shared error-handling middleware',
    ],
    endpoints: [
      'GET /api/v1/posts',
      'GET /api/v1/posts/:id',
      'POST /api/v1/posts',
      'PATCH /api/v1/posts/:id',
      'DELETE /api/v1/posts/:id',
    ],
    database:
      'MongoDB posts collection — fields: title, content, authorId, createdAt, updatedAt.',
    validation:
      'Require title and content; return 404 for unknown post IDs.',
    learned:
      'How to structure clean REST routes and keep controllers small and readable.',
    github: '',
    live: '',
  },
]

export const statusLabels = {
  practice: 'Practice Project',
  completed: 'Completed',
  planned: 'Planned Project',
  'in-progress': 'In Progress',
}
