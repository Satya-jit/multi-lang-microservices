# Multi-Language Microservices Demo

A demonstration of microservices architecture using React.js, Python, Java, and Go, all containerized with Docker and deployed via GitHub Actions.

## Architecture

- **Frontend**: React.js (Port 3000) - Serves the main interface
- **Python Backend**: Flask API (Port 5000) 
- **Java Backend**: Spring Boot API (Port 8080)
- **Go Backend**: Native HTTP server (Port 8090)

## Quick Start

### Local Development
```bash
# Clone the repository
git clone <your-repo-url>
cd multi-lang-microservices

# Build and run all services
docker-compose up --build

# Access the application
open http://localhost:3000
```

### Using Pre-built Images from Docker Hub
```bash
# Run with pre-built images
docker-compose -f docker-compose.prod.yml up

# Access the application
open http://localhost:3000
```

## Individual Service URLs

- Main Application: http://localhost:3000
- Python API: http://localhost:5000
- Java API: http://localhost:8080  
- Go API: http://localhost:8090

## Docker Hub Images

All images are available on Docker Hub under `satya490/`:

- `satya490/multi-lang-frontend:latest`
- `satya490/multi-lang-python:latest`
- `satya490/multi-lang-java:latest`
- `satya490/multi-lang-go:latest`

## Features

- Multi-language microservices architecture
- Containerized with Docker
- Automated CI/CD with GitHub Actions
- Cross-platform Docker images (AMD64/ARM64)
- Nginx reverse proxy for frontend
- CORS enabled for cross-service communication
- Health check endpoints for all services

## Development

Each service can be developed independently:

```bash
# Python service
cd backend-python
pip install -r requirements.txt
python app.py

# Java service  
cd backend-java
mvn spring-boot:run

# Go service
cd backend-go
go run main.go

# React frontend
cd frontend-react
npm install
npm start
```
