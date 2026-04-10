const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const Question = require('../models/Question');
const User = require('../models/User');

const questions = [
  // ─── MONGODB ───
  { question: "Which method inserts a single document into a MongoDB collection?", options: ["db.collection.insertOne()", "db.collection.add()", "db.collection.push()", "db.collection.create()"], correctAnswer: 0, topic: "mongodb", difficulty: "easy", points: 10, explanation: "insertOne() is the correct method. insertMany() is used for multiple documents." },
  { question: "What does the '$lookup' stage in a MongoDB aggregation pipeline perform?", options: ["Sorts documents", "Performs a left outer join with another collection", "Filters documents by field", "Groups documents by a key"], correctAnswer: 1, topic: "mongodb", difficulty: "medium", points: 15, explanation: "$lookup performs a left outer join to bring in data from another collection." },
  { question: "Which MongoDB operator is used to match any value in an array?", options: ["$in", "$all", "$any", "$or"], correctAnswer: 0, topic: "mongodb", difficulty: "easy", points: 10, explanation: "$in matches documents where the field value equals any value in the specified array." },
  { question: "What is the default port MongoDB runs on?", options: ["3306", "5432", "27017", "6379"], correctAnswer: 2, topic: "mongodb", difficulty: "easy", points: 10, explanation: "MongoDB's default port is 27017." },
  { question: "Which command drops a MongoDB database?", options: ["db.remove()", "db.drop()", "db.deleteDatabase()", "db.dropDatabase()"], correctAnswer: 3, topic: "mongodb", difficulty: "easy", points: 10, explanation: "db.dropDatabase() removes the current database." },
  { question: "What is a MongoDB replica set?", options: ["A set of indexes on a collection", "A group of mongod instances with the same data", "A sharding configuration", "A read preference setting"], correctAnswer: 1, topic: "mongodb", difficulty: "hard", points: 20, explanation: "A replica set is a group of MongoDB instances that maintain the same dataset for high availability." },

  // ─── EXPRESS ───
  { question: "Which Express method registers a middleware function for ALL HTTP methods?", options: ["app.all()", "app.use()", "app.any()", "app.route()"], correctAnswer: 1, topic: "express", difficulty: "easy", points: 10, explanation: "app.use() mounts middleware for all HTTP methods at a given path." },
  { question: "How do you access URL query parameters in Express (e.g. /search?q=hello)?", options: ["req.params.q", "req.body.q", "req.query.q", "req.url.q"], correctAnswer: 2, topic: "express", difficulty: "easy", points: 10, explanation: "req.query holds the parsed query string parameters." },
  { question: "What is the correct order of middleware execution in Express?", options: ["Bottom to top", "Random", "Top to bottom in declaration order", "Alphabetical by route name"], correctAnswer: 2, topic: "express", difficulty: "medium", points: 15, explanation: "Express executes middleware in the order they are declared using app.use() or route definitions." },
  { question: "Which status code should a REST API return when a resource is successfully created?", options: ["200", "201", "204", "202"], correctAnswer: 1, topic: "express", difficulty: "easy", points: 10, explanation: "201 Created is the appropriate HTTP status when a new resource has been successfully created." },
  { question: "How do you define a route parameter in Express?", options: ["/user/{id}", "/user/:id", "/user/[id]", "/user/$id"], correctAnswer: 1, topic: "express", difficulty: "easy", points: 10, explanation: "Express uses the colon syntax :paramName to define route parameters." },

  // ─── REACT ───
  { question: "Which React hook is used to run side effects after a component renders?", options: ["useState", "useCallback", "useEffect", "useMemo"], correctAnswer: 2, topic: "react", difficulty: "easy", points: 10, explanation: "useEffect runs after every render by default and is used for side effects like data fetching." },
  { question: "What does the second argument to useEffect (the dependency array) control?", options: ["The return value of useEffect", "When the effect re-runs", "The component's key", "The state initial value"], correctAnswer: 1, topic: "react", difficulty: "medium", points: 15, explanation: "The dependency array tells React to re-run the effect only when those values change." },
  { question: "What is the purpose of the key prop in a React list?", options: ["Styling list items", "Helping React identify which items have changed", "Setting event handlers", "Defining list order"], correctAnswer: 1, topic: "react", difficulty: "easy", points: 10, explanation: "Keys help React efficiently update the DOM by identifying which elements changed, were added, or removed." },
  { question: "What is a controlled component in React?", options: ["A component with no state", "A component where form data is handled by React state", "A component using refs for DOM access", "A component wrapped in React.memo"], correctAnswer: 1, topic: "react", difficulty: "medium", points: 15, explanation: "A controlled component has its form data managed by React state via value and onChange." },
  { question: "Which hook should you use to avoid re-creating a function on every render?", options: ["useEffect", "useMemo", "useCallback", "useRef"], correctAnswer: 2, topic: "react", difficulty: "medium", points: 15, explanation: "useCallback memoizes a function so it only changes when its dependencies change." },
  { question: "What does React.StrictMode do?", options: ["Enables strict TypeScript checking", "Highlights potential problems by double-invoking functions in development", "Prevents state updates after unmount", "Locks component props"], correctAnswer: 1, topic: "react", difficulty: "hard", points: 20, explanation: "React.StrictMode intentionally double-invokes functions like render and state updaters in dev mode to help catch side effects." },

  // ─── NODE ───
  { question: "Which module in Node.js provides utilities for working with file paths?", options: ["fs", "http", "path", "url"], correctAnswer: 2, topic: "node", difficulty: "easy", points: 10, explanation: "The built-in 'path' module provides utilities for working with file and directory paths." },
  { question: "What does the 'require' function do in Node.js?", options: ["Sends an HTTP request", "Imports a module", "Declares a variable", "Creates a file"], correctAnswer: 1, topic: "node", difficulty: "easy", points: 10, explanation: "require() synchronously loads and returns a module's exports." },
  { question: "What is the Node.js event loop responsible for?", options: ["Compiling JavaScript", "Handling asynchronous callbacks and I/O", "Managing RAM allocation", "Routing HTTP traffic"], correctAnswer: 1, topic: "node", difficulty: "medium", points: 15, explanation: "The event loop enables Node.js to perform non-blocking I/O operations by offloading operations to the system kernel." },
  { question: "Which method reads a file asynchronously in Node.js?", options: ["fs.readFile()", "fs.readFileSync()", "fs.openFile()", "fs.fetchFile()"], correctAnswer: 0, topic: "node", difficulty: "easy", points: 10, explanation: "fs.readFile() is the async version. fs.readFileSync() blocks the event loop and should be avoided in production." },
  { question: "What does process.env provide in Node.js?", options: ["The current process environment variables", "A list of installed packages", "The OS file system", "The running CPU process list"], correctAnswer: 0, topic: "node", difficulty: "easy", points: 10, explanation: "process.env is an object containing the user environment variables, commonly used for config via .env files." }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/quizmern');
    console.log('Connected to MongoDB');

    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log(`✅ Seeded ${questions.length} questions`);

    // Create a demo admin user
    await User.deleteMany({ email: 'admin@quizmern.com' });
    await User.create({ name: 'Admin', email: 'admin@quizmern.com', password: 'admin123', role: 'admin' });
    console.log('✅ Created admin user (admin@quizmern.com / admin123)');

    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
