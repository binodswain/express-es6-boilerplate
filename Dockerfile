
FROM node:10-alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY . .


# If you are building your code for production
RUN npm i

RUN npm run package

USER node
# Bundle app source

EXPOSE 4000

CMD [ "npm", "run", "serverprod" ]