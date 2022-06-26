# FROM node:latest
# WORKDIR /app
# COPY package.json .
# RUN npm i
# CMD [ "npm", "start" ]

FROM node:latest
WORKDIR "/app"
COPY package.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]