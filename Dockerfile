FROM node:alpine

RUN mkdir -p /project-titan

WORKDIR /project-titan

COPY . /project-titan

RUN npm install

RUN npm install -g serve

RUN npm update

RUN npm audit fix

RUN npm run build

EXPOSE 5000

CMD [ "serve", "-s", "build" ]