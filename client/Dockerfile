FROM node:20
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Force install all dependencies (including devDependencies)
RUN npm install --legacy-peer-deps

# Copy the rest of the files
COPY . .

# Build the frontend
RUN npm run build

EXPOSE 5173
CMD ["npm","run","preview"]
