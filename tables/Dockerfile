# Start your image with a node base image
FROM node:18.19-alpine3.18

# The /app directory should act as the main application directory
#исправила
COPY . /tables 
WORKDIR /tables 

# Install node packages, install serve, build the app, and remove dependencies at the end
# исправила
RUN npm install -g http-server@13.0.2 && yarn install && yarn build
#&& npm install angular-cli
EXPOSE 8080
# Start the app using serve command
CMD [ "http-server", "dist/tables"]
# tak ty popadesh vb container
#CMD ["sh", "-c"]

