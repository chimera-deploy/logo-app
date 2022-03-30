FROM node:16-alpine as build


WORKDIR /usr/app/logoui
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/app/logoui/build /usr/share/nginx/html
CMD ["sh", "-c", "cd /usr/share/nginx/html/ && nginx -g 'daemon off;'"]
