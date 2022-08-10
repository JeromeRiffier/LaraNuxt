#!/usr/bin/env bash

sudo docker-compose -f ../docker-compose.yml -f ../docker-compose.override.yml --project-directory ./ build nginx mysql redis workspace php-fpm docker-in-docker php-worker nuxt