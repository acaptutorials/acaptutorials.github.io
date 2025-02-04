FROM node:20.15.0-alpine AS base
RUN mkdir -p /opt/docs
WORKDIR /opt/docs
RUN adduser -S client
RUN chown -R client /opt/docs
COPY package*.json ./

# BUILD TARGET
FROM base AS build
RUN npm install && npm cache clean --force
COPY . ./
RUN npm run export
USER client

# DEVELOPMENT CLIENT PROFILE
FROM base AS development
ENV NODE_ENV=development
RUN npm install && npm cache clean --force
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "dev"]

# PRODUCTION CLIENT PROFILE
FROM nginx:1.22.0-alpine AS production
COPY --from=build /opt/docs/out /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
