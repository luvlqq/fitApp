FROM node:20-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

RUN npm run build auth

CMD [ "node", "dist/src/main" ]