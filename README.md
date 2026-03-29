# ⏳ Time Capsule — Letters to Your Future Self

<div align="center">

![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

## 🧠 What is Time Capsule?

**Time Capsule** is a digital space where you can write letters to your future self and receive them at the right moment.

Instead of losing thoughts, dreams, or feelings in time, Time Capsule lets you preserve them intentionally — and rediscover them later.

It’s not just a productivity tool — it’s a *time capsule* for your emotions 💌


## ✨ Features

### 💌 Write Letters to the Future

-	Write personal messages to yourself
-	Choose a **delivery date**
-	Letters stay **sealed and hidden** until the right moment

### ⏳ Smart Delivery System

-	Letters can only be scheduled **at least 3 days ahead**
-	Prevents impulsive reading
- Creates real anticipation and emotional impact

### 🔐 Authentication System

- Secure login & signup
- JWT-based authentication
- Protected routes
- Persistent sessions via token storage

### 📬 Letter Privacy Logic

- Letters are **not readable** before the delivery date
- API automatically hides content until allowed
- Backend enforces access rules (not just frontend 👀)

### 📊 Personal Dashboard

- View all your letters
- Track delivery status
- Clean and minimal UI focused on writing


## 🛠️ Tech Stack

### Frontend

-	React 18 – Modern UI development
-	TypeScript – Type safety
-	Vite – Fast dev environment
-	Tailwind CSS – Clean UI styling
-	React Router – Navigation
-	Sonner – Toast notifications

### Backend

-	Ruby on Rails (API mode) – RESTful API
-	Devise + JWT – Authentication system
-	PostgreSQL – Database
-	Active Record – ORM for data handling

### Architecture

-	Monorepo structure:

```
/backend   → Rails API
/frontend  → React app
```

- Stateless authentication (JWT)
- RESTful endpoints
- Clear separation of concerns


## 🚀 Getting Started

### Prerequisites

-	Node.js 18+
-	Ruby 3+
-	PostgreSQL

### Installation

1. Clone the repository

```
git clone https://github.com/devanaclimgo/time-capsule.git
cd time-capsule
```

2. Backend setup (Rails API)

```
cd backend
bundle install
rails db:create db:migrate
rails server
```

3. Frontend setup (React)

```
cd frontend
npm install
npm run dev
```

4. Open your browser

```
http://localhost:5173
```


## Project Structure

```
time-capsule/
├── backend/
│   ├── app/
│   │   ├── controllers/
│   │   │   └── letters_controller.rb
│   │   ├── models/
│   │   │   ├── user.rb
│   │   │   └── letter.rb
│   └── config/
│
├── frontend/
│   ├── src/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── landing/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── sign_up/
│   │   │   └── page.tsx
│   │   ├── write/
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── letter-card.tsx
│   │   │   └── letter-paper.tsx
│   │   ├── lib/
│   │   │   └── api.ts
│   │   └── types/
│
└── README.md
```


## 🔐 Authentication Flow

  1.	User logs in via /users/sign_in
  2.	Backend returns a **JWT token**
  3.	Token is stored in localStorage
  4.	All requests include:

```git
Authorization: Bearer <token>
```

  5.	Backend validates token → current_user is available


## ⚠️ Important Behaviors
- ⛔ Letters cannot be scheduled for immediate delivery
- 🔒 Content is hidden until readable_at
- 🔐 Unauthorized requests return 401
- 🔁 Token expiration requires re-login


## 🎯 Project Goals
- Create an emotional connection with future self
- Encourage reflection and intentional writing
- Combine **backend rules + frontend UX**
- Build a full-stack project with real-world auth & validation


## 💡 Future Improvements
- 📬 Email delivery system (send letters via email)
- 🔔 Notifications when a letter becomes readable
- 📱 Mobile responsiveness improvements
- 🧠 AI-assisted reflections (optional 👀)
- 📊 Timeline view of past letters


## 👩‍💻 Creator

**Ana Clara** - The mind behind Âncora

  - 📧 **Email**: anaclimgo@gmail.com
  - 🔗 **GitHub**: [@devanaclimgo](https://github.com/devanaclimgo)
  - 💼 **LinkedIn**: [Ana Clara Gomes](https://www.linkedin.com/in/ana-clara-gomes-48b83b224/)


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

###### Made with ❤️ by Ana Clara

</div>