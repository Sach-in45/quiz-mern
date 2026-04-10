// Local Question Bank — 120 questions across all topics and difficulties

const QUESTION_BANK = {
  mongodb: {
    easy: [
      {
        question: "Which method inserts a single document in MongoDB?",
        options: ["insertMany()", "insertOne()", "add()", "push()"],
        correctAnswer: 1,
        explanation:
          "insertOne() is used to add a single document to a collection.",
      },
      {
        question: "What is the default port of MongoDB?",
        options: ["3306", "5432", "27017", "8080"],
        correctAnswer: 2,
        explanation: "MongoDB runs on port 27017 by default.",
      },
      {
        question: "Which command removes a database?",
        options: ["drop()", "deleteDB()", "dropDatabase()", "removeDB()"],
        correctAnswer: 2,
        explanation: "db.dropDatabase() deletes the current database.",
      },
      {
        question: "What is a MongoDB collection?",
        options: ["Row", "Column", "Table", "Database"],
        correctAnswer: 2,
        explanation:
          "A collection is similar to a table in relational databases.",
      },
      {
        question: "What does BSON stand for?",
        options: ["Binary JSON", "Basic JSON", "Binary JS Object", "Base JSON"],
        correctAnswer: 0,
        explanation: "BSON is a binary-encoded format used by MongoDB.",
      },

      {
        question: "Which method retrieves documents?",
        options: ["get()", "find()", "select()", "fetch()"],
        correctAnswer: 1,
        explanation: "find() is used to query documents from a collection.",
      },
      {
        question: "What is the _id field?",
        options: ["Optional field", "Primary key", "Foreign key", "Index"],
        correctAnswer: 1,
        explanation: "_id uniquely identifies each document.",
      },
      {
        question: "Which method deletes one document?",
        options: ["remove()", "deleteOne()", "drop()", "erase()"],
        correctAnswer: 1,
        explanation: "deleteOne() removes a single matching document.",
      },
      {
        question: "Which method updates one document?",
        options: ["update()", "updateOne()", "modify()", "edit()"],
        correctAnswer: 1,
        explanation: "updateOne() updates the first matching document.",
      },
      {
        question: "Which operator matches multiple values?",
        options: ["$all", "$in", "$or", "$any"],
        correctAnswer: 1,
        explanation: "$in matches any value from an array.",
      },

      {
        question: "What does $set do?",
        options: [
          "Deletes field",
          "Sets field value",
          "Adds field",
          "Removes document",
        ],
        correctAnswer: 1,
        explanation:
          "$set updates specific fields without replacing the whole document.",
      },
      {
        question: "Which operator increments a value?",
        options: ["$set", "$inc", "$add", "$push"],
        correctAnswer: 1,
        explanation: "$inc increases a field value by a specified number.",
      },
      {
        question: "What is a document?",
        options: ["Row", "JSON object", "Column", "Table"],
        correctAnswer: 1,
        explanation: "A document is a JSON-like object stored in MongoDB.",
      },
      {
        question: "Which command shows all databases?",
        options: ["show dbs", "list db", "db.show()", "get dbs"],
        correctAnswer: 0,
        explanation: "show dbs lists all databases.",
      },
      {
        question: "Which command switches database?",
        options: ["use db", "switch db", "change db", "select db"],
        correctAnswer: 0,
        explanation: "use databaseName switches to a database.",
      },

      {
        question: "Which method removes all documents?",
        options: ["deleteMany()", "removeAll()", "drop()", "clear()"],
        correctAnswer: 0,
        explanation: "deleteMany() removes multiple documents.",
      },
      {
        question: "What does countDocuments() do?",
        options: [
          "Counts DB",
          "Counts collections",
          "Counts documents",
          "Counts fields",
        ],
        correctAnswer: 2,
        explanation: "Returns number of documents matching query.",
      },
      {
        question: "What is an index?",
        options: ["Backup", "Search helper", "Schema", "API"],
        correctAnswer: 1,
        explanation: "Indexes improve query performance.",
      },
      {
        question: "Which method creates index?",
        options: ["addIndex()", "createIndex()", "makeIndex()", "index()"],
        correctAnswer: 1,
        explanation: "createIndex() is used to define indexes.",
      },
      {
        question: "What is a schema in MongoDB?",
        options: ["Strict structure", "Flexible structure", "Table", "Index"],
        correctAnswer: 1,
        explanation:
          "MongoDB is schema-less but can use optional schema via Mongoose.",
      },

      {
        question: "Which command shows collections?",
        options: [
          "show collections",
          "list tables",
          "get collections",
          "db.collections()",
        ],
        correctAnswer: 0,
        explanation: "show collections lists all collections.",
      },
      {
        question: "What is aggregation?",
        options: ["Insert data", "Process data", "Delete data", "Update data"],
        correctAnswer: 1,
        explanation: "Aggregation processes data for analysis.",
      },
      {
        question: "What does $match do?",
        options: ["Sort", "Filter", "Group", "Join"],
        correctAnswer: 1,
        explanation: "$match filters documents.",
      },
      {
        question: "What does $group do?",
        options: ["Sort", "Filter", "Group data", "Join"],
        correctAnswer: 2,
        explanation: "$group groups documents for aggregation.",
      },
      {
        question: "What is ObjectId?",
        options: ["String", "Unique identifier", "Index", "Key"],
        correctAnswer: 1,
        explanation: "MongoDB auto-generates ObjectId for _id.",
      },

      {
        question: "Which operator adds to array?",
        options: ["$push", "$add", "$set", "$inc"],
        correctAnswer: 0,
        explanation: "$push adds value to array.",
      },
      {
        question: "Which operator removes from array?",
        options: ["$pop", "$pull", "$remove", "$delete"],
        correctAnswer: 1,
        explanation: "$pull removes matching values from array.",
      },
      {
        question: "What is findOne()?",
        options: ["Find all", "Find first document", "Find last", "Delete"],
        correctAnswer: 1,
        explanation: "findOne() returns first matching document.",
      },
      {
        question: "What is projection?",
        options: ["Filtering fields", "Sorting", "Grouping", "Joining"],
        correctAnswer: 0,
        explanation: "Projection selects specific fields.",
      },
      {
        question: "What does sort() do?",
        options: ["Group", "Order data", "Filter", "Delete"],
        correctAnswer: 1,
        explanation: "sort() orders documents.",
      },

      {
        question: "What does limit() do?",
        options: ["Filter", "Restrict results", "Sort", "Delete"],
        correctAnswer: 1,
        explanation: "limit() restricts number of documents returned.",
      },
      {
        question: "What does skip() do?",
        options: ["Skip docs", "Delete docs", "Sort docs", "Group docs"],
        correctAnswer: 0,
        explanation: "skip() skips specified number of documents.",
      },
      {
        question: "What is a cursor?",
        options: ["Pointer", "Loop", "Index", "Query"],
        correctAnswer: 0,
        explanation: "Cursor points to result set.",
      },
      {
        question: "What is a database?",
        options: ["Collection group", "Table", "Row", "Field"],
        correctAnswer: 0,
        explanation: "Database contains collections.",
      },
      {
        question: "What is a field?",
        options: ["Column", "Row", "Table", "Index"],
        correctAnswer: 0,
        explanation: "Field is key-value pair in document.",
      },

      {
        question: "Which command drops collection?",
        options: [
          "dropCollection()",
          "deleteCollection()",
          "remove()",
          "drop()",
        ],
        correctAnswer: 0,
        explanation: "db.collection.drop() deletes collection.",
      },
      {
        question: "What is embedding?",
        options: ["Nested docs", "Separate docs", "Indexing", "Query"],
        correctAnswer: 0,
        explanation: "Embedding stores related data inside one document.",
      },
      {
        question: "What is referencing?",
        options: ["Nested data", "Linked documents", "Index", "Sort"],
        correctAnswer: 1,
        explanation: "Referencing links documents using IDs.",
      },
      {
        question: "Which operator checks existence?",
        options: ["$exist", "$exists", "$check", "$has"],
        correctAnswer: 1,
        explanation: "$exists checks if field exists.",
      },
      {
        question: "What is MongoDB?",
        options: ["SQL DB", "NoSQL DB", "File system", "API"],
        correctAnswer: 1,
        explanation: "MongoDB is a NoSQL document database.",
      },
    ],
    medium: [
      {
        question: "What does the $lookup aggregation stage do?",
        options: [
          "Sort data",
          "Join collections",
          "Filter documents",
          "Group data",
        ],
        correctAnswer: 1,
        explanation:
          "$lookup performs a left outer join between two collections.",
      },
      {
        question: "Which stage filters documents in aggregation?",
        options: ["$filter", "$match", "$where", "$select"],
        correctAnswer: 1,
        explanation: "$match filters documents based on conditions.",
      },
      {
        question: "What does $group do?",
        options: ["Sort", "Join", "Group documents", "Filter"],
        correctAnswer: 2,
        explanation:
          "$group groups documents and allows aggregation like sum, avg.",
      },
      {
        question: "What is the purpose of indexing?",
        options: [
          "Backup",
          "Improve query speed",
          "Store data",
          "Validate schema",
        ],
        correctAnswer: 1,
        explanation: "Indexes reduce the number of documents scanned.",
      },
      {
        question: "Which operator pushes values into an array?",
        options: ["$add", "$push", "$set", "$inc"],
        correctAnswer: 1,
        explanation: "$push appends a value to an array field.",
      },

      {
        question: "What is a compound index?",
        options: [
          "Single field index",
          "Multiple field index",
          "Array index",
          "Unique index",
        ],
        correctAnswer: 1,
        explanation:
          "A compound index includes multiple fields for efficient queries.",
      },
      {
        question: "What does $unwind do?",
        options: [
          "Delete array",
          "Split array into docs",
          "Join arrays",
          "Sort array",
        ],
        correctAnswer: 1,
        explanation: "$unwind deconstructs an array into separate documents.",
      },
      {
        question: "What is a covered query?",
        options: [
          "Encrypted query",
          "Uses only index",
          "Full scan query",
          "Join query",
        ],
        correctAnswer: 1,
        explanation:
          "Covered query is satisfied entirely by index without reading documents.",
      },
      {
        question: "What is Mongoose?",
        options: ["Database", "ODM library", "Server", "Framework"],
        correctAnswer: 1,
        explanation:
          "Mongoose is an ODM (Object Data Modeling) library for MongoDB.",
      },
      {
        question: "Which method finds document by ID in Mongoose?",
        options: ["findOne()", "findById()", "get()", "search()"],
        correctAnswer: 1,
        explanation: "findById() retrieves document using _id.",
      },

      {
        question: "What is a schema in Mongoose?",
        options: ["Collection", "Structure definition", "Index", "Query"],
        correctAnswer: 1,
        explanation: "Schema defines structure and validation for documents.",
      },
      {
        question: "What does $set do in update?",
        options: ["Replace doc", "Update fields", "Delete fields", "Insert"],
        correctAnswer: 1,
        explanation: "$set updates specific fields.",
      },
      {
        question: "What does $inc do?",
        options: ["Set value", "Increment value", "Push value", "Delete"],
        correctAnswer: 1,
        explanation: "$inc increases numeric field value.",
      },
      {
        question: "Which method counts documents?",
        options: ["count()", "countDocuments()", "size()", "length()"],
        correctAnswer: 1,
        explanation: "countDocuments() is accurate and recommended.",
      },
      {
        question: "What is a cursor in MongoDB?",
        options: ["Pointer to results", "Index", "Query", "Schema"],
        correctAnswer: 0,
        explanation: "Cursor allows iteration over query results.",
      },

      {
        question: "What is aggregation pipeline?",
        options: [
          "Insert process",
          "Data processing stages",
          "Delete process",
          "Indexing",
        ],
        correctAnswer: 1,
        explanation:
          "Aggregation pipeline processes data in stages like $match, $group.",
      },
      {
        question: "What does $limit do?",
        options: ["Skip docs", "Restrict results", "Sort docs", "Delete docs"],
        correctAnswer: 1,
        explanation: "$limit restricts number of output documents.",
      },
      {
        question: "What does $skip do?",
        options: ["Skip docs", "Delete docs", "Group docs", "Join docs"],
        correctAnswer: 0,
        explanation: "$skip skips specified number of documents.",
      },
      {
        question: "What is normalization in MongoDB?",
        options: ["Embedding", "Referencing", "Indexing", "Sorting"],
        correctAnswer: 1,
        explanation: "Normalization uses references instead of embedding.",
      },
      {
        question: "What is denormalization?",
        options: ["Referencing", "Embedding data", "Indexing", "Filtering"],
        correctAnswer: 1,
        explanation: "Denormalization embeds related data for faster reads.",
      },

      {
        question: "What is a text index?",
        options: [
          "Numeric index",
          "Search index",
          "Array index",
          "Unique index",
        ],
        correctAnswer: 1,
        explanation: "Text index enables full-text search.",
      },
      {
        question: "What is $project used for?",
        options: ["Filter fields", "Sort data", "Join data", "Delete data"],
        correctAnswer: 0,
        explanation: "$project selects fields to include/exclude.",
      },
      {
        question: "What is $sort used for?",
        options: ["Filter", "Order data", "Group", "Delete"],
        correctAnswer: 1,
        explanation: "$sort arranges documents in ascending/descending order.",
      },
      {
        question: "What is $exists operator?",
        options: [
          "Check value",
          "Check field existence",
          "Check index",
          "Check DB",
        ],
        correctAnswer: 1,
        explanation: "$exists checks if a field is present.",
      },
      {
        question: "What is $regex used for?",
        options: ["Math", "Pattern matching", "Sorting", "Grouping"],
        correctAnswer: 1,
        explanation: "$regex allows pattern-based queries.",
      },

      {
        question: "What is sharding?",
        options: ["Backup", "Distribute data", "Indexing", "Join"],
        correctAnswer: 1,
        explanation: "Sharding distributes data across multiple servers.",
      },
      {
        question: "What is replication?",
        options: ["Backup copies", "Indexing", "Querying", "Sorting"],
        correctAnswer: 0,
        explanation:
          "Replication maintains multiple copies for high availability.",
      },
      {
        question: "What is write concern?",
        options: ["Read setting", "Write acknowledgment", "Index", "Schema"],
        correctAnswer: 1,
        explanation: "Write concern defines acknowledgment level for writes.",
      },
      {
        question: "What is read preference?",
        options: ["Write mode", "Read source selection", "Index", "Schema"],
        correctAnswer: 1,
        explanation: "Determines which node (primary/secondary) handles reads.",
      },
      {
        question: "What is a replica set?",
        options: ["Indexes", "Cluster of DB copies", "Schema", "Query"],
        correctAnswer: 1,
        explanation:
          "Replica set is group of MongoDB instances maintaining same data.",
      },
    ],
    hard: [
      {
        question: "What is a MongoDB replica set?",
        options: [
          "A set of indexes",
          "A group of mongod instances maintaining the same data",
          "A sharding configuration",
          "A backup strategy",
        ],
        correctAnswer: 1,
        explanation:
          "A replica set is a group of MongoDB instances that maintain the same dataset for high availability and redundancy.",
      },
      {
        question: "What is sharding in MongoDB?",
        options: [
          "Encrypting data across servers",
          "Distributing data across multiple machines",
          "Creating document backups",
          "Indexing large collections",
        ],
        correctAnswer: 1,
        explanation:
          "Sharding distributes data across multiple servers (shards) to handle large datasets and high throughput.",
      },
      {
        question: "Which index type supports text search in MongoDB?",
        options: [
          "Compound index",
          "Sparse index",
          "Text index",
          "Geospatial index",
        ],
        correctAnswer: 2,
        explanation:
          "A text index enables full-text search on string fields in a collection.",
      },
      {
        question: "What does the $unwind aggregation stage do?",
        options: [
          "Joins two arrays",
          "Deconstructs an array field into separate documents",
          "Removes null values",
          "Flattens nested objects",
        ],
        correctAnswer: 1,
        explanation:
          "$unwind deconstructs an array field, outputting one document per array element.",
      },
      {
        question: "What is the Write Concern in MongoDB?",
        options: [
          "A validation rule",
          "Acknowledgment level requested from MongoDB for write operations",
          "A read preference setting",
          "An index configuration",
        ],
        correctAnswer: 1,
        explanation:
          "Write concern specifies the level of acknowledgment requested from MongoDB for write operations.",
      },
      {
        question:
          "Which MongoDB feature allows running JavaScript functions on the server?",
        options: [
          "MapReduce",
          "Aggregation",
          "Server-side JS",
          "All of the above",
        ],
        correctAnswer: 3,
        explanation:
          "MongoDB historically supports server-side JS via MapReduce and the $function operator in aggregation.",
      },
      {
        question: "What does a sparse index do in MongoDB?",
        options: [
          "Indexes all documents including nulls",
          "Only indexes documents that contain the indexed field",
          "Creates a partial index",
          "Indexes nested fields only",
        ],
        correctAnswer: 1,
        explanation:
          "A sparse index only includes documents that have the indexed field, skipping documents where the field is absent.",
      },
      {
        question: "What is the oplog in MongoDB?",
        options: [
          "An error log",
          "A capped collection recording all write operations for replication",
          "A query log",
          "An index operation log",
        ],
        correctAnswer: 1,
        explanation:
          "The oplog (operations log) is a special capped collection that records all operations that modify data, used by replica sets.",
      },
      {
        question:
          "Which consistency model does MongoDB use by default for reads?",
        options: [
          "Strong consistency",
          "Eventual consistency",
          "Read your own writes",
          "Causal consistency",
        ],
        correctAnswer: 0,
        explanation:
          "By default, MongoDB provides strong consistency for reads from the primary node.",
      },
      {
        question: "What is a covered query in MongoDB?",
        options: [
          "A query that uses encryption",
          "A query satisfied entirely by an index without examining documents",
          "A query with $match and $project",
          "A query using aggregation pipeline",
        ],
        correctAnswer: 1,
        explanation:
          "A covered query is one where all fields in the query are part of an index, so MongoDB can answer it using only the index.",
      },
    ],
  },

  express: {
    easy: [
      {
        question:
          "Which Express method registers middleware for ALL HTTP methods?",
        options: ["app.all()", "app.use()", "app.any()", "app.route()"],
        correctAnswer: 1,
        explanation:
          "app.use() mounts middleware for all HTTP methods at a given path.",
      },
      {
        question:
          "How do you access URL query parameters in Express (e.g., /search?q=hello)?",
        options: ["req.params.q", "req.body.q", "req.query.q", "req.url.q"],
        correctAnswer: 2,
        explanation:
          "req.query holds the parsed query string parameters from the URL.",
      },
      {
        question:
          "Which HTTP status code means a resource was successfully created?",
        options: ["200", "201", "204", "301"],
        correctAnswer: 1,
        explanation:
          "201 Created is the appropriate HTTP status when a new resource has been successfully created.",
      },
      {
        question: "How do you define a route parameter in Express?",
        options: ["/user/{id}", "/user/:id", "/user/[id]", "/user/$id"],
        correctAnswer: 1,
        explanation:
          "Express uses the colon syntax :paramName to define route parameters, e.g., /user/:id.",
      },
      {
        question: "Which object contains data sent in a POST request body?",
        options: ["req.query", "req.params", "req.body", "req.data"],
        correctAnswer: 2,
        explanation:
          "req.body contains the parsed body of the request, available after using body-parser or express.json() middleware.",
      },
      {
        question: "What does res.json() do in Express?",
        options: [
          "Reads JSON from request",
          "Sends a JSON response to the client",
          "Parses JSON body",
          "Validates JSON",
        ],
        correctAnswer: 1,
        explanation:
          "res.json() sets Content-Type to application/json and sends the object as a JSON string.",
      },
      {
        question: "How do you start an Express server on port 3000?",
        options: [
          "app.start(3000)",
          "app.listen(3000)",
          "app.run(3000)",
          "app.connect(3000)",
        ],
        correctAnswer: 1,
        explanation:
          "app.listen(port) starts the HTTP server and listens for connections on the specified port.",
      },
      {
        question: "Which middleware parses incoming JSON request bodies?",
        options: [
          "express.urlencoded()",
          "express.static()",
          "express.json()",
          "express.bodyParser()",
        ],
        correctAnswer: 2,
        explanation:
          "express.json() is built-in middleware that parses requests with JSON payloads.",
      },
      {
        question: "How do you access route parameters in Express?",
        options: [
          "req.query.id",
          "req.body.id",
          "req.params.id",
          "req.path.id",
        ],
        correctAnswer: 2,
        explanation:
          "Route parameters defined with : are accessed via req.params.",
      },
      {
        question: "What does res.send() do?",
        options: [
          "Redirects the user",
          "Sends an HTTP response",
          "Closes the server",
          "Logs the response",
        ],
        correctAnswer: 1,
        explanation:
          "res.send() sends an HTTP response which can be a string, Buffer, or object.",
      },
    ],
    medium: [
      {
        question:
          "What is the correct order of middleware execution in Express?",
        options: [
          "Bottom to top",
          "Random order",
          "Top to bottom in declaration order",
          "Alphabetical",
        ],
        correctAnswer: 2,
        explanation:
          "Express executes middleware in the order they are declared using app.use() or route definitions.",
      },
      {
        question:
          "What is the purpose of the next() function in Express middleware?",
        options: [
          "To end the response",
          "To pass control to the next middleware function",
          "To restart the server",
          "To redirect the request",
        ],
        correctAnswer: 1,
        explanation:
          "next() passes control to the next middleware in the stack. Without it, the request will hang.",
      },
      {
        question: "How do you serve static files in Express?",
        options: [
          "app.static('public')",
          "app.use(express.static('public'))",
          "app.serve('public')",
          "app.files('public')",
        ],
        correctAnswer: 1,
        explanation:
          "express.static() is built-in middleware to serve static files from a directory.",
      },
      {
        question:
          "Which method is used to handle errors in Express middleware?",
        options: [
          "app.error()",
          "app.use((err, req, res, next) => {})",
          "app.catch()",
          "app.fail()",
        ],
        correctAnswer: 1,
        explanation:
          "Error-handling middleware has 4 parameters: err, req, res, next. Express identifies it by the 4-argument signature.",
      },
      {
        question: "What does express.Router() provide?",
        options: [
          "A database connection",
          "A mini Express application for organizing routes",
          "A template engine",
          "A security module",
        ],
        correctAnswer: 1,
        explanation:
          "express.Router() creates a modular, mountable route handler for organizing routes into separate files.",
      },
      {
        question: "How do you set a response header in Express?",
        options: [
          "res.header('key', 'value')",
          "res.setHeader('key', 'value')",
          "res.set('key', 'value')",
          "Both B and C",
        ],
        correctAnswer: 3,
        explanation:
          "Both res.setHeader() and res.set() can set response headers. res.set() is Express's alias for res.setHeader().",
      },
      {
        question: "What is CORS and how is it enabled in Express?",
        options: [
          "A database driver, enabled via mongoose",
          "Cross-Origin Resource Sharing, enabled via the cors npm package",
          "A caching strategy, enabled via redis",
          "A security protocol, enabled via helmet",
        ],
        correctAnswer: 1,
        explanation:
          "CORS (Cross-Origin Resource Sharing) allows restricted resources to be requested from another domain. Use the cors npm package.",
      },
      {
        question:
          "Which Express method chains multiple route handlers for the same path?",
        options: [
          "app.chain()",
          "app.route('/path').get().post()",
          "app.multi()",
          "app.all()",
        ],
        correctAnswer: 1,
        explanation:
          "app.route() returns a route instance that you can chain HTTP method handlers on.",
      },
      {
        question: "How do you redirect a request in Express?",
        options: [
          "res.redirect('/new-path')",
          "res.go('/new-path')",
          "res.forward('/new-path')",
          "req.redirect('/new-path')",
        ],
        correctAnswer: 0,
        explanation:
          "res.redirect() redirects the request to the specified URL with a 302 status by default.",
      },
      {
        question: "What does the express-validator package provide?",
        options: [
          "Database validation",
          "Request input validation and sanitization",
          "JWT authentication",
          "Rate limiting",
        ],
        correctAnswer: 1,
        explanation:
          "express-validator provides middleware for validating and sanitizing request data (body, query, params).",
      },
    ],
    hard: [
      {
        question:
          "What is the difference between app.use() and app.all() in Express?",
        options: [
          "No difference",
          "app.use() matches any path starting with the prefix; app.all() requires exact match",
          "app.all() is faster",
          "app.use() only works for GET requests",
        ],
        correctAnswer: 1,
        explanation:
          "app.use('/api') matches /api, /api/users, etc. app.all('/api') only matches exactly /api.",
      },
      {
        question: "How does Express handle asynchronous errors in middleware?",
        options: [
          "Automatically catches them",
          "You must call next(err) manually or use try/catch",
          "Uses Promise.catch()",
          "Via uncaughtException event",
        ],
        correctAnswer: 1,
        explanation:
          "Express does not catch async errors automatically. You must catch them and call next(err) to pass to error middleware.",
      },
      {
        question: "What is the purpose of helmet.js with Express?",
        options: [
          "Template rendering",
          "Sets various HTTP headers to secure the app",
          "Handles file uploads",
          "Manages sessions",
        ],
        correctAnswer: 1,
        explanation:
          "helmet.js sets security-related HTTP headers like X-XSS-Protection, X-Frame-Options, and Content-Security-Policy.",
      },
      {
        question: "What is rate limiting in Express and why is it used?",
        options: [
          "Limiting file size uploads",
          "Limiting the number of requests a client can make in a time window",
          "Limiting database connections",
          "Limiting response size",
        ],
        correctAnswer: 1,
        explanation:
          "Rate limiting prevents abuse by restricting how many requests a client can make within a time period, protecting against DDoS.",
      },
      {
        question: "How does Express know to use error-handling middleware?",
        options: [
          "It's declared last in the file",
          "It has exactly 4 parameters (err, req, res, next)",
          "It uses app.error()",
          "It returns a specific status code",
        ],
        correctAnswer: 1,
        explanation:
          "Express identifies error-handling middleware by the function signature having exactly 4 parameters.",
      },
      {
        question: "What does the trust proxy setting do in Express?",
        options: [
          "Enables database proxying",
          "Makes Express trust the X-Forwarded-For header from proxies",
          "Creates a reverse proxy",
          "Enables load balancing",
        ],
        correctAnswer: 1,
        explanation:
          "app.set('trust proxy', 1) makes Express trust the X-Forwarded-* headers set by a reverse proxy like Nginx.",
      },
      {
        question:
          "What is the difference between res.end() and res.send() in Express?",
        options: [
          "No difference",
          "res.end() is from Node.js http module with no processing; res.send() adds headers and supports multiple types",
          "res.send() is faster",
          "res.end() supports JSON",
        ],
        correctAnswer: 1,
        explanation:
          "res.end() is the raw Node.js method. res.send() extends it by setting Content-Type, ETag, and handling various data types.",
      },
      {
        question: "How can you implement request logging in Express?",
        options: [
          "Using console.log in every route",
          "Using morgan middleware",
          "Using debug package",
          "All of the above",
        ],
        correctAnswer: 1,
        explanation:
          "Morgan is the standard HTTP request logger middleware for Express, providing formatted logs.",
      },
      {
        question: "What is the purpose of express-async-errors package?",
        options: [
          "Adds async route support",
          "Automatically passes async errors to next() without try/catch",
          "Logs async operations",
          "Validates async middleware",
        ],
        correctAnswer: 1,
        explanation:
          "express-async-errors patches Express to automatically call next(err) when an async route throws, removing boilerplate try/catch.",
      },
      {
        question: "How do you implement API versioning in Express?",
        options: [
          "Using query strings only",
          "Using router prefixes like /api/v1 and /api/v2",
          "Using HTTP headers only",
          "Express doesn't support versioning",
        ],
        correctAnswer: 1,
        explanation:
          "The most common approach is URL path versioning using Express Router mounted at /api/v1 and /api/v2 prefixes.",
      },
    ],
  },

  react: {
    easy: [
      {
        question:
          "Which hook is used to manage state in a functional component?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        correctAnswer: 1,
        explanation:
          "useState allows you to store and update state inside functional components.",
      },
      {
        question: "What does JSX stand for?",
        options: [
          "Java Syntax XML",
          "JavaScript XML",
          "JSON XML",
          "JavaScript Extension",
        ],
        correctAnswer: 1,
        explanation:
          "JSX stands for JavaScript XML and allows writing HTML-like syntax in JS.",
      },
      {
        question: "How do you pass data from parent to child component?",
        options: ["State", "Props", "Hooks", "Context"],
        correctAnswer: 1,
        explanation: "Props are used to pass data from parent to child.",
      },
      {
        question: "Which hook is used for side effects?",
        options: ["useState", "useEffect", "useRef", "useMemo"],
        correctAnswer: 1,
        explanation:
          "useEffect is used for tasks like API calls, subscriptions, etc.",
      },
      {
        question: "What is a React component?",
        options: ["Database", "Reusable UI block", "API", "CSS"],
        correctAnswer: 1,
        explanation: "Components are reusable UI building blocks.",
      },
      {
        question: "What is the virtual DOM?",
        options: ["Real DOM", "Lightweight copy of DOM", "Database", "CSS"],
        correctAnswer: 1,
        explanation:
          "Virtual DOM is a lightweight copy used for efficient updates.",
      },
      {
        question: "Which prop uniquely identifies list items?",
        options: ["id", "key", "index", "value"],
        correctAnswer: 1,
        explanation: "key helps React identify elements during updates.",
      },
      {
        question: "How do you write comments in JSX?",
        options: ["//", "<!-- -->", "{/* */}", "#"],
        correctAnswer: 2,
        explanation: "JSX uses {/* comment */} format.",
      },
      {
        question: "What does useRef return?",
        options: ["State", "DOM node", "Mutable object", "Function"],
        correctAnswer: 2,
        explanation: "useRef returns a mutable object with .current.",
      },
      {
        question: "How do you render lists in React?",
        options: ["for loop", "map()", "while", "if"],
        correctAnswer: 1,
        explanation: "map() is used to transform arrays into JSX.",
      },

      {
        question: "What is a controlled component?",
        options: [
          "DOM controlled",
          "State controlled form",
          "API controlled",
          "CSS",
        ],
        correctAnswer: 1,
        explanation:
          "Controlled components use React state to manage form inputs.",
      },
      {
        question: "What is prop drilling?",
        options: ["Debugging", "Passing props deeply", "Routing", "Styling"],
        correctAnswer: 1,
        explanation: "Prop drilling means passing props through many levels.",
      },
      {
        question: "Which hook accesses context?",
        options: ["useState", "useContext", "useEffect", "useRef"],
        correctAnswer: 1,
        explanation: "useContext reads values from React Context.",
      },
      {
        question: "How do you update state in class components?",
        options: [
          "updateState()",
          "setState()",
          "changeState()",
          "modifyState()",
        ],
        correctAnswer: 1,
        explanation: "setState() updates class component state.",
      },
      {
        question: "What is lifting state up?",
        options: [
          "Deleting state",
          "Moving to parent",
          "Copying state",
          "Resetting",
        ],
        correctAnswer: 1,
        explanation: "State is moved to a common parent to share data.",
      },
      {
        question: "What is conditional rendering?",
        options: ["Loop", "If-else UI", "Static UI", "Server UI"],
        correctAnswer: 1,
        explanation: "UI is shown based on conditions.",
      },
      {
        question: "Which hook memoizes functions?",
        options: ["useMemo", "useCallback", "useEffect", "useRef"],
        correctAnswer: 1,
        explanation: "useCallback prevents unnecessary function recreation.",
      },
      {
        question: "What does dependency array do?",
        options: [
          "Stores state",
          "Controls effect run",
          "Stores props",
          "Updates UI",
        ],
        correctAnswer: 1,
        explanation: "It controls when useEffect runs.",
      },
      {
        question: "What is default export?",
        options: [
          "Multiple export",
          "Single export",
          "No export",
          "Dynamic export",
        ],
        correctAnswer: 1,
        explanation: "Default export allows one main export per file.",
      },
      {
        question: "What does ReactDOM.render do?",
        options: [
          "Create component",
          "Render to DOM",
          "Update state",
          "Handle API",
        ],
        correctAnswer: 1,
        explanation: "It mounts React UI to the DOM.",
      },

      {
        question: "What is a hook in React?",
        options: ["Class method", "Special function", "CSS tool", "API"],
        correctAnswer: 1,
        explanation:
          "Hooks allow using React features in functional components.",
      },
      {
        question: "What does useState return?",
        options: ["State only", "State + function", "Function only", "Array"],
        correctAnswer: 1,
        explanation: "Returns [state, setState].",
      },
      {
        question: "What is a functional component?",
        options: ["Class", "JS function returning JSX", "Hook", "API"],
        correctAnswer: 1,
        explanation: "It’s a function that returns JSX.",
      },
      {
        question: "What is a class component?",
        options: ["Function", "ES6 class", "Hook", "Library"],
        correctAnswer: 1,
        explanation: "Extends React.Component.",
      },
      {
        question: "What is React Router used for?",
        options: ["State", "Navigation", "API", "Styling"],
        correctAnswer: 1,
        explanation: "Used for navigation in SPA.",
      },
      {
        question: "What is SPA?",
        options: [
          "Single Page App",
          "Server Page",
          "Static Page",
          "Simple API",
        ],
        correctAnswer: 0,
        explanation: "Loads one page and updates dynamically.",
      },
      {
        question: "What is event handling?",
        options: ["CSS handling", "User actions", "DB", "API"],
        correctAnswer: 1,
        explanation: "Handles clicks, input, etc.",
      },
      {
        question: "What is one-way data flow?",
        options: ["Child to parent", "Parent to child", "Two-way", "None"],
        correctAnswer: 1,
        explanation: "Data flows from parent to child.",
      },
      {
        question: "What is synthetic event?",
        options: ["Real event", "React wrapper", "CSS", "DB"],
        correctAnswer: 1,
        explanation: "React wraps browser events.",
      },
      {
        question: "What is lifecycle?",
        options: ["DB lifecycle", "Component stages", "CSS", "API"],
        correctAnswer: 1,
        explanation: "Mount, update, unmount phases.",
      },

      {
        question: "What is componentDidMount?",
        options: [
          "Before render",
          "After first render",
          "During",
          "After delete",
        ],
        correctAnswer: 1,
        explanation: "Runs after component mounts.",
      },
      {
        question: "What is useEffect cleanup?",
        options: ["Delete state", "Cleanup function", "Reset props", "Stop UI"],
        correctAnswer: 1,
        explanation: "Used to clean side effects.",
      },
      {
        question: "Why key warning occurs?",
        options: ["Syntax error", "Missing key", "State error", "Hook error"],
        correctAnswer: 1,
        explanation: "React needs unique key for list items.",
      },
      {
        question: "What is StrictMode?",
        options: ["Production", "Dev tool", "CSS", "Router"],
        correctAnswer: 1,
        explanation: "Helps detect problems in development.",
      },
      {
        question: "What is lazy loading?",
        options: ["Load all", "Load on demand", "Delete", "Preload"],
        correctAnswer: 1,
        explanation: "Loads components when needed.",
      },
      {
        question: "What is code splitting?",
        options: ["CSS split", "JS bundle split", "DB split", "API"],
        correctAnswer: 1,
        explanation: "Breaks code into smaller chunks.",
      },
      {
        question: "What is useReducer?",
        options: ["State hook", "Advanced state", "Router", "Effect"],
        correctAnswer: 1,
        explanation: "Used for complex state logic.",
      },
      {
        question: "What is Context API?",
        options: ["API call", "State sharing", "Router", "DB"],
        correctAnswer: 1,
        explanation: "Shares data globally.",
      },
      {
        question: "What is portal?",
        options: ["Routing", "Render outside DOM", "Hook", "API"],
        correctAnswer: 1,
        explanation: "Used for modals, overlays.",
      },
      {
        question: "What is hydration?",
        options: ["CSS", "Attach React to SSR", "Load state", "Clean DOM"],
        correctAnswer: 1,
        explanation: "Connects React to server-rendered HTML.",
      },

      {
        question: "What is SSR?",
        options: ["Server Side Rendering", "State Sync", "Static", "System"],
        correctAnswer: 0,
        explanation: "Rendering happens on server.",
      },
      {
        question: "What is CSR?",
        options: [
          "Client Side Rendering",
          "CSS Rendering",
          "Component",
          "Code",
        ],
        correctAnswer: 0,
        explanation: "Rendering happens in browser.",
      },
      {
        question: "What is reconciliation?",
        options: ["Error", "DOM diffing", "State", "Routing"],
        correctAnswer: 1,
        explanation: "React compares virtual DOM to update UI.",
      },
      {
        question: "What is diffing?",
        options: ["Sorting", "Comparing DOM", "Rendering", "State"],
        correctAnswer: 1,
        explanation: "Finds minimal changes between DOMs.",
      },
      {
        question: "Why React is fast?",
        options: ["CSS", "Virtual DOM", "SQL", "API"],
        correctAnswer: 1,
        explanation: "Virtual DOM makes updates efficient.",
      },
    ],
    medium: [
      {
        question: "What does the dependency array in useEffect control?",
        options: [
          "Return value",
          "When effect runs",
          "State updates",
          "Props flow",
        ],
        correctAnswer: 1,
        explanation:
          "The dependency array determines when the effect re-runs. If values change, effect runs again.",
      },
      {
        question: "What is a controlled component?",
        options: [
          "DOM controlled",
          "State controlled form",
          "API controlled",
          "CSS controlled",
        ],
        correctAnswer: 1,
        explanation:
          "Controlled components use React state to manage form inputs via value and onChange.",
      },
      {
        question: "What is the purpose of useCallback?",
        options: [
          "Memoize values",
          "Memoize functions",
          "Manage state",
          "Handle effects",
        ],
        correctAnswer: 1,
        explanation:
          "useCallback returns a memoized function to avoid unnecessary re-creations.",
      },
      {
        question: "What does useMemo do?",
        options: [
          "Memoize function",
          "Memoize value",
          "Store ref",
          "Handle side effects",
        ],
        correctAnswer: 1,
        explanation:
          "useMemo caches computed values to avoid expensive recalculations.",
      },
      {
        question: "What is prop drilling?",
        options: [
          "Passing props deeply",
          "Debugging props",
          "Updating props",
          "Deleting props",
        ],
        correctAnswer: 0,
        explanation:
          "Prop drilling is passing props through many layers unnecessarily.",
      },

      {
        question: "Which hook is used to access context?",
        options: ["useState", "useContext", "useEffect", "useRef"],
        correctAnswer: 1,
        explanation: "useContext provides access to context values directly.",
      },
      {
        question: "What is React.memo used for?",
        options: [
          "Memoize hooks",
          "Prevent re-renders",
          "Handle state",
          "Routing",
        ],
        correctAnswer: 1,
        explanation: "React.memo prevents re-rendering if props do not change.",
      },
      {
        question: "What is the main benefit of lifting state up?",
        options: ["Performance", "Shared state", "Routing", "Styling"],
        correctAnswer: 1,
        explanation:
          "It allows multiple components to share and stay in sync with the same data.",
      },
      {
        question: "What happens if you don’t provide a key in a list?",
        options: [
          "Error",
          "Warning + inefficient updates",
          "Crash",
          "No rendering",
        ],
        correctAnswer: 1,
        explanation: "React shows warning and may re-render inefficiently.",
      },
      {
        question: "What does useRef persist?",
        options: ["State", "DOM only", "Mutable value", "Props"],
        correctAnswer: 2,
        explanation:
          "useRef persists a mutable value across renders without causing re-render.",
      },

      {
        question: "What is the difference between state and props?",
        options: [
          "Same",
          "State mutable, props read-only",
          "Props mutable",
          "State external",
        ],
        correctAnswer: 1,
        explanation:
          "State is internal and changeable; props are external and read-only.",
      },
      {
        question: "What is the purpose of keys in React?",
        options: ["Styling", "Tracking elements", "Routing", "State"],
        correctAnswer: 1,
        explanation: "Keys help React identify which elements changed.",
      },
      {
        question: "What is reconciliation?",
        options: ["Error handling", "DOM diffing", "Routing", "State update"],
        correctAnswer: 1,
        explanation:
          "React compares virtual DOM trees and updates only changed parts.",
      },
      {
        question: "What is a pure component?",
        options: [
          "Always renders",
          "Renders only when props/state change",
          "Never renders",
          "Static component",
        ],
        correctAnswer: 1,
        explanation:
          "Pure components avoid unnecessary re-renders using shallow comparison.",
      },
      {
        question: "What is shallow comparison?",
        options: [
          "Deep compare",
          "Compare references",
          "Compare values deeply",
          "No compare",
        ],
        correctAnswer: 1,
        explanation:
          "Shallow comparison checks if references are equal, not deep values.",
      },

      {
        question: "What is useLayoutEffect?",
        options: [
          "Async effect",
          "Runs before paint",
          "After render async",
          "State hook",
        ],
        correctAnswer: 1,
        explanation: "Runs synchronously after DOM updates but before paint.",
      },
      {
        question: "What is batching in React?",
        options: [
          "Grouping updates",
          "Splitting updates",
          "Deleting updates",
          "Async API",
        ],
        correctAnswer: 0,
        explanation:
          "React batches multiple state updates to improve performance.",
      },
      {
        question: "What is a higher-order component (HOC)?",
        options: [
          "Component inside component",
          "Function returning component",
          "Hook",
          "Router",
        ],
        correctAnswer: 1,
        explanation:
          "HOC is a function that takes a component and returns a new enhanced component.",
      },
      {
        question: "What is code splitting?",
        options: ["Split CSS", "Split JS bundle", "Split DB", "Split API"],
        correctAnswer: 1,
        explanation: "Splits bundle into smaller chunks loaded on demand.",
      },
      {
        question: "What is lazy loading?",
        options: [
          "Load all",
          "Load when needed",
          "Delete components",
          "Preload everything",
        ],
        correctAnswer: 1,
        explanation: "Loads components dynamically using React.lazy().",
      },

      {
        question: "What is the Context API used for?",
        options: ["API calls", "State sharing", "Routing", "Styling"],
        correctAnswer: 1,
        explanation: "Used to share state globally without prop drilling.",
      },
      {
        question: "What is useReducer?",
        options: [
          "State hook",
          "Advanced state logic",
          "Effect hook",
          "Router",
        ],
        correctAnswer: 1,
        explanation: "useReducer is useful for complex state transitions.",
      },
      {
        question: "What is event delegation in React?",
        options: [
          "Multiple handlers",
          "Single root handler",
          "No handler",
          "API event",
        ],
        correctAnswer: 1,
        explanation:
          "React attaches events at root and handles them via synthetic system.",
      },
      {
        question: "What is synthetic event?",
        options: ["Native event", "React wrapper", "CSS event", "DB event"],
        correctAnswer: 1,
        explanation: "Provides consistent behavior across browsers.",
      },
      {
        question: "What is React StrictMode?",
        options: ["Production mode", "Development tool", "Router", "Hook"],
        correctAnswer: 1,
        explanation: "Helps identify potential issues during development.",
      },

      {
        question: "What is a fragment?",
        options: [
          "Wrapper div",
          "Group elements without DOM",
          "State tool",
          "Router",
        ],
        correctAnswer: 1,
        explanation: "Fragments avoid unnecessary DOM nodes.",
      },
      {
        question: "What is controlled vs uncontrolled input?",
        options: ["State vs DOM control", "CSS vs JS", "API vs UI", "None"],
        correctAnswer: 0,
        explanation: "Controlled uses state; uncontrolled uses DOM refs.",
      },
      {
        question: "What is useImperativeHandle?",
        options: ["State hook", "Customize ref", "Effect", "Router"],
        correctAnswer: 1,
        explanation: "Allows customizing ref behavior in child components.",
      },
      {
        question: "What is forwardRef?",
        options: ["State pass", "Pass ref to child", "Event handler", "Router"],
        correctAnswer: 1,
        explanation: "Allows passing ref from parent to child component.",
      },
      {
        question: "What is reconciliation algorithm?",
        options: ["Sorting", "Diffing DOM", "Routing", "State update"],
        correctAnswer: 1,
        explanation: "Compares old and new virtual DOM efficiently.",
      },
    ],
    hard: [
      {
        question: "What does React.StrictMode do in development?",
        options: [
          "Enables TypeScript",
          "Double-invokes functions to detect side effects",
          "Prevents state updates",
          "Locks component props",
        ],
        correctAnswer: 1,
        explanation:
          "React.StrictMode double-invokes renders and lifecycle functions in development to help detect unintended side effects.",
      },
      {
        question: "What is reconciliation in React?",
        options: [
          "Error handling process",
          "The algorithm React uses to diff the virtual DOM and update the real DOM efficiently",
          "A data fetching pattern",
          "A routing technique",
        ],
        correctAnswer: 1,
        explanation:
          "Reconciliation is React's diffing algorithm that compares the old and new virtual DOM trees to compute minimal DOM updates.",
      },
      {
        question: "What is the purpose of useReducer in React?",
        options: [
          "To replace Redux",
          "To manage complex state logic with a reducer function",
          "To handle HTTP requests",
          "To memoize values",
        ],
        correctAnswer: 1,
        explanation:
          "useReducer is an alternative to useState for complex state logic, using a reducer function similar to Redux.",
      },
      {
        question: "What is a React Portal?",
        options: [
          "A routing mechanism",
          "A way to render children into a DOM node outside the parent component's hierarchy",
          "A context API",
          "A lazy loading feature",
        ],
        correctAnswer: 1,
        explanation:
          "React Portals let you render children into a DOM node outside of the parent component's DOM hierarchy, useful for modals.",
      },
      {
        question: "What is code splitting in React?",
        options: [
          "Breaking CSS into modules",
          "Splitting the JavaScript bundle into smaller chunks loaded on demand",
          "Splitting components into files",
          "A testing technique",
        ],
        correctAnswer: 1,
        explanation:
          "Code splitting uses dynamic import() and React.lazy() to split the bundle, loading code only when needed.",
      },
      {
        question: "What is the purpose of the useLayoutEffect hook?",
        options: [
          "Same as useEffect but runs after layout",
          "Fires synchronously after DOM mutations but before the browser paints",
          "Used for CSS animations",
          "Replaces componentDidMount",
        ],
        correctAnswer: 1,
        explanation:
          "useLayoutEffect fires synchronously after DOM mutations, before the browser paint — useful for measuring DOM elements.",
      },
      {
        question: "What is React Fiber?",
        options: [
          "A CSS framework",
          "React's reimplemented reconciliation engine enabling incremental rendering",
          "A routing library",
          "A state manager",
        ],
        correctAnswer: 1,
        explanation:
          "React Fiber is the reimplemented reconciliation algorithm that enables features like time-slicing and Suspense.",
      },
      {
        question: "How does React's batching work in React 18?",
        options: [
          "Only batches state updates in event handlers",
          "Automatically batches all state updates including in promises and timeouts",
          "Doesn't batch updates",
          "Only batches in class components",
        ],
        correctAnswer: 1,
        explanation:
          "React 18 introduced automatic batching for all updates including in setTimeout, Promises, and native event handlers.",
      },
      {
        question: "What is the purpose of React Suspense?",
        options: [
          "Error handling",
          "Declaratively specifying loading states while waiting for async operations",
          "Code linting",
          "Performance profiling",
        ],
        correctAnswer: 1,
        explanation:
          "Suspense lets components 'wait' for something (like lazy-loaded code or data) and display a fallback during loading.",
      },
      {
        question: "What are React Server Components?",
        options: [
          "Components that run on Node.js permanently",
          "Components that render on the server with no client-side JS bundle impact",
          "WebSocket handlers",
          "API route handlers",
        ],
        correctAnswer: 1,
        explanation:
          "React Server Components render exclusively on the server, reducing bundle size as their code is never sent to the client.",
      },
    ],
  },

  node: {
    easy: [
          {
    question: "Which module is used for file operations in Node.js?",
    options: ["http", "fs", "path", "os"],
    correctAnswer: 1,
    explanation: "The 'fs' module provides methods to read, write, and manage files."
  },
  {
    question: "What does require() do?",
    options: ["Creates server", "Imports module", "Executes file", "Deletes module"],
    correctAnswer: 1,
    explanation: "require() loads and imports modules into your file."
  },
  {
    question: "What is npm?",
    options: ["Node Process Manager", "Node Package Manager", "New Project Model", "Network Package Manager"],
    correctAnswer: 1,
    explanation: "npm is used to install and manage Node.js packages."
  },
  {
    question: "Which method reads a file asynchronously?",
    options: ["readFileSync()", "readFile()", "openFile()", "getFile()"],
    correctAnswer: 1,
    explanation: "readFile() is non-blocking and reads files asynchronously."
  },
  {
    question: "What is process.env?",
    options: ["System info", "Environment variables", "File data", "Process logs"],
    correctAnswer: 1,
    explanation: "process.env stores environment variables like PORT, DB_URI."
  },

  {
    question: "What is package.json?",
    options: ["Database file", "Project metadata", "Server config", "API file"],
    correctAnswer: 1,
    explanation: "package.json contains project info, dependencies, and scripts."
  },
  {
    question: "Which object gives process information?",
    options: ["global", "process", "system", "runtime"],
    correctAnswer: 1,
    explanation: "process object provides info about current Node.js process."
  },
  {
    question: "How do you export a function?",
    options: ["export fn", "module.exports = fn", "exports.fn()", "module.export"],
    correctAnswer: 1,
    explanation: "module.exports is used to export values from a module."
  },
  {
    question: "Which module creates HTTP server?",
    options: ["net", "http", "https", "server"],
    correctAnswer: 1,
    explanation: "http module is used to create web servers."
  },
  {
    question: "What does nodemon do?",
    options: ["Monitor memory", "Restart server automatically", "Manage DB", "Run tests"],
    correctAnswer: 1,
    explanation: "nodemon restarts server when file changes are detected."
  },

  {
    question: "What is Node.js?",
    options: ["Frontend framework", "JavaScript runtime", "Database", "CSS tool"],
    correctAnswer: 1,
    explanation: "Node.js is a runtime that allows running JavaScript on the server."
  },
  {
    question: "What is asynchronous code?",
    options: ["Blocking code", "Non-blocking execution", "Looping code", "Error handling"],
    correctAnswer: 1,
    explanation: "Async code allows operations without blocking execution."
  },
  {
    question: "What is callback function?",
    options: ["Function inside loop", "Function passed as argument", "Return function", "Async function"],
    correctAnswer: 1,
    explanation: "Callbacks are functions passed to be executed later."
  },
  {
    question: "What is a module in Node.js?",
    options: ["File", "Reusable code block", "Database", "API"],
    correctAnswer: 1,
    explanation: "Modules are reusable pieces of code."
  },
  {
    question: "What is global object?",
    options: ["Window", "global", "document", "this"],
    correctAnswer: 1,
    explanation: "global is the global object in Node.js."
  },

  {
    question: "What is __dirname?",
    options: ["File name", "Directory path", "Module path", "Server path"],
    correctAnswer: 1,
    explanation: "__dirname gives the directory path of current file."
  },
  {
    question: "What is __filename?",
    options: ["File path", "Directory path", "Module name", "Server name"],
    correctAnswer: 0,
    explanation: "__filename gives full file path."
  },
  {
    question: "What is event loop?",
    options: ["Loop", "Handles async operations", "DB query", "API handler"],
    correctAnswer: 1,
    explanation: "Event loop manages async callbacks and non-blocking operations."
  },
  {
    question: "What is stream?",
    options: ["Database", "Data flow chunks", "API", "Loop"],
    correctAnswer: 1,
    explanation: "Streams handle data piece by piece instead of loading all at once."
  },
  {
    question: "What is path module used for?",
    options: ["Routing", "File paths", "Database", "API"],
    correctAnswer: 1,
    explanation: "path module helps work with file and directory paths."
  },
      {
        question: "Which module provides file system operations in Node.js?",
        options: ["http", "path", "fs", "os"],
        correctAnswer: 2,
        explanation:
          "The built-in 'fs' module provides an API for interacting with the file system.",
      },
      {
        question: "What does the 'require' function do in Node.js?",
        options: [
          "Sends an HTTP request",
          "Imports a module",
          "Declares a variable",
          "Creates a file",
        ],
        correctAnswer: 1,
        explanation:
          "require() synchronously loads and returns a module's exports object.",
      },
      {
        question: "What is npm?",
        options: [
          "Node Programming Module",
          "Node Package Manager",
          "New Project Manager",
          "Node Process Monitor",
        ],
        correctAnswer: 1,
        explanation:
          "npm (Node Package Manager) is the default package manager for Node.js, used to install and manage dependencies.",
      },
      {
        question: "Which method reads a file asynchronously in Node.js?",
        options: [
          "fs.readFileSync()",
          "fs.readFile()",
          "fs.openFile()",
          "fs.getFile()",
        ],
        correctAnswer: 1,
        explanation:
          "fs.readFile() reads a file asynchronously without blocking the event loop.",
      },
      {
        question: "What does process.env provide?",
        options: [
          "CPU information",
          "Environment variables",
          "Memory usage",
          "Process arguments",
        ],
        correctAnswer: 1,
        explanation:
          "process.env is an object containing the user's environment variables, used for configuration.",
      },
      {
        question: "What is the purpose of package.json?",
        options: [
          "To store database configs",
          "To define project metadata and dependencies",
          "To configure the web server",
          "To store environment variables",
        ],
        correctAnswer: 1,
        explanation:
          "package.json contains project metadata, scripts, and lists all dependencies with their versions.",
      },
      {
        question:
          "Which Node.js global object gives information about the current process?",
        options: ["global", "process", "system", "runtime"],
        correctAnswer: 1,
        explanation:
          "The process object is a global that provides information about and control over the current Node.js process.",
      },
      {
        question: "How do you export a function from a Node.js module?",
        options: [
          "export.function = fn",
          "module.exports = fn",
          "exports.default = fn",
          "module.export = fn",
        ],
        correctAnswer: 1,
        explanation:
          "module.exports is the object returned when the module is required. Assign to it to export values.",
      },
      {
        question: "Which module is used to create an HTTP server in Node.js?",
        options: ["net", "https", "http", "server"],
        correctAnswer: 2,
        explanation:
          "The built-in http module provides utilities for creating HTTP servers and making HTTP requests.",
      },
      {
        question: "What does nodemon do?",
        options: [
          "Monitors memory usage",
          "Automatically restarts the server on file changes",
          "Monitors network traffic",
          "Manages Node versions",
        ],
        correctAnswer: 1,
        explanation:
          "nodemon watches for file changes and automatically restarts the Node.js server, useful during development.",
      },
    ],
    medium: [
      {
        question: "What is the Node.js event loop responsible for?",
        options: [
          "Compiling JavaScript",
          "Handling asynchronous callbacks and I/O",
          "Managing RAM",
          "Routing HTTP traffic",
        ],
        correctAnswer: 1,
        explanation:
          "The event loop enables Node.js to perform non-blocking I/O by offloading operations to the system kernel.",
      },
      {
        question: "What is a callback function in Node.js?",
        options: [
          "A function that calls itself",
          "A function passed as argument to be called when async operation completes",
          "A synchronous function",
          "A built-in Node method",
        ],
        correctAnswer: 1,
        explanation:
          "A callback is a function passed to an async operation that gets called when the operation completes.",
      },
      {
        question: "What is the difference between readFile and readFileSync?",
        options: [
          "No difference",
          "readFile is async (non-blocking); readFileSync is sync (blocking)",
          "readFileSync is faster",
          "readFile doesn't exist",
        ],
        correctAnswer: 1,
        explanation:
          "readFile is asynchronous and non-blocking. readFileSync blocks the event loop until the file is read.",
      },
      {
        question: "What is a Stream in Node.js?",
        options: [
          "A database connection",
          "An abstract interface for working with streaming data",
          "A file format",
          "A network protocol",
        ],
        correctAnswer: 1,
        explanation:
          "Streams are abstract interfaces for working with streaming data — reading or writing sequentially in chunks.",
      },
      {
        question: "What is the EventEmitter class used for?",
        options: [
          "HTTP requests",
          "Implementing the observer pattern for emitting and listening to events",
          "File operations",
          "Database connections",
        ],
        correctAnswer: 1,
        explanation:
          "EventEmitter is the core of Node's async event-driven architecture, allowing objects to emit and listen for events.",
      },
      {
        question: "What does async/await do in Node.js?",
        options: [
          "Makes code run faster",
          "Provides cleaner syntax for working with Promises",
          "Creates new threads",
          "Manages memory",
        ],
        correctAnswer: 1,
        explanation:
          "async/await is syntactic sugar over Promises, making asynchronous code look and behave like synchronous code.",
      },
      {
        question: "What is middleware in the context of Node.js?",
        options: [
          "A database layer",
          "Functions that execute between request and response in the pipeline",
          "A caching layer",
          "A load balancer",
        ],
        correctAnswer: 1,
        explanation:
          "Middleware functions have access to req, res, and next, executing logic between receiving a request and sending a response.",
      },
      {
        question: "What is the purpose of the path module in Node.js?",
        options: [
          "Creating network paths",
          "Working with file and directory paths in a cross-platform way",
          "URL routing",
          "Database path queries",
        ],
        correctAnswer: 1,
        explanation:
          "The path module provides utilities for working with file paths in a way that works across different operating systems.",
      },
      {
        question: "What is a Promise in Node.js?",
        options: [
          "A synchronous operation",
          "An object representing the eventual completion or failure of an async operation",
          "A database query",
          "A network request",
        ],
        correctAnswer: 1,
        explanation:
          "A Promise represents an async operation that will eventually resolve with a value or reject with an error.",
      },
      {
        question: "What does the cluster module do in Node.js?",
        options: [
          "Groups database queries",
          "Creates child processes to utilize multi-core CPUs",
          "Manages file clusters",
          "Groups HTTP routes",
        ],
        correctAnswer: 1,
        explanation:
          "The cluster module allows creating child processes that share server ports, enabling multi-core CPU utilization.",
      },
    ],
    hard: [
      {
        question: "What are the phases of the Node.js event loop?",
        options: [
          "init, run, close",
          "timers, I/O callbacks, idle, poll, check, close callbacks",
          "start, execute, end",
          "sync, async, callback",
        ],
        correctAnswer: 1,
        explanation:
          "The event loop has 6 phases: timers, pending callbacks, idle/prepare, poll, check (setImmediate), and close callbacks.",
      },
      {
        question:
          "What is the difference between process.nextTick() and setImmediate()?",
        options: [
          "No difference",
          "nextTick fires before I/O events; setImmediate fires after I/O events in the check phase",
          "setImmediate is faster",
          "nextTick is deprecated",
        ],
        correctAnswer: 1,
        explanation:
          "process.nextTick() queues a callback before the next event loop iteration. setImmediate() fires in the check phase after I/O.",
      },
      {
        question: "What is a memory leak in Node.js and how can it occur?",
        options: [
          "A network error",
          "When memory is allocated but never released, often via event listeners or closures",
          "A file system error",
          "A CPU overflow",
        ],
        correctAnswer: 1,
        explanation:
          "Memory leaks occur when memory is allocated but not garbage collected, often via forgotten event listeners, closures, or global variables.",
      },
      {
        question: "What is the worker_threads module used for?",
        options: [
          "HTTP workers",
          "Running JavaScript in parallel threads for CPU-intensive tasks",
          "Database workers",
          "File processing workers",
        ],
        correctAnswer: 1,
        explanation:
          "worker_threads enables true parallelism in Node.js by running JavaScript in separate threads, ideal for CPU-bound operations.",
      },
      {
        question: "What is backpressure in Node.js streams?",
        options: [
          "A network latency issue",
          "When a writable stream can't process data as fast as a readable stream produces it",
          "A memory pressure technique",
          "A CPU throttling mechanism",
        ],
        correctAnswer: 1,
        explanation:
          "Backpressure occurs when a readable stream produces data faster than a writable stream can consume it, requiring flow control.",
      },
      {
        question:
          "How does Node.js handle CPU-intensive tasks without blocking?",
        options: [
          "Uses multiple threads automatically",
          "Offloads to libuv thread pool or worker_threads",
          "Creates child processes automatically",
          "Uses GPU acceleration",
        ],
        correctAnswer: 1,
        explanation:
          "Node.js uses libuv's thread pool for some I/O operations and worker_threads for CPU-intensive JavaScript tasks.",
      },
      {
        question: "What is the V8 engine's role in Node.js?",
        options: [
          "Network management",
          "Compiling and executing JavaScript code",
          "File system operations",
          "Event loop management",
        ],
        correctAnswer: 1,
        explanation:
          "V8 is Google's JavaScript engine that compiles JavaScript to machine code and executes it. Node.js uses V8 as its runtime.",
      },
      {
        question: "What does REPL stand for in Node.js?",
        options: [
          "Run Execute Print Loop",
          "Read Evaluate Print Loop",
          "Runtime Execute Process Loop",
          "Read Execute Process Log",
        ],
        correctAnswer: 1,
        explanation:
          "REPL stands for Read-Evaluate-Print Loop — an interactive shell for executing Node.js code.",
      },
      {
        question: "What is the purpose of the --inspect flag in Node.js?",
        options: [
          "Inspects package.json",
          "Enables the V8 debugger protocol for debugging with Chrome DevTools",
          "Checks for syntax errors",
          "Validates environment variables",
        ],
        correctAnswer: 1,
        explanation:
          "The --inspect flag enables the Chrome DevTools Protocol, allowing debugging Node.js applications with Chrome DevTools.",
      },
      {
        question:
          "What is the difference between CommonJS and ES Modules in Node.js?",
        options: [
          "No difference",
          "CommonJS uses require/module.exports; ES Modules use import/export and are async",
          "ES Modules are older",
          "CommonJS supports tree-shaking",
        ],
        correctAnswer: 1,
        explanation:
          "CommonJS (require/exports) is synchronous and Node's original system. ES Modules (import/export) are the modern standard and load asynchronously.",
      },
    ],
  },
};

// Shuffle array utility
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Get questions for a topic and difficulty
export function getQuestions(topic, difficulty, count = 10) {
  const pool = QUESTION_BANK[topic]?.[difficulty] || [];
  const shuffled = shuffle(pool);
  return shuffled.slice(0, count).map((q, i) => ({
    ...q,
    _id: `local_${topic}_${difficulty}_${i}_${Date.now()}`,
    topic,
    difficulty,
    points: difficulty === "hard" ? 20 : difficulty === "medium" ? 15 : 10,
  }));
}

export default QUESTION_BANK;
