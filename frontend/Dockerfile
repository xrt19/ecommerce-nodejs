# Stage 1: Build stage
FROM node:16 AS build

WORKDIR /app

# Copy package files dan install dependencies
COPY package*.json ./
RUN npm install

# Copy seluruh source code ke dalam container
COPY . .

# Build project menggunakan Vite
RUN npm run build

# Stage 2: Production stage
FROM node:16-alpine

WORKDIR /app

# Salin hasil build dari stage sebelumnya
COPY --from=build /app/dist ./dist

# Install serve sebagai static file server
RUN npm install -g serve

# Expose port yang sesuai, misalnya 5050 (sesuai script preview di package.json)
EXPOSE 5050

# Jalankan serve untuk menyajikan folder dist
CMD ["serve", "-s", "dist", "-l", "5050"]
