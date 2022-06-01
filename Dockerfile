FROM node:18-alpine

RUN apk update && apk upgrade

WORKDIR /usr/src/app
COPY . .
RUN yarn
RUN yarn build


EXPOSE 8000
CMD ["yarn", "start"]
