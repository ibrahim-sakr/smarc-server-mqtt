FROM node:11.9.0-alpine

RUN apk add --no-cache --update \
    make \
    g++ \
    gcc \
    libc-dev \
    python

WORKDIR /smarc.home

COPY . /smarc.home

RUN npm install

EXPOSE 3000

EXPOSE 9091

CMD npm run dev
