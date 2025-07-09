FROM node:20-alpine

WORKDIR /app
COPY . .
RUN npm install

# Change to 3002 in service-dialog-b
EXPOSE 3001 

# Or "npm start" if that's how your service runs
CMD ["node", "index.js"] 
