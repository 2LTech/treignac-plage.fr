#!/bin/sh

set -e

# Install
YARN_ENABLE_SCRIPTS=false yarn install

# Depcheck
yarn depcheck

# Prettier
yarn prettier

# Lint
yarn lint

# Build
yarn build
