#This Dockerfile will be used to run our todo list application in a docker container.

#20190521
#v1.0.0

FROM node

MAINTAINER Nicholas Green <nicholas.green1@gmail.com>

RUN mkdir -p /app

COPY package.json /app/

RUN npm install

COPY . app/.

EXPOSE 8080

CMD [ "node", "app.js" ]
