#!/usr/bin/env bash

rm -rf node_modules && echo "Removed ./node_modules"
[ -d basily-web ] && cd basily-web && rm -rf node_modules && echo "Removed basily-web/node_modules" && cd -
[ -d basily-backend ] && cd basily-backend && rm -rf node_modules && echo "Removed basily-backend/node_modules" && cd -
[ -d basily-mobile ] && cd basily-mobile && rm -rf node_modules && echo "Removed basily-mobile/node_modules" && cd -
