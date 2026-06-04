# Express.js Web Application (BINCOME-PRO)

A containerized, production-ready Node.js web application built with Express.js. This application is configured with Docker, Kubernetes manifests (`deployment.yml`), and GitHub Actions for fully automated CI/CD deployment to **AWS ECS (Elastic Container Service)**.

## 🚀 Features

- **Automated CI/CD**: Pre-configured GitHub Actions pipeline (`ci-cd.yml`) for automated testing and cloud deployment.
- **Dockerized Architecture**: Built-in `Dockerfile` and optimization layers for secure, ultra-lightweight container runtime environments.
- **Production-Ready Port Routing**: Seamlessly adapts to hosting providers using `process.env.PORT` with a safe local fallback to port `3000`.
- **Static Asset Delivery**: Safely serves all client-side UI files directly from the isolated `/public` directory.

## 📂 Project Structure

```text
├── .github/workflows/
│   └── ci-cd.yml       # GitHub Actions automated pipeline
├── public/
│   ├── index.html      # Main website homepage
│   ├── script.js       # Client-side JavaScript logic
│   └── styles.css      # Custom UI design layout
├── .dockerignore       # Prevents local files from cluttering Docker builds
├── .gitignore          # Keeps node_modules out of git source control
├── deployment.yml      # Kubernetes / Container deployment orchestrator
├── Dockerfile          # Blueprint for building the app image
├── index.js            # Express.js server entry point
├── package.json        # Project metadata and dependency configuration
└── README.md           # Project system documentation
```

## 🛠️ Prerequisites

Before running locally or initiating container builds, ensure you have installed:
- [Node.js](https://nodejs.org) (v18 or higher recommended)
- [Docker Desktop](https://docker.com) (for local container testing)

## 💻 Local Desktop Setup

Follow these quick commands to spin up the environment natively:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Access the application**:
   Open browser to: `http://localhost:3000`

## 🐳 Docker Containerization

To run and test the container version locally before pushing it to AWS:

1. **Build the container image**:
   ```bash
   docker build -t express-hello-world .
   ```

2. **Run the container** (maps host port 3000 to internal container port):
   ```bash
   docker run -p 3000:3000 express-hello-world
   ```

## ☁️ AWS ECS Deployment Architecture

This project is deployed using **AWS ECS (Elastic Container Service)**. 

### Infrastructure Flow
1. **CI/CD Build**: Pushing to the main branch triggers `.github/workflows/ci-cd.yml`.
2. **Container Registry**: The image is compiled and stored in **AWS ECR** (Elastic Container Registry).
3. **Task Definition**: AWS ECS spins up a container task using the updated image configuration.
4. **Network Exposure**: The application dynamically handles `process.env.PORT` injected by ECS.

### Accessing the Live App
To view your running live website, access the endpoint provided by your AWS infrastructure setup:
* **Direct Task IP**: Open the **AWS ECS Console** -> Go to your **Cluster** -> Click **Tasks** -> Select your running Task -> Copy the **Public IP** under the Network section (e.g., `http://<TASK_PUBLIC_IP>:3000`).
* **Load Balancer DNS (Production Standard)**: If your ECS service is wired to an Application Load Balancer (ALB), access the app using the ALB's canonical DNS address.
