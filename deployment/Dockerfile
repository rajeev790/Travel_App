# Backend Service
FROM python:3.9-slim as backend

WORKDIR /app

COPY backend/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .

CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8000", "app.wsgi:application"]

# Frontend Service
FROM node:18 as frontend

WORKDIR /frontend

COPY frontend/package.json frontend/package-lock.json ./

RUN npm install

COPY frontend/ .

RUN npm run build

# Combine Frontend and Backend
FROM nginx:alpine

COPY --from=frontend /frontend/build /usr/share/nginx/html
COPY --from=backend /app /app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
