#!/bin/bash

export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v22.3.0/bin

cd cicd

git pull origin main


pm2 kill

pm2 start