# Use official Node.js 20 image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Ensure devDependencies (like @vitejs/plugin-react) are installed
ENV NODE_ENV=development
RUN npm install --legacy-peer-deps

# Copy the rest of the frontend source code
COPY . .

# Build the frontend
RUN npm run build

# Expose the frontend port
EXPOSE 5173

# Start the Vite preview server
CMD ["npm","run","preview"]
