# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN yarn

# Copy the app's source code to the working directory
COPY . .

# Build the app
RUN yarn build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["yarn", "dev"]
