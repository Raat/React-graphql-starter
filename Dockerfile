# specify the node base image with your desired version node:<version>
FROM node:8.7.0-alpine

RUN mkdir -p /src/app/client

WORKDIR /src/app/client

# For npm@5 or later, copy package-lock.json as well
COPY package.json /src/app/client

RUN npm cache clean --force && rm -rf ./node_modules

RUN npm i -g @storybook/cli --silent --progress=false

RUN npm install --silent --progress=false

COPY . /src/app/client

EXPOSE 9000

CMD [ "npm", "start" ]