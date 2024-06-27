#!/bin/bash

export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v22.3.0/bin

cd cicd

git stash

git pull origin main

npm install
npm run build

pm2 kill

pm2 start
