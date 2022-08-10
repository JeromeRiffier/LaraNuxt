#!/usr/bin/env bash

sudo docker-compose -f ../docker-compose.yml -f ../docker-compose.override.yml --project-directory ./ up -d nginx mysql redis workspace php-fpm docker-in-docker php-worker nuxt
sudo docker-compose -f ../docker-compose.yml -f ../docker-compose.override.yml --project-directory ./ restart nuxt php-worker
