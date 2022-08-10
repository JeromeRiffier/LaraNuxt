FROM node:lts-alpine

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ARG NUXT_PORT=5000
ENV NUXT_PORT=${NUXT_PORT}

# create application directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# update and install dependency (git for npm fallback, python, gcc for node-gyp)
RUN apk update && apk upgrade
RUN apk add git python3 make gcc g++

# expose 5000 on container
EXPOSE ${NUXT_PORT}

# start the app
# CMD [ "npm", "install", "run build", "start" ]
CMD [ "sh", "-c", "npm install --also=dev && npm run build && npm run start" ]
