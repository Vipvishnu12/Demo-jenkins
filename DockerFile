FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci   # faster & clean install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]