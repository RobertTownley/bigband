FROM node:latest

WORKDIR /frontend
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
RUN npm install @vue/cli -g
COPY . .
