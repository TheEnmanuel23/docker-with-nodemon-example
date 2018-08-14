FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Install pm2
RUN npm install pm2 -g

COPY . .

# Show current folder structure in logs
RUN ls -al -R

EXPOSE 8080
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
