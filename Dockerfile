FROM node:alpine

WORKDIR /usr/app

COPY . .

EXPOSE 3000

RUN yarn install

CMD [ "yarn",  "dev" ]