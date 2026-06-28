# End-to-End CI/CD Pipeline with Jenkins, Docker & Kubernetes

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=jenkins&logoColor=white)](https://www.jenkins.io/)

## Overview
An automated CI/CD pipeline that builds a Node.js application into a Docker image and deploys it to a Kubernetes cluster, triggered automatically on every Git push. Implements zero-downtime rolling deployments with health checks.

## Architecture
## Pipeline Stages

| Stage | Action |
|-------|--------|
| 1. Clone Repo | Pulls latest code from GitHub |
| 2. Build Docker Image | Builds image from Dockerfile |
| 3. Load into Minikube | Transfers image into cluster's Docker |
| 4. Deploy to Kubernetes | Applies Deployment + Service YAML |
| 5. Verify Deployment | Checks rollout status and pod health |

## Tech Stack
- **CI/CD:** Jenkins (Declarative Pipeline)
- **Containerization:** Docker
- **Orchestration:** Kubernetes (Minikube)
- **Application:** Node.js + Express
- **Version Control:** Git/GitHub

## Key Features
- ✅ Fully automated build → deploy pipeline
- ✅ Zero-downtime rolling updates
- ✅ Liveness & Readiness probes for self-healing
- ✅ Horizontal scaling with 2 replicas
- ✅ NodePort service for external access

## Project Structure
devops-project/

├── app.js              # Express application

├── Dockerfile           # Container image definition

├── Jenkinsfile          # CI/CD pipeline definition

├── package.json          # Node dependencies

└── k8s/

├── deployment.yaml   # K8s Deployment spec

└── service.yaml      # K8s Service spec
## How to Run Locally

```bash
# 1. Clone repo
git clone https://github.com/SiddharthTol/devops-project.git
cd devops-project

# 2. Start Minikube
minikube start --driver=docker

# 3. Build and load image
docker build -t devops-app .
docker save devops-app | docker exec -i minikube docker load

# 4. Deploy
kubectl apply -f k8s/

# 5. Access app
curl http://$(minikube ip):30007
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Returns welcome message |
| `/health` | GET | Health check (used by K8s probes) |
| `/error` | GET | Simulates application error |

## Jenkins Pipeline View
The pipeline runs 5 stages on every commit: Clone → Build → Load → Deploy → Verify, with automated rollback on failure.

## Author
**Siddharth Kumar Singh** | [LinkedIn](https://www.linkedin.com/in/siddharth-kumar-singh-49b468243/) | [GitHub](https://github.com/SiddharthTol)
