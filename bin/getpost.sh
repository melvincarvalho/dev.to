#!/usr/bin/env bash



curl https://dev.to/api/articles/${1} | jq > ./posts/${1}.json