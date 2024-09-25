# Travel App

## Overview

The Travel App is a comprehensive platform for discovering and booking hotels, restaurants, and tourist spots. It features a user-friendly frontend built with React, a robust backend implemented with Django, and a well-organized database schema. This project includes functionalities for user authentication, search capabilities, and detailed views of hotels and other attractions.

## Project Structure

- `/frontend` - Contains the React application
  - `/public` - Public assets like HTML and images
  - `/src` - Source code for the React app, including components, pages, services, and styles
  - `package.json` - Project dependencies and scripts

- `/backend` - Contains the Django application
  - `/app` - Main Django app with sub-apps for authentication, hotels, restaurants, tourist spots, and bookings
  - `settings.py` - Django settings configuration
  - `urls.py` - URL routing configuration
  - `wsgi.py` - WSGI entry point
  - `manage.py` - Django management script
  - `requirements.txt` - Python dependencies

- `/database` - SQL scripts for database initialization and seeding

- `/design` - Design assets including logos, mockups, and style guides

- `/deployment` - Deployment scripts and configurations
  - `Dockerfile` - Docker configuration for building the application image
  - `docker-compose.yml` - Docker Compose configuration
  - `/kubernetes` - Kubernetes manifests for deployment
  - `/ci-cd` - CI/CD pipeline configuration
  - `/scripts` - Build and deploy scripts

## Installation

### Frontend

1. Navigate to the `/frontend` directory.
2. Install the required dependencies:
   ```bash
   npm install
