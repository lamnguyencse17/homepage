FROM node:18-alpine as dependencies

RUN apk update && apk upgrade

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18-alpine as builder
WORKDIR /usr/src/app
COPY . .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
RUN yarn build

FROM node:18-alpine as runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
EXPOSE 8000
CMD ["node_modules/.bin/next", "start", "-p", "8000"]

