FROM node:12.18.4
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 300
CMD npm start