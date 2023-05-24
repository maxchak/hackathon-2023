# Use a lightweight Node.js image as the base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which your app runs (usually 3000 for Vite)
EXPOSE 3000

# Start the app when the container launches
CMD ["npm", "run", "serve"]