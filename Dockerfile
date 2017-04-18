FROM node

COPY src /app

EXPOSE 3000

WORKDIR /app/server

RUN npm install
CMD ["npm", "run", "development"]
