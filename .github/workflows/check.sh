#!/bin/sh

set -e

# Install
yarn install

# Depcheck
yarn depcheck

# Prettier
yarn prettier

# Lint
yarn lint

# Build
yarn build
