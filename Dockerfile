# Dockerfile
FROM node:lts-alpine3.17

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update
RUN apk update && apk upgrade

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm ci
RUN npm run build