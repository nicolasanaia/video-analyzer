# Common build stage
FROM node:17-alpine as build

COPY . ./app
WORKDIR /app
COPY package*.json ./

# RUN apk update
# RUN apk add --update alpine-sdk
RUN yarn install \
    && rm -rf /var/lib/apt/lists/*

# Production build stage
FROM node:17-alpine

WORKDIR /app
COPY --from=build /app .

EXPOSE 3000

CMD ["yarn", "run", "dev"]