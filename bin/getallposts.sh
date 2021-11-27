#!/usr/bin/env bash

POSTS=$(cat posts.json | jq | grep '"id"' | sed 's/[^0-9]//g')

for i in ${POSTS}
do 
  bin/getpost.js "$i"
  sleep 1  
done
