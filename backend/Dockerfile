ARG DATABASE_URL=${DATABASE_URL}
FROM node:alpine
WORKDIR /usr/src
COPY ./package*.json ./
RUN yarn 
# We copy and install package.json node modules with yarn then move down a directory and add the filesystem
ENV PATH /usr/src/node_modules/.bin:$PATH
WORKDIR /usr/src/app
COPY ./ ./ 
# yarn build calls keystone-next build for the prod files
RUN yarn build
ENV PORT=3000
EXPOSE 3000
# yarn start calls keystone-next build && keystone-next start to build for prod & run the server
CMD yarn start
