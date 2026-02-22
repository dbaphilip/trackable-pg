FROM node:24
WORKDIR /app
COPY package*json .
RUN npm i
COPY . .
EXPOSE 3000
RUN npx prisma generate
RUN npm run build
CMD [ "npm", "run", "start" ]

