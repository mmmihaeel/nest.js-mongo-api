FROM node:14.4.0-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install @nestjs/common mongoose@6.1.6 @typegoose/typegoose@9.5.0 --force
RUN npm install --force 
ADD . .
RUN npm run build
RUN npm prune --production
RUN npm rebuild --verbose sharp
CMD ["node", "./dist/main.js"]