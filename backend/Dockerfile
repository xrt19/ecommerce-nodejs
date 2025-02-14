# Menggunakan image Node.js versi 16 sebagai base image. Krn 16 tuh common dianggap stabil
FROM node:16

# Menentukan direktori kerja di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Meng-install dependency aplikasi
RUN npm install

# Menyalin seluruh kode aplikasi ke dalam container
COPY . .

# Mengekspos port yang digunakan oleh aplikasi, misalnya 3000
EXPOSE 3000

# Menjalankan perintah untuk memulai aplikasi
CMD ["npm", "start"]
