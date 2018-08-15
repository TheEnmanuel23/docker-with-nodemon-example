FROM node:8
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Install pm2
RUN npm install nodemon -g

COPY . .

# Show current folder structure in logs
RUN ls -al -R

EXPOSE 8080
CMD ["node", "server.js"]
