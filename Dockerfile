FROM node:14.19.1

RUN mkdir -p /app
WORKDIR /app

# Installing dependencies 
COPY package.json ./
COPY .npmrc ./
RUN npm install


# Running the app
CMD ["npm", "run", "dev"]