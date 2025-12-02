# Stage 1: Build the frontend
FROM node:22-alpine AS builder
WORKDIR /app/frontend-app
COPY frontend-app/package*.json ./
RUN npm ci
COPY frontend-app/ .
RUN npm run build

# Stage 2: Production image
FROM node:22-alpine
WORKDIR /app

# Install OpenJDK 17 (required for the Java compiler)
RUN apk add --no-cache openjdk17-jdk

# Copy server dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy server code
COPY server.js .
COPY scripts/ ./scripts/

# Copy built frontend from builder stage
COPY --from=builder /app/frontend-app/dist ./frontend-app/dist

# Create temp directory for compilation jobs
RUN mkdir -p temp

EXPOSE 3001
CMD ["node", "server.js"]
