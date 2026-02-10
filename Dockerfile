FROM node:20-alpine

ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]