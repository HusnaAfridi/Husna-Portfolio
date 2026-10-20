export const layers = [
  {
    id: 'request',
    title: 'HTTP Request',
    detail: 'A client sends a request with a method, route, and optional body or query.',
  },
  {
    id: 'router',
    title: 'Express Router',
    detail: 'Matches the path and method to the correct route handler.',
  },
  {
    id: 'middleware',
    title: 'Middleware & Validation',
    detail: 'Shared steps such as parsing JSON, checking auth, and validating input.',
  },
  {
    id: 'controller',
    title: 'Controller',
    detail: 'Reads the request and shapes the HTTP response.',
  },
  {
    id: 'logic',
    title: 'Business Logic',
    detail: 'Applies rules and coordinates work for the feature.',
  },
  {
    id: 'mongo',
    title: 'MongoDB',
    detail: 'Stores and retrieves documents in collections.',
  },
  {
    id: 'response',
    title: 'HTTP Response',
    detail: 'Returns a status code and JSON payload (or a safe error).',
  },
]

export const httpMethods = [
  { method: 'GET', use: 'Read data' },
  { method: 'POST', use: 'Create data' },
  { method: 'PATCH', use: 'Update data' },
  { method: 'DELETE', use: 'Remove data' },
]

export const statusCodes = [
  { code: 200, meaning: 'OK — successful read/update' },
  { code: 201, meaning: 'Created — resource created' },
  { code: 400, meaning: 'Bad Request — invalid input' },
  { code: 401, meaning: 'Unauthorized — auth required/failed' },
  { code: 404, meaning: 'Not Found — resource missing' },
  { code: 500, meaning: 'Server Error — unexpected failure' },
]

export const apiExample = {
  method: 'GET',
  endpoint: '/api/v1/tasks',
  description:
    'Demonstration only — not from a live deployed project unless a verified link is added.',
  illustrative: true,
  parameters: 'Optional query params such as ?completed=false (example).',
  response: {
    success: true,
    data: [
      {
        id: 'example-task-id',
        title: 'Learn Express.js',
        completed: false,
      },
    ],
  },
  errors:
    'Errors should use consistent JSON, e.g. { success: false, message: "..." } with an appropriate status code.',
}

export const databaseConcepts = {
  note: 'MongoDB concepts relevant to backend learning. Real project examples appear only when verified.',
  items: [
    {
      title: 'Documents and collections',
      detail: 'Data stored as documents grouped into collections.',
    },
    {
      title: 'CRUD operations',
      detail: 'Create, read, update, and delete through the API and database drivers/ODM.',
    },
    {
      title: 'Data validation',
      detail: 'Validate shapes and required fields before writing to the database.',
    },
    {
      title: 'Connection management',
      detail: 'Connect once, handle failures, and keep credentials in environment variables.',
    },
    {
      title: 'Schema modeling',
      detail: 'Model documents intentionally when using a schema layer (if/when applicable).',
      learningOnly: true,
    },
    {
      title: 'Database error handling',
      detail: 'Catch connection and query failures; return safe client-facing errors.',
    },
  ],
}

export const securityPractices = {
  note: 'Important practices to apply. Not a claim that every project is already secure.',
  learning: [
    'Input validation',
    'Safe error handling',
    'Authentication versus authorization',
    'Password hashing',
    'Environment variables for secrets',
    'Rate limiting (awareness)',
    'CORS configuration (awareness)',
    'Avoiding sensitive information in logs',
  ],
  implemented: [], // move items here only when a verified project demonstrates them
}
