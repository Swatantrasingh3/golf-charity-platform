# 🏌️ Golf Charity Subscription Platform

A full-stack web application that combines golf performance tracking, monthly prize draws, and charitable giving into one engaging platform.

---

## 🚀 Live Demo
👉 (Add your Vercel link here after deployment)

---

## 📌 Features

### 👤 User Features
- User Signup & Login (Authentication)
- Enter and manage golf scores (last 5 scores only)
- Participate in monthly draw system
- View draw results
- Track winnings

### 🎯 Draw System
- Random 5-number draw generation
- Match logic (3, 4, 5 matches)
- Prize calculation based on match count

### 🏆 Prize Distribution
- 5 Match → 40% (Jackpot)
- 4 Match → 35%
- 3 Match → 25%

### 👨‍💼 Admin Panel
- View winners
- Track prize distribution
- Manage draw results

---

## 🛠 Tech Stack

- **Frontend:** Next.js (React)
- **Backend:** Supabase (Database + Auth)
- **Deployment:** Vercel
- **Language:** JavaScript

---

## 📊 Database Tables

### 1. Scores Table
- Stores user golf scores
- Maintains only latest 5 entries per user

### 2. Winners Table
- Stores match results
- Tracks prize amount

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/golf-charity-platform.git
cd golf-charity-platform
