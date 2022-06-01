FROM node:18-alpine

RUN apk update && apk upgrade

WORKDIR /usr/src/app
RUN npm i -g yarn
COPY . .


EXPOSE 8000
CMD ["yarn", "start"]
