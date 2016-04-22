FROM mhart/alpine-node:5

RUN mkdir -p /app/blueprints
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["node", "index.js"]
