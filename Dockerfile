FROM node:16

WORKDIR ./

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["node", "api.js"]