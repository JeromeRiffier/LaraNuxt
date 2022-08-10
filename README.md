# LaraNuxt

<p align="center">
  <a href="https://laravel.com"><img alt="Laravel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" width="92" height="92" /></a>
  <a href="https://https://laradock.io/"><img src="https://laradock.io/images/favicons/ms-icon-310x310.png" alt="Laradock" width="92" height="92" ></a>
  <a href="https://vuejs.org"><img alt="Vue.js" src="https://vuejs.org/images/logo.png" width="92" height="92" /></a>
  <a href="https://nuxtjs.org/"><img alt="Nuxt.js" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Nuxt-js.png" width="92" height="92" /></a>
  <a href="https://vuetifyjs.com/"><img alt="Vuetify" src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" width="92" height="92" /></a>
  <a href="https://eslint.org/"><img alt="ESLint" src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" width="92" height="92" /></a>
  <a href="https://auth.nuxtjs.org/"><img alt="Nuxt Auth next" src="https://auth.nuxtjs.org/logo-dark.svg" width="92" height="92" /></a>
  <a href="https://davestewart.github.io/vuex-pathify/"><img alt="Vuex Pathify" src="https://davestewart.github.io/vuex-pathify/assets/img/logos/logo.svg" width="92" height="92" /></a>
  <a href="hhttps://www.docker.com/"><img alt="Docker" src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" width="92" height="92" /></a>
</p>

## Description

This project is a template for projects using Laravel 9 as a backend and Nuxt 2 as a Front end and running in Docker.
Laravel and Nuxt are already interconnected, authentication are in place using Nuxt Auth and Laravel Passport.
It may not be perfect but I beleive that you can save so much time.

## Getting started

### Prerequisites

To install this project you should already have : 

- Docker
- Node

### Laradock installation

After cloning the project, in the project folder run the following commands:
```
git submodule init
git submodule update --init --recursive
```
Then go to the laradock folder and copy the .env.exemple to .env

Set up your project name in `COMPOSE_PROJECT_NAME`

And set the `PHP_VERSION` you want to use (min 8.1)

That is the minimum to make the project work but if you want to see more about laradock configuration you can go in there
<a href="https://https://laradock.io/">documentation</a>


### .env configuration

In the root of the project copy the other .env.example to .env

It is a standard laravel 9 .env  for more detail about laravel configuration go <a href="https://laravel.com">here</a>

## Build the containers

From the **laradock** folder:

```
docker-compose -f ../docker-compose.yml --project-directory ./ build nginx mysql redis workspace php-fpm docker-in-docker php-worker nuxt
```


### Start the containers

From the **laradock** folder:

```
docker-compose -f ../docker-compose.yml --project-directory ./ up -d nginx mysql redis workspace php-fpm docker-in-docker php-worker nuxt
```


### Install the project

To run composer you first need to access the workspace shell by typing this (still in the laradock folder) :

```
docker-compose exec workspace bash
```

Then you can run `composer install` to install the laravel part.

To install the nuxt you will need to run `npm install` from another terminal (outside of the workspace)


### Generate "Password Grant Client"

In the workspace run:

```
php artisan passport:client --password
```
You can let all by defaults and just copy `CLIENT_ID` & `CLIENT_SECRET` to the .env. 
This step will be used to authenticate the front (nuxt) in laravel (see <a href="https://laravel.com/docs/9.x/passport" target="_blank"> Passport documentation</a> for more details).
Just remember that this token is saved in database, so anytime you reset the database you will need to redo this step.

### Run the Nuxt part
The "Nuxt" image of docker is set for production build. So in development run "npm run dev" to start the nuxt server.




#### Troubleshooting

If you get `'cross-env' is not recognized as an internal or external command` when running `npm run dev`
Try `npm install --save-dev cross-env`
