FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 4000

CMD ["bash", "-c", "npx prisma migrate dev --name init && node index.js"]