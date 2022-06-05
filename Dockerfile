FROM node:lts-alpine3.14 as dependencies
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts-alpine3.14 as builder
RUN apk update && \
  apk add --no-cache libc6-compat autoconf automake libtool make tiff jpeg zlib zlib-dev pkgconf nasm file gcc musl-dev
WORKDIR /usr/src/app
COPY . .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
RUN yarn build

FROM node:18-alpine as runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
EXPOSE 8000
CMD ["node_modules/.bin/next", "start", "-p", "8000"]

