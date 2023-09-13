FROM nginx:latest

WORKDIR /app

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf
COPY dockerize-alpine-linux-amd64-v0.6.1.tar.gz /app

ENV DOCKERIZE_VERSION v0.6.1
RUN tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
