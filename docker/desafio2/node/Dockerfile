FROM node:latest

WORKDIR /app

COPY index.js /app
COPY dockerize-alpine-linux-amd64-v0.6.1.tar.gz /app

EXPOSE 3000

ENV DOCKERIZE_VERSION v0.6.1
RUN tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz