# Use Node.js 18 as the base image
FROM node:18-bullseye

# Install OpenJDK 17
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk && \
    apt-get clean;

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Build the frontend
RUN npm run build

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
