FROM node:16-alpine

RUN apk update

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN npm install --ignore-scripts=false --verbose sharp