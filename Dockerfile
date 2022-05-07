FROM node:16-alpine AS  build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-stage /app/build/ /etc/nginx/html/tasks-app/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# docker run --rm -ti -p 8012:8012 --name tasks-app tasks-app:anton
