# QuizMERN — Full Stack MERN Quiz Platform

A complete online quiz web application built with **MongoDB, Express.js, React, and Node.js**.

---

## Features

- **User Auth** — Register, login, JWT-based sessions
- **Quiz Engine** — 30-second timer per question, instant feedback, auto-advance
- **4 Topics** — MongoDB, Express.js, React, Node.js
- **3 Difficulty Levels** — Easy, Medium, Hard
- **Results & Review** — Score breakdown with correct answer explanations
- **Leaderboard** — Global rankings filterable by topic
- **Quiz History** — Paginated record of all past attempts
- **User Profile** — Stats, topic performance chart, edit name/password
- **Admin Seeder** — Pre-loaded question bank (22 questions across all topics)

---

## Project Structure

```
quizmern/
├── backend/
│   ├── config/seed.js           # Database seeder
│   ├── middleware/auth.js        # JWT protect + adminOnly + generateToken
│   ├── models/
│   │   ├── User.js              # User schema (bcrypt, virtuals)
│   │   ├── Question.js          # Question schema (topic, difficulty, points)
│   │   └── QuizResult.js        # Quiz result schema (answers, score, passed)
│   ├── routes/
│   │   ├── auth.js              # POST /register, /login  GET /me
│   │   ├── questions.js         # GET /questions  POST/PUT/DELETE (admin)
│   │   ├── quiz.js              # POST /submit  GET /history  GET /result/:id
│   │   ├── leaderboard.js       # GET /leaderboard  GET /rank
│   │   └── users.js             # GET/PUT /profile
│   ├── .env.example
│   ├── package.json
│   └── server.js                # Express app entry point
│
├── frontend/src/
│   ├── components/Navbar.jsx
│   ├── context/AuthContext.jsx  # Global auth state
│   ├── hooks/useQuiz.js         # Quiz logic (timer, answers, submit)
│   ├── pages/
│   │   ├── Home.jsx             # Topic + difficulty selector
│   │   ├── Login.jsx / Register.jsx
│   │   ├── Quiz.jsx             # Live quiz interface
│   │   ├── Results.jsx          # Score + leaderboard
│   │   ├── History.jsx          # Past quiz attempts
│   │   ├── Leaderboard.jsx      # Global rankings
│   │   └── Profile.jsx          # User stats + edit profile
│   ├── utils/api.js             # Axios instance with JWT interceptor
│   ├── App.jsx                  # Router + PrivateRoute + GuestRoute
│   └── index.css                # Global styles + CSS variables
└── README.md
```

---

## Quick Start

### 1. Prerequisites
- **Node.js** v18+
- **MongoDB** running locally on port 27017 (or use MongoDB Atlas)

### 2. Install Dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Configure Environment

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/quizmern
JWT_SECRET=change_this_to_a_long_random_string
JWT_EXPIRE=7d
NODE_ENV=development
```

Frontend `.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Seed the Database

```bash
cd backend && node config/seed.js
# Seeds 22 questions + creates admin@quizmern.com / admin123
```

### 5. Run Development Servers

```bash
# Terminal 1 — Backend
cd backend && npm run dev

# Terminal 2 — Frontend
cd frontend && npm start
```

App runs at **http://localhost:3000**, API at **http://localhost:5000**

---

## API Reference

### Auth
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login, returns JWT |
| GET | `/api/auth/me` | Private | Get current user |

### Questions
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/questions?topic=react&difficulty=easy&limit=10` | Private | Fetch random questions |
| POST | `/api/questions` | Admin | Create question |
| PUT | `/api/questions/:id` | Admin | Update question |
| DELETE | `/api/questions/:id` | Admin | Delete question |

### Quiz
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/quiz/submit` | Private | Submit answers + get score |
| GET | `/api/quiz/history` | Private | Paginated history |
| GET | `/api/quiz/result/:id` | Private | Full result with review |

### Leaderboard
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/leaderboard?topic=react` | Public | Global leaderboard |
| GET | `/api/leaderboard/rank` | Private | Current user rank |

### Users
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/users/profile` | Private | Profile + stats + recent results |
| PUT | `/api/users/profile` | Private | Update name/password |

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, React Router v6, Axios, CSS Modules |
| Backend | Node.js, Express.js 4 |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| Validation | express-validator |

---

## Deployment

**Backend** → Render / Railway / Fly.io  
Set env vars, point MONGO_URI to Atlas, update CORS origin in server.js.

**Frontend** → Vercel / Netlify  
Set REACT_APP_API_URL to deployed backend URL, `npm run build`.

**Database** → MongoDB Atlas (free tier works great)

---

## Admin Login (after seeding)
```
Email:    admin@quizmern.com
Password: admin123
```
