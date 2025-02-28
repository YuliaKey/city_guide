# 🏙️ City Guide - Final Project (Wild Code School)

## 📖 Project Overview

City Guide is a full-stack web application designed to help users explore cities and discover points of interest (POIs) through an interactive map. Users can navigate through different locations, view POI details, leave reviews, and manage favorites. Additionally, the application features a back office for administrators to manage cities, POIs, categories, and users.

This project was developed as part of the Wild Code School training program to obtain the Concepteur Développeur d’Application (Level 6) certification. It was built collaboratively in a team of four developers, following Agile/Scrum methodologies.
## 🎯 Objectives

- Develop a scalable and performant application using modern web technologies.
- Implement an interactive and accessible UI using Material-UI (MUI).
- Ensure secure authentication with JWT & Argon2 for password hashing.
- Follow DevOps best practices with Docker and CI/CD (GitHub Actions).
- Adopt Agile & Scrum methodologies for development.
- Optimize SEO and eco-conception to ensure sustainability and accessibility.
  
## 🛠️ Tech Stack

- Frontend:	Next.js, React, MUI, Apollo Client
- Backend:	Node.js, GraphQL, TypeORM
- Database:	PostgreSQL, Redis (for caching)
- Authentication:	JWT, Argon2 (password hashing)
- DevOps:	Docker, GitHub Actions, Nginx, Caddy (HTTPS)
- Testing:	Jest, Playwright (E2E), Testing Library

## 🚀 Features

- 🔍 Search POIs: Users can explore and filter points of interest in various cities.
- 📍 Interactive Map: Display of POIs on a dynamic map.
- 🔒 Authentication & Security: Secure user authentication with JWT.
- 📸 Image Uploads: Admins can upload images for POIs.
- 📡 Admin Dashboard: Back-office for city & POI management.

## 📜 Methodology & Workflow

- Agile & Scrum: We followed an iterative development process with 2-week sprints, daily stand-ups, sprint planning, and retrospectives.
- Git Workflow: 

![Screenshot 2025-02-28 at 10 40 59](https://github.com/user-attachments/assets/c948a20e-02d8-4318-a992-caec1a6a86b7)

Continuous Deployment: Docker images are built & pushed to DockerHub, and deployed automatically via GitHub Actions & Webhooks.
![Screenshot 2025-02-28 at 10 42 49](https://github.com/user-attachments/assets/febe0d45-b003-4d42-a91d-9385d6e312b4)

## 💡 My Contributions

Throughout the project, I actively contributed to both the frontend & backend as well as the DevOps infrastructure. My key contributions include:

### 🎨 UI/UX & Design Contributions

🖌 Mockups & Wireframes: Created UI/UX designs using Figma and App Visily:

![Screenshot 2025-02-28 at 11 10 46](https://github.com/user-attachments/assets/880faddd-6ec2-473d-8851-6a22e25cefd5)

![Screenshot 2025-02-28 at 11 11 01](https://github.com/user-attachments/assets/aca3f479-63a0-4bc2-bb82-8f64c2539d5c)

🎨 Charte Graphique: Defined color schemes, typography, and visual identity:

![Screenshot 2025-02-28 at 11 10 53](https://github.com/user-attachments/assets/fff3fb7a-acfb-49b7-8be9-a46ef01dd60b)


### Development Contributions

✔ Frontend Features: Developed interactive map and POI-related features (search and filter of POIs on the map), created reusable UI components with MUI, and implemented queries/mutations with Apollo Client.
✔ Backend API: Designed GraphQL resolvers, integrated TypeORM, and optimized database queries.
✔ Authentication & Security: Implemented JWT authentication, password hashing with Argon2, and user role management.

### Technical & DevOps Contributions

✔ Project Setup & Dockerization: Configured Docker for development & production, ensuring a smooth setup.
✔ CI/CD Integration: Automated testing & deployment pipelines with GitHub Actions & Webhooks.
✔ Deployment Strategy: Set up DockerHub, Nginx, Caddy (for HTTPS), and PostgreSQL database management.

### Project Management Contributions
✔ Scrum Methodology: Participated in sprint planning, daily stand-ups, and retrospectives.
✔ Task & Issue Tracking: Managed project workflow on Trello.

## 💡 Future Enhancements

✔ Automated End-to-End Testing
✔ User Profile and Subscription System
✔ Real-time Notifications
✔ Improved Performance & Accessibility

## 🛠️ Setup & Installation

### 1️⃣ Clone the repository

git clone [https://github.com/your-username/city-guide.git](https://github.com/YuliaKey/city_guide.git)

cd city-guide

### 2️⃣ Install Dependencies

#### Frontend

cd frontend && npm install

#### Backend

cd backend && npm install

### 3️⃣ Environment Variables

Create a .env file in both /frontend and /backend with the following variables:

#### Frontend:

#mapbox secret key api
NEXT_PUBLIC_MAPBOX_API_KEY=""

#### Backend:

#secret key for hash
SECRET_KEY=

#google api key
GOOGLE_API_KEY=

#database
DATABASE_USERNAME=
DATABASE_PASSWORD=

#environment 
NODE_ENV=

### 4️⃣ Run the Project

#### Using Docker

docker-compose up --build

#### Manually

Start backend:

cd backend && npm run start

Start frontend:

cd frontend && npm run start

## Annexe

▶️ Watch the project presentation video here:
[City Guide - Presentation](https://drive.google.com/file/d/1KZlGOBgJPQ04v_UrflGgj7Opd80UcIeX/view?usp=drive_link)

📑 Project Presentation Slides:
[City Guide - Presentation Slides](https://docs.google.com/presentation/d/1K41leD2i5MBxMOWNgrl9xl_T9QFFAmRpzHCa50umzRc/edit?usp=sharing)
