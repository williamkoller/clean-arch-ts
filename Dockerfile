FROM node:16.15.0-alpine3.15

WORKDIR /app

RUN mkdir -p /app

COPY package.json /app/

RUN yarn cache clean \
  rm yarn.lock \
  rm -rf node_modules \
  yarn 
  
COPY . .

EXPOSE 3000

CMD [ "yarn", "start:dev" ]