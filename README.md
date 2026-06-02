# Tour Package Management System

A Node.js backend system for managing tour packages, deployed on AWS EC2 with MongoDB and PM2, with CI/CD via GitHub Actions.

---

## Features

- REST API for tour packages
- MongoDB database integration
- PM2 process manager deployment
- Continuous Integration / Continuous Deployment (CI/CD) using GitHub Actions
- Automated backend tests

---

## Project Structure

```text
tour-package-management-system/
│
├── backend/              # Node.js backend source code
├── frontend/             # React frontend
├── docs/                 # Project documentation
├── design-patterns/      # Design pattern examples
├── python-oop/           # Python OOP exercises
├── src/                  # Shared source files
├── .github/
│   └── workflows/        # GitHub Actions CI/CD workflows
├── README.md
└── package.json
```
---

## Setup Instructions

1. **Clone the repository**

```bash
git clone git@github.com:Dgab8898/tour-package-management-system.git
cd tour-package-management-system/backend

2. **Install dependencies**
npm install
3. **Create a .env file**
4.  **Start the backend with PM2**
pm2 start src/server.js --name tour-package
pm2 save
pm2 status
...

5. **Run tests**
...
npm test
...

## Deployment
...
- AWS EC2 Instance runs Node.js backend
- PM2 manages backend process (tour-package)
- Docker runs MongoDB container
- GitHub Actions automates tests and deployment
'''

## CI/CD
...
- Backend workflow runs on pushes to main and taskfeatures branches
 - Automated steps:
- Checkout repository
- Install dependencies
- Run backend tests
- Deploy backend using PM2
'''

## Access
...
Backend API accessible at:
http://<EC2_PUBLIC_IP>:5000
- PM2 process name: tour-package
- MongoDB container: mongo on port 27017
'''

## License
...
Copy right (C) David Gabriel 2026
...
## References
'''
...
