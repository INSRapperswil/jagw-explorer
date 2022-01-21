LABEL maintainer="Michel Bongard"

FROM node:14-alpine AS build_base
ENV NODE_ENV production

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --production

COPY . .
RUN yarn build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production

COPY --from=build_base /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
