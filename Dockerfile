FROM node:12.18.4

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . ./

EXPOSE 8888
CMD ["node", "server.js"]
