#!/bin/bash

# Build backend image
docker build -t my-backend-image:latest --target=backend .

# Build frontend image
docker build -t my-frontend-image:latest --target=frontend .
