# 🛠️ Fit Tracker – Backend API for Fitness Tracker App

This is the backend API for the [Fitness Tracker](https://github.com/Jagadeesh-Jetti/Fitness-Tracker) application. It is built using **Node.js**, **Express**, and **MongoDB**, and supports full **JWT-based authentication**, **user-specific workout management**, and **RESTful APIs** to handle workout logs.

---

## ✨ Features

- 🔐 **JWT Authentication** – Secure login and signup
- 🏋️‍♂️ **Workout CRUD** – Create, read, update, and delete workouts
- 👤 **User-Specific Logs** – Each workout is tied to a user
- 🕒 **Timestamps & Sorting** – View logs by date
- 🔐 **Protected Routes** – Only logged-in users can access workouts
- 🌐 **CORS Enabled** – Frontend can access APIs easily

---

## 🛠 Tech Stack

- **Backend Framework**: Node.js + Express  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JSON Web Token (JWT)  
- **Utilities**: dotenv, bcryptjs, CORS

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Jagadeesh-Jetti/fit_tracker.git
cd fit_tracker
