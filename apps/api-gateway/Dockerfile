FROM node:20-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci
RUN npx prisma generate

COPY . .

RUN npm run build api-gateway

CMD [ "node", "dist/src/main" ]
CMD [ "npx", "prisma", "migrate", "dev" ]
CMD [ "npm", "run", "start:migrate:docker" ]