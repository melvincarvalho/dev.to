#!/usr/bin/env bash

POST=${1}
API_URI="https://dev.to/api/articles/"

JQ_EXE="/usr/bin/jq"
CURL_EXE="/usr/bin/curl"

POSTS_DIR="./posts"
EXT=".json"

if [ -z "${POST}" ]
then 
  echo "usage: getpost.sh <postid>"
  exit
fi

"${CURL_EXE}" "${API_URI}""${POST}" | "${JQ_EXE}" > "${POSTS_DIR}"/"${POST}""${EXT}"

