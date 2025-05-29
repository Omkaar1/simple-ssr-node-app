# 🚀 Deploy Node.js SSR App on AWS EC2

This repository contains a **simple Server-Side Rendered (SSR)** web application built using **Node.js**, **Express**, and **EJS**, designed to demonstrate how to deploy a Node.js app on an **AWS EC2 instance**.

---

## 🎯 Purpose

The main goal of this project is to provide a minimal, beginner-friendly example of deploying a Node.js SSR application on a live Ubuntu-based EC2 server using Git and Express.

---

## 🧱 Tech Stack

- **Node.js** (backend runtime)
- **Express** (web framework)
- **EJS** (templating engine for SSR)
- **AWS EC2** (cloud hosting)

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

- An **AWS EC2 Ubuntu instance** running
- Your **.pem** key file to connect via SSH
- Security group with **port 22 (SSH)** and **port 3000 or 80 (HTTP)** open

---

### 🔧 Steps to Deploy

#### 1. SSH into your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-public-ip

#### 2. Install required packages
sudo apt update
sudo apt install nodejs npm git -y

#### 3. Clone the repository
git clone https://github.com/Omkaar1/simple-ssr-node-app.git
cd simple-ssr-node-app

#### 4. Install dependencies
npm install

#### 5. Start the server
npm start

#### 6. View the app in your browser
http://your-ec2-public-ip:3000

If you see a message like Hello from Server-Side Rendering!, it’s working! 🎉
