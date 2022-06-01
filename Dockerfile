FROM node:18-alpine

RUN apk update && apk upgrade

WORKDIR /usr/src/app
COPY . .


EXPOSE 8000
CMD ["yarn start", "-p 3000"]
